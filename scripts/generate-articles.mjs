import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { POSTS } from '../js/posts/index.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const site = 'https://kabaxion.github.io/My-Blog/';
const configText = fs.readFileSync(path.join(root, 'js/config.js'), 'utf8');
const getConfig = (key, fallback) => {
  const match = configText.match(new RegExp(`${key}:\\s*["']([^"']*)["']`));
  return match?.[1] || fallback;
};
const siteName = getConfig('siteName', "Kabaka's Journal");
const author = getConfig('author', 'Kabaka');
const authorRole = getConfig('authorRole', 'Writer and educator');
const authorPhoto = getConfig('authorPhoto', '');
const authorBio = getConfig('authorBio', "I?m Kabaka, a registered nurse, writer, educator and app developer. I write about healthcare, education, research, technology and the experience of learning and creating.");
const description = 'Thoughtful articles on nursing, healthcare, education, research, technology, writing and life.';
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clean = value => String(value ?? '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
const dateIso = value => /^\d{4}-\d{2}-\d{2}$/.test(value || '') ? value : '';
const urls = [];

for (const post of POSTS.filter(p => p.published !== false)) {
  const slug = String(post.slug || '').trim();
  if (!/^[a-z0-9-]+$/.test(slug)) throw new Error(`Invalid article slug: ${slug}`);
  const dir = path.join(root, 'articles', slug);
  fs.mkdirSync(dir, { recursive: true });
  const canonical = `${site}articles/${slug}/`;
  const title = `${clean(post.title)} | ${siteName}`;
  const excerpt = clean(post.excerpt || description).slice(0, 300);
  const image = post.image ? `${site}${post.image.replace(/^\//, '')}` : `${site}kabakas-journal-favicon.png`;
  const date = dateIso(post.date);
  const content = post.content || '<p>This article is being prepared.</p>';
  const tags = Array.isArray(post.tags) ? post.tags : [];
  const encodedUrl = encodeURIComponent(canonical);
  const encodedTitle = encodeURIComponent(clean(post.title));
  const encodedText = encodeURIComponent(clean(post.excerpt || description));
  const emailSubject = encodeURIComponent(`I thought you might enjoy: ${clean(post.title)}`);
  const emailBody = encodeURIComponent(`${clean(post.excerpt || description)}\n\nRead the article here:\n${canonical}`);
  const shareIcon = (platform) => {
    const icons = {
      whatsapp: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M12.04 2a9.91 9.91 0 0 0-8.45 15.1L2 22l5.04-1.56A9.96 9.96 0 1 0 12.04 2Zm0 18.1a8.13 8.13 0 0 1-4.15-1.14l-.3-.18-2.99.93.97-2.91-.2-.31a8.1 8.1 0 1 1 6.67 3.61Zm4.45-6.07c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.09 3.62.57.25 1.01.4 1.36.51.57.18 1.09.15 1.5.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z\"/></svg>",
      facebook: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M13.5 21v-8.2h2.76l.41-3.2H13.5V7.56c0-.93.26-1.56 1.6-1.56h1.7V3.14C15.97 3.05 15.13 3 14.28 3c-2.5 0-4.21 1.53-4.21 4.34V9.6H7.25v3.2h2.82V21h3.43Z\"/></svg>",
      x: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.42L5.56 22H2.42l7.25-8.29L1.8 2h6.4l4.43 6.76L18.9 2Zm-1.1 18h1.73L7.27 3.89H5.41L17.8 20Z\"/></svg>",
      linkedin: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.34 18H5.67V9.4h2.67ZM7 8.22a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1ZM18.34 18h-2.67v-4.18c0-1-.02-2.29-1.4-2.29-1.4 0-1.61 1.1-1.61 2.22V18H10V9.4h2.56v1.17h.04a2.81 2.81 0 0 1 2.53-1.39c2.7 0 3.21 1.78 3.21 4.1Z\"/></svg>",
      telegram: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M21.8 4.2 18.5 20c-.25 1.12-.9 1.4-1.83.87l-5.05-3.72-2.44 2.35c-.27.27-.5.5-1.02.5l.36-5.14 9.36-8.45c.41-.36-.09-.56-.63-.2L5.68 13.4.7 11.84c-1.08-.34-1.1-1.08.22-1.6L20.4 2.7c.9-.33 1.68.22 1.4 1.5Z\"/></svg>",
      reddit: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"M21.5 12a2.5 2.5 0 0 0-4.2-1.82 12.4 12.4 0 0 0-4.45-1.3l.76-3.56 2.48.53a1.7 1.7 0 1 0 .2-1.05l-3.02-.64a.55.55 0 0 0-.66.42l-.9 4.25a12.6 12.6 0 0 0-5.02 1.35A2.5 2.5 0 1 0 3.5 14.3c0 3.25 3.8 5.9 8.5 5.9s8.5-2.65 8.5-5.9c0-.3-.03-.6-.1-.89A2.48 2.48 0 0 0 21.5 12ZM8 13.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Zm7.05 3.38a4.7 4.7 0 0 1-6.1 0 .5.5 0 0 1 .7-.71 3.7 3.7 0 0 0 4.7 0 .5.5 0 0 1 .7.71ZM16 13.25a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z\"/></svg>",
      email: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M3 5h18v14H3z M3 6l9 7 9-7\"/></svg>",
      copy: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M10 13a5 5 0 0 0 7.07 0l3-3A5 5 0 0 0 13 2.93l-1.72 1.71\"/><path fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M14 11a5 5 0 0 0-7.07 0l-3 3A5 5 0 0 0 11 21.07l1.71-1.71\"/></svg>"
    };
    return icons[platform] || "";
  };
  const tagLinks = tags.map(tag => `<a class="tag" href="../../#tag-${encodeURIComponent(String(tag).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''))}">#${esc(tag)}</a>`).join(' ');
  const schema = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: clean(post.title),
    description: excerpt, datePublished: date || undefined, dateModified: date || undefined,
    author: { '@type': 'Person', name: author }, publisher: { '@type': 'Organization', name: siteName },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical }, image
  };
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title><meta name="description" content="${esc(excerpt)}">
<link rel="canonical" href="${esc(canonical)}"><meta name="robots" content="index,follow,max-image-preview:large">
<meta property="og:type" content="article"><meta property="og:site_name" content="${esc(siteName)}"><meta property="og:title" content="${esc(clean(post.title))}"><meta property="og:description" content="${esc(excerpt)}"><meta property="og:url" content="${esc(canonical)}"><meta property="og:image" content="${esc(image)}"><meta property="og:image:alt" content="${esc(clean(post.title))}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(clean(post.title))}"><meta name="twitter:description" content="${esc(excerpt)}"><meta name="twitter:image" content="${esc(image)}"><meta name="twitter:image:alt" content="${esc(clean(post.title))}">
<link rel="icon" type="image/png" sizes="512x512" href="../../kabakas-journal-favicon.png"><link rel="icon" type="image/svg+xml" href="../../favicon.svg"><link rel="stylesheet" href="../../css/style.css">
<script type="application/ld+json">${JSON.stringify(schema)}</script>
</head><body><header class="site-header"><div class="wrap bar"><a class="brand" href="../../">${esc(siteName)}</a><nav class="nav" aria-label="Main"><a href="../../">Home</a><a href="../../#about">About</a><a href="../../#contact">Contact</a></nav></div></header>
<main class="wrap" style="padding-top:2rem;padding-bottom:4rem"><article class="article"><div class="crumbs"><a href="../../">Home</a> / <a href="../../#cat-${encodeURIComponent(String(post.category || '').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''))}">${esc(post.category || 'Article')}</a></div><h1>${esc(post.title)}</h1><div class="byline"><span>By ${esc(author)}</span>${date ? `<time datetime="${date}">${new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'})}</time>` : ''}<span>${Number(post.readTime) || 1} min read</span></div>${post.image ? `<figure class="article-cover"><img src="../../${esc(post.image.replace(/^\//,''))}" alt="${esc(clean(post.title))}"></figure>` : ''}<div class="prose">${content}</div><div class="tags">${tagLinks}</div><section class="share-section" aria-label="Share this article">
<div class="share-heading"><span class="section-kicker">Enjoyed this article?</span><h2>Share This Article</h2><p>Know someone who might find this useful? Share it with them.</p></div>
<div class="share">
<a class="share-link share-whatsapp" href="https://wa.me/?text=${encodedTitle}%20${encodedUrl}" target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp" title="WhatsApp"><span class="share-icon">${shareIcon("whatsapp")}</span><span>WhatsApp</span></a>
<a class="share-link share-facebook" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}" target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" title="Facebook"><span class="share-icon">${shareIcon("facebook")}</span><span>Facebook</span></a>
<a class="share-link share-x" href="https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}" target="_blank" rel="noopener noreferrer" aria-label="Share on X" title="X"><span class="share-icon">${shareIcon("x")}</span><span>X</span></a>
<a class="share-link share-linkedin" href="https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}" target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" title="LinkedIn"><span class="share-icon">${shareIcon("linkedin")}</span><span>LinkedIn</span></a>
<a class="share-link share-telegram" href="https://t.me/share/url?url=${encodedUrl}&text=${encodedText}" target="_blank" rel="noopener noreferrer" aria-label="Share on Telegram" title="Telegram"><span class="share-icon">${shareIcon("telegram")}</span><span>Telegram</span></a>
<a class="share-link share-reddit" href="https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}" target="_blank" rel="noopener noreferrer" aria-label="Share on Reddit" title="Reddit"><span class="share-icon">${shareIcon("reddit")}</span><span>Reddit</span></a>
<a class="share-link share-email" href="mailto:?subject=${emailSubject}&body=${emailBody}" aria-label="Share by email" title="Email"><span class="share-icon">${shareIcon("email")}</span><span>Email</span></a>
<button class="share-link share-copy" id="copyLink" type="button" aria-label="Copy article link" title="Copy link"><span class="share-icon">${shareIcon("copy")}</span><span>Copy Link</span></button>
</div></section></article>
<section class="article"><aside class="author-card"><div class="author-card-profile"><div class="avatar sm"><span>${esc(author.charAt(0).toUpperCase() || 'K')}</span><img src="../../${esc(authorPhoto)}" alt="Photo of ${esc(author)}" onerror="this.remove()"></div></div><div class="author-card-content"><span class="section-kicker">About the author</span><h3>${esc(author)}</h3><p class="role">${esc(authorRole)}</p><p class="author-bio">${esc(authorBio)}</p><a href="../../#about" class="author-more">Read my full story &rarr;</a></div></aside></section></main>
<footer class="site-footer"><div class="wrap foot"><strong>${esc(siteName)}</strong><p>${esc(authorRole)}</p></div><p class="copy">&copy; ${new Date().getFullYear()} ${esc(siteName)}. All rights reserved.</p></footer>
<script>document.getElementById('copyLink')?.addEventListener('click',async()=>{const button=document.getElementById('copyLink');try{await navigator.clipboard.writeText(window.location.href);button.querySelector('span:last-child').textContent='Copied!';}catch(e){window.prompt('Copy this article link:',window.location.href);}});</script>
</body></html>`;
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  urls.push({ loc: canonical, lastmod: date });
}

const home = `${site}`;
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${home}</loc></url>\n${urls.map(u => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(root, 'sitemap.xml'), sitemap, 'utf8');
console.log(`Generated ${urls.length} static article pages and updated sitemap.xml.`);
