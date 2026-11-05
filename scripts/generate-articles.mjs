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
const siteName = getConfig('siteName', 'Kabaka’s Journal');
const author = getConfig('author', 'Kabaka');
const authorRole = getConfig('authorRole', 'Writer and educator');
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
  const image = post.image ? `${site}${post.image.replace(/^\//, '')}` : `${site}favicon.svg`;
  const date = dateIso(post.date);
  const content = post.content || '<p>This article is being prepared.</p>';
  const tags = Array.isArray(post.tags) ? post.tags : [];
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
<meta property="og:type" content="article"><meta property="og:site_name" content="${esc(siteName)}"><meta property="og:title" content="${esc(clean(post.title))}"><meta property="og:description" content="${esc(excerpt)}"><meta property="og:url" content="${esc(canonical)}"><meta property="og:image" content="${esc(image)}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(clean(post.title))}"><meta name="twitter:description" content="${esc(excerpt)}"><meta name="twitter:image" content="${esc(image)}">
<link rel="icon" type="image/svg+xml" href="../../favicon.svg"><link rel="stylesheet" href="../../css/style.css">
<script type="application/ld+json">${JSON.stringify(schema)}</script>
</head><body><header class="site-header"><div class="wrap bar"><a class="brand" href="../../">${esc(siteName)}</a><nav class="nav" aria-label="Main"><a href="../../">Home</a><a href="../../#about">About</a><a href="../../#contact">Contact</a></nav></div></header>
<main class="wrap" style="padding-top:2rem;padding-bottom:4rem"><article class="article"><div class="crumbs"><a href="../../">Home</a> / <a href="../../#cat-${encodeURIComponent(String(post.category || '').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''))}">${esc(post.category || 'Article')}</a></div><h1>${esc(post.title)}</h1><div class="byline"><span>By ${esc(author)}</span>${date ? `<time datetime="${date}">${new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric',timeZone:'UTC'})}</time>` : ''}<span>${Number(post.readTime) || 1} min read</span></div>${post.image ? `<figure class="article-cover"><img src="../../${esc(post.image.replace(/^\//,''))}" alt="${esc(post.category || 'Article')} article image"></figure>` : ''}<div class="prose">${content}</div><div class="tags">${tagLinks}</div><div class="share"><span>Share:</span><a href="https://wa.me/?text=${encodeURIComponent(clean(post.title)+' '+canonical)}" target="_blank" rel="noopener">WhatsApp</a><a href="https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonical)}" target="_blank" rel="noopener">LinkedIn</a><button type="button" id="copyLink">Copy link</button></div></article><section class="article"><h2>About the author</h2><p>${esc(author)} · ${esc(authorRole)}</p><p>Explore more articles at <a href="../../">${esc(siteName)}</a>.</p></section></main>
<footer class="site-footer"><div class="wrap foot"><strong>${esc(siteName)}</strong><p>${esc(authorRole)}</p></div><p class="copy">&copy; ${new Date().getFullYear()} ${esc(siteName)}. All rights reserved.</p></footer>
<script>document.getElementById('copyLink')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);document.getElementById('copyLink').textContent='Copied';}catch(e){window.prompt('Copy this article link:',location.href);}});</script>
</body></html>`;
  fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
  urls.push({ loc: canonical, lastmod: date });
}

const home = `${site}`;
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${home}</loc></url>\n${urls.map(u => `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}</url>`).join('\n')}\n</urlset>\n`;
fs.writeFileSync(path.join(root, 'sitemap.xml'), sitemap, 'utf8');
console.log(`Generated ${urls.length} static article pages and updated sitemap.xml.`);
