
$ErrorActionPreference = 'Stop'

$ad = '<div class="ad-unit" style="margin:2rem auto;max-width:1000px;min-height:100px;text-align:center"><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-6426567753637486" data-ad-slot="8269854670" data-ad-format="auto" data-full-width-responsive="true"></ins></div><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>'

# Update the article generator so future rebuilds retain the ad.
$generatorPath = ".\scripts\generate-articles.mjs"
$generator = [System.IO.File]::ReadAllText((Resolve-Path $generatorPath))
$footer = '<footer class="site-footer">'

if ($generator -notmatch 'data-ad-slot="8269854670"') {
    if (-not $generator.Contains($footer)) {
        throw "Could not find the article generator footer."
    }

    $generator = $generator.Replace($footer, $ad + "`r`n" + $footer)
    [System.IO.File]::WriteAllText((Resolve-Path $generatorPath), $generator, [System.Text.UTF8Encoding]::new($false))
}

# Add the ad unit to every HTML page except the Privacy Policy.
$files = Get-ChildItem -Path . -Recurse -Filter *.html -File |
    Where-Object {
        $_.FullName -notmatch '[\\/]\.git[\\/]' -and
        $_.Name -ne 'privacy.html'
    }

$count = 0

foreach ($file in $files) {
    $html = [System.IO.File]::ReadAllText($file.FullName)

    if ($html -notmatch 'data-ad-slot="8269854670"') {
        $updated = [regex]::Replace(
            $html,
            '(?i)(<footer\b)',
            ($ad + "`r`n" + '$1'),
            1
        )

        if ($updated -ne $html) {
            [System.IO.File]::WriteAllText(
                $file.FullName,
                $updated,
                [System.Text.UTF8Encoding]::new($false)
            )
            $count++
        }
    }
}

Write-Host "Ad unit added to $count HTML pages."
Write-Host "Article generator updated."
