/* Blog engine. You normally edit config.js and posts.js, not this file. */
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const app = $("#app");
  let shown = CONFIG.postsPerPage;
  let query = "";

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmtDate = d => new Date(d + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const grad = c => `linear-gradient(135deg, ${c.a}, ${c.b})`;
  const cats = () => [...new Set(POSTS.map(p => p.category))];
  const sorted = () => [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toast.id); toast.id = setTimeout(() => t.classList.remove("show"), 2600);
  }

  function avatar(cls) {
    const initial = esc((CONFIG.author || "K").charAt(0).toUpperCase());
    const img = CONFIG.authorPhoto ? `<img src="${esc(CONFIG.authorPhoto)}" alt="Photo of ${esc(CONFIG.author)}" onerror="this.remove()">` : "";
    return `<div class="avatar ${cls || ""}"><span>${initial}</span>${img}</div>`;
  }

  function authorCard() {
    return `<aside class="author-card">${avatar("sm")}<div><strong>${esc(CONFIG.author)}</strong><span class="role">${esc(CONFIG.authorRole)}</span><p>${esc(CONFIG.about[0])}</p><a href="#about">More about me</a></div></aside>`;
  }

  function topics() {
    return `<section class="topics" aria-label="Topics">${cats().map(c => {
      const ps = POSTS.filter(p => p.category === c), cv = ps[0].cover;
      return `<a class="topic" href="#cat-${slugify(c)}" style="background:${grad(cv)}"><span class="sym">${esc(cv.symbol)}</span><strong>${esc(c)}</strong><small>${ps.length} post${ps.length > 1 ? "s" : ""}</small></a>`;
    }).join("")}</section>`;
  }

  function card(p) {
    return `<a class="card" href="#${p.slug}">
      <div class="cover" style="background:${grad(p.cover)}">${esc(p.cover.symbol)}</div>
      <div class="body">
        <span class="cat"><i style="background:${p.cover.b}"></i>${esc(p.category)}</span>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.excerpt)}</p>
        <span class="foot">${fmtDate(p.date)} &middot; ${p.readTime} min read</span>
      </div></a>`;
  }

  function filters(active) {
    return `<div class="filters">
      <a href="#home" class="${active === "all" ? "active" : ""}">All</a>
      ${cats().map(c => `<a href="#cat-${slugify(c)}" class="${active === slugify(c) ? "active" : ""}">${esc(c)}</a>`).join("")}
    </div>`;
  }

  function newsletter() {
    return `<section class="news">
      <div><h2>Get new posts in your inbox</h2><p>One short email when I publish. No spam, leave any time.</p></div>
      <form id="newsForm"><input type="email" name="email" placeholder="Your email address" required aria-label="Email address"><button class="btn" type="submit">Subscribe</button></form>
    </section>`;
  }

  function listView(list, title, active, withHero) {
    const first = withHero ? (list.find(p => p.featured) || list[0]) : null;
    const rest = first ? list.filter(p => p !== first) : list;
    const slice = rest.slice(0, shown);
    let html = "";
    if (first) {
      html += `<section class="hero" data-symbol="${esc(first.cover.symbol)}" style="--hero-bg:${grad(first.cover)}">
        <div class="meta"><span class="chip">Featured</span><span>${esc(first.category)}</span><span>${fmtDate(first.date)}</span></div>
        <h1>${esc(first.title)}</h1>
        <p>${esc(first.excerpt)}</p>
        <a class="btn" href="#${first.slug}">Read the post</a></section>`;
    }
    if (withHero) html += topics();
    html += `<div class="section-head"><h2>${esc(title)}</h2>${filters(active)}</div>`;
    html += slice.length ? `<div class="grid">${slice.map(card).join("")}</div>` : `<div class="empty">No posts found. Try a different word or category.</div>`;
    if (rest.length > shown) html += `<div class="more"><button class="btn ghost" id="moreBtn">Load more posts</button></div>`;
    html += newsletter();
    return html;
  }

  function postView(p) {
    const related = sorted().filter(x => x !== p && (x.category === p.category || x.tags.some(t => p.tags.includes(t)))).slice(0, 3);
    const url = encodeURIComponent(location.href.split("#")[0] + "#" + p.slug);
    const text = encodeURIComponent(p.title);
    document.title = p.title + " | " + CONFIG.siteName;
    return `<article class="article">
      <div class="crumbs"><a href="#home">Home</a> / <a href="#cat-${slugify(p.category)}">${esc(p.category)}</a></div>
      <h1>${esc(p.title)}</h1>
      <div class="byline"><span>By ${esc(CONFIG.author)}</span><span>${fmtDate(p.date)}</span><span>${p.readTime} min read</span></div>
      <div class="article-cover" style="background:${grad(p.cover)}">${esc(p.cover.symbol)}</div>
      <div class="prose">${p.content}</div>
      <div class="tags">${p.tags.map(t => `<a href="#tag-${slugify(t)}">#${esc(t)}</a>`).join("")}</div>
      <div class="share"><span>Share:</span>
        <a href="https://wa.me/?text=${text}%20${url}" target="_blank" rel="noopener">WhatsApp</a>
        <a href="https://twitter.com/intent/tweet?text=${text}&url=${url}" target="_blank" rel="noopener">X</a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=${url}" target="_blank" rel="noopener">Facebook</a>
        <button id="copyLink" type="button">Copy link</button></div>
    </article>
    <div class="article">${authorCard()}</div>
    ${related.length ? `<section class="related"><div class="section-head"><h2>Keep reading</h2></div><div class="grid">${related.map(card).join("")}</div></section>` : ""}
    ${newsletter()}`;
  }

  function aboutView() {
    return `<section class="page">
      <div class="about-head">
        ${avatar()}
        <div><h1>About</h1><p class="role">${esc(CONFIG.author)} &middot; ${esc(CONFIG.authorRole)}</p></div>
      </div>
      ${CONFIG.about.map(t => `<p>${esc(t)}</p>`).join("")}
      <p><a class="btn" href="#contact">Get in touch</a></p></section>`;
  }

  function contactView() {
    return `<section class="page"><h1>Contact</h1><p>Send me a message and I will reply as soon as I can.</p>
      <form class="form" id="contactForm">
        <label>Your name<input name="name" required></label>
        <label>Your email<input type="email" name="email" required></label>
        <label>Message<textarea name="message" required></textarea></label>
        <button class="btn" type="submit">Send message</button>
      </form></section>`;
  }

  /* Router */
  function route() {
    const hash = decodeURIComponent(location.hash.replace(/^#/, "")) || "home";
    document.title = CONFIG.siteName;
    let html = "", nav = "home";
    const post = POSTS.find(p => p.slug === hash);

    if (query) {
      const q = query.toLowerCase();
      const found = sorted().filter(p => (p.title + p.excerpt + p.category + p.tags.join(" ") + p.content).toLowerCase().includes(q));
      html = listView(found, `Results for "${esc(query)}"`, "none", false);
    } else if (post) { html = postView(post); nav = ""; }
    else if (hash === "about") { html = aboutView(); nav = "about"; }
    else if (hash === "contact") { html = contactView(); nav = "contact"; }
    else if (hash.startsWith("cat-")) {
      const s = hash.slice(4), name = cats().find(c => slugify(c) === s) || s;
      html = listView(sorted().filter(p => slugify(p.category) === s), name, s, false);
    } else if (hash.startsWith("tag-")) {
      const s = hash.slice(4);
      html = listView(sorted().filter(p => p.tags.some(t => slugify(t) === s)), "Tagged #" + s, "none", false);
    } else html = listView(sorted(), "Latest posts", "all", true);

    app.innerHTML = html;
    document.querySelectorAll(".nav a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + nav));
    $("#nav").classList.remove("open");
    bind();
    if (!query) window.scrollTo(0, 0);
  }

  async function sendForm(form, endpoint, okMsg, fallback) {
    const data = new FormData(form);
    if (!endpoint) { fallback(data); return; }
    try {
      const r = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!r.ok) throw new Error();
      form.reset(); toast(okMsg);
    } catch (e) { toast("Could not send. Please try again."); }
  }

  function bind() {
    const more = $("#moreBtn");
    if (more) more.onclick = () => { shown += CONFIG.postsPerPage; route(); };
    const copy = $("#copyLink");
    if (copy) copy.onclick = async () => {
      try { await navigator.clipboard.writeText(location.href); toast("Link copied"); } catch (e) { toast("Copy the link from the address bar"); }
    };
    const nf = $("#newsForm");
    if (nf) nf.onsubmit = e => { e.preventDefault(); sendForm(nf, CONFIG.newsletterEndpoint, "Thanks for subscribing!", () => { nf.reset(); toast("Demo mode: add newsletterEndpoint in config.js"); }); };
    const cf = $("#contactForm");
    if (cf) cf.onsubmit = e => {
      e.preventDefault();
      sendForm(cf, CONFIG.contactEndpoint, "Message sent. Thank you!", d => {
        location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Message from " + d.get("name"))}&body=${encodeURIComponent(d.get("message") + "\n\n" + d.get("email"))}`;
      });
    };
  }

  /* Static parts */
  function setup() {
    $("#brand").innerHTML = `<span class="brand-mark">&#9998;</span>${esc(CONFIG.siteName)}`;
    $("#footBrand").textContent = CONFIG.siteName;
    $("#footTag").textContent = CONFIG.tagline;
    $("#socials").innerHTML = CONFIG.social.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}</a>`).join("");
    $("#copy").textContent = `© ${new Date().getFullYear()} ${CONFIG.author}. All rights reserved.`;

    let theme = "light";
    try { theme = localStorage.getItem("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); } catch (e) {}
    document.documentElement.dataset.theme = theme;
    $("#themeToggle").onclick = () => {
      theme = theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = theme;
      try { localStorage.setItem("theme", theme); } catch (e) {}
    };
    $("#menuToggle").onclick = () => $("#nav").classList.toggle("open");
    $("#searchToggle").onclick = () => {
      const row = $("#searchRow"); row.hidden = !row.hidden;
      if (!row.hidden) $("#searchInput").focus(); else { query = ""; $("#searchInput").value = ""; route(); }
    };
    $("#searchInput").oninput = e => { query = e.target.value.trim(); shown = CONFIG.postsPerPage; route(); };
    addEventListener("scroll", () => {
      const h = document.documentElement;
      $("#progress").style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100 + "%";
    }, { passive: true });
    addEventListener("hashchange", () => { query = ""; $("#searchInput").value = ""; shown = CONFIG.postsPerPage; route(); });
  }

  setup();
  route();
})();
