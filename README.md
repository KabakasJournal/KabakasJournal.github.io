# Kabaka's Journal

### Knowledge Today. A Brighter Tomorrow.

**Kabaka's Journal** is a personal knowledge-sharing and publishing platform created by Ezeikpe Akachukwu Kingsley Kabaka.

The journal explores ideas, practical knowledge, professional development and personal experiences across healthcare, technology, education, research, writing and everyday life.

**Visit the website:** https://kabakasjournal.github.io/

---

## About the Journal

Learning does not end in one profession or discipline. Kabaka's Journal brings together different areas of knowledge in one place, making room for useful explanations, thoughtful discussions, practical lessons and ideas worth exploring.

The journal documents what I know, what I am learning, what I am building and what I believe may be useful to others.

## Topics and Categories

- **Nursing and Healthcare:** Nursing education, clinical knowledge, patient safety, healthcare practice and professional development.
- **Technology:** Software development, web development, programming, digital tools and practical technology.
- **Writing and Publishing:** Books, articles, storytelling, creative work and the writing process.
- **Education and Teaching:** Learning resources, tutorials, simplified explanations and knowledge-sharing.
- **Research:** Research methods, information analysis and evidence-informed thinking.
- **Personal Development and Life:** Experiences, reflections, lessons and ideas that encourage growth.

## Website Features

- Articles covering multiple knowledge areas.
- Individual pages for published articles.
- Responsive design for desktop and mobile devices.
- Article search and navigation.
- Contact and newsletter features.
- Social media links.
- Search-engine-friendly metadata and sitemap.
- Article generation and publishing utilities.

## Technology

Kabaka's Journal is built as a lightweight static website using:

- HTML
- CSS
- JavaScript
- Git and GitHub
- Node.js and npm for supported development scripts
- GitHub Pages for website hosting

The website is designed to remain lightweight, accessible and straightforward to maintain.

---

# Project Maintenance Guide

This section contains practical instructions for working on the website and maintaining its content.

## 1. Opening the Project

1. Open Visual Studio Code.
2. Select **File → Open Folder**.
3. Choose the `My Blog` project folder, the one that directly contains `index.html`.
4. Confirm that the main folders and files are visible in the Explorer panel.

Do not open or upload an outer folder that creates an unnecessary nested copy of the website.

## 2. Understanding the Project Structure

The project contains the following important areas:

| File or folder | Purpose |
|---|---|
| `index.html` | Main homepage |
| `privacy.html` | Privacy Policy |
| `css/` | Website styles and responsive layouts |
| `js/` | JavaScript functionality and website content |
| `js/posts/` | Article content modules |
| `articles/` | Individual published article pages |
| `images/` | Website photographs and visual assets |
| `scripts/` | Article generation and other development utilities |
| `ads.txt` | Advertising publisher declaration |
| `sitemap.xml` | Search-engine sitemap |
| `robots.txt` | Search-engine crawling instructions |

Some additional files may support particular features, publishing workflows or development tasks.

Always inspect the current project structure before moving, renaming or deleting files.

## 3. Updating Website Content

The homepage and article system use JavaScript modules to manage website content.

When adding or editing an article:

1. Locate the appropriate article content module under `js/posts/`.
2. Follow the structure of existing articles.
3. Supply the appropriate title, category, publication date, excerpt, tags and article content.
4. Add an article image where appropriate.
5. Check that image paths point to files that actually exist.
6. Run the project's supported article-generation process when necessary.
7. Inspect the generated article page before publishing.

Do not assume that an article has been published simply because its content has been added to a JavaScript file.

## 4. Managing Article Images

Website images are stored in the `images/` directory and referenced by the relevant website or article files.

When adding an image:

1. Place it in the appropriate image folder.
2. Use a descriptive filename.
3. Reference the correct relative path.
4. Check that the image loads on both the homepage and its individual article page.
5. Use appropriately sized and optimized images to avoid unnecessarily slowing down the website.

Preserve existing image assets when transferring, backing up or publishing the project.

## 5. Editing the Website Design

The primary stylesheet is:

`css/style.css`

This file controls the website's appearance, including:

- Colours and visual themes.
- Typography.
- Buttons and interactive elements.
- Navigation and layout.
- Article presentation.
- Responsive behaviour.
- Spacing, borders and other visual details.

Make design changes carefully and test both desktop and mobile layouts.

## 6. Contact and Newsletter Features

The website includes contact and newsletter functionality.

When changing either feature:

1. Inspect the relevant HTML and JavaScript files.
2. Verify the configured form endpoint or service.
3. Test successful form submission.
4. Test validation and error handling.
5. Confirm that submissions reach the intended destination.

Do not publish placeholder endpoints or expose private credentials in public source files.

## 7. Article Generation

The project includes an article-generation script:

`scripts/generate-articles.mjs`

This script supports the generation of individual article pages and related website metadata.

Before running it:

1. Review the current script and its expected input structure.
2. Confirm that the source article content is correct.
3. Ensure that required images and assets exist.
4. Back up important changes when appropriate.
5. Run the generation process using the project's configured development workflow.
6. Review generated pages, metadata and sitemap output.

Avoid editing generated files manually when the same change should be made in the source content or generator. Otherwise, a later regeneration may overwrite the manual changes.

## 8. Search Engine Optimisation

The website includes search-engine-related features such as:

- Page titles and descriptions.
- Canonical URLs.
- Open Graph and social sharing metadata.
- Article-specific pages.
- `sitemap.xml`.
- `robots.txt`.

When adding pages or changing URLs:

1. Check that the canonical URL uses the correct website domain.
2. Update sitemap entries where necessary.
3. Verify that internal links work.
4. Check that images have meaningful alternative text.
5. Avoid duplicate or conflicting metadata.

The production website is:

https://kabakasjournal.github.io/

## 9. Google AdSense

The website uses Google AdSense for advertising monetisation.

The relevant files include:

- `ads.txt`
- Homepage and article HTML files.
- The article-generation script.
- AdSense publisher and ad-unit configuration.

When making advertising changes:

1. Preserve the correct AdSense publisher ID.
2. Ensure that the AdSense loader is included only once per page.
3. Verify that each intended advertising placement has the correct ad-unit configuration.
4. Ensure that generated article pages retain the advertising configuration.
5. Check the public `ads.txt` file.

The public advertising declaration should be available at:

https://kabakasjournal.github.io/ads.txt

Do not add duplicate scripts or ad placements when updating existing pages.

## 10. Testing Before Publishing

Before publishing changes:

- Open `index.html` in a browser or use an appropriate local development server.
- Check the homepage and navigation.
- Test article links and search.
- Test contact and newsletter forms.
- Check article images.
- Inspect the Privacy Policy.
- Check responsive layouts on desktop and mobile.
- Verify that generated pages are correct.
- Review browser developer-console errors.
- Confirm that no unintended files or backups are included in the publishing changes.

## 11. Publishing Through GitHub

The website is hosted using GitHub Pages.

A typical Git publishing workflow is:

```powershell
git status
git diff
git add .
git commit -m "Describe the website updates"
git push origin main
```

**Important:** Review the output of `git status` and `git diff` before staging files. Do not automatically add backup files, temporary scripts, credentials or unrelated project files.

After pushing, allow GitHub Pages to complete deployment and inspect the live website.

## 12. Backups and Project Safety

Keep backups of important project files before substantial changes.

However, do not treat backup copies as active website source files. Avoid accidentally publishing backup folders or temporary development files.

Maintain a clear distinction between:

- Active website files.
- Source content.
- Generated article pages.
- Development utilities.
- Temporary files and backups.

---

## Contact

For questions, feedback, collaborations or contributions, please use the contact section on the website.

**Website:** https://kabakasjournal.github.io/

---

(c) Ezeikpe Akachukwu Kingsley (Kabaka). All rights reserved.
