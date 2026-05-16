# Site Manager Guide

This is a static GitHub Pages site. There is no WordPress-style admin panel, so the easy editing system is:

1. Edit normal site content in `content.js`.
2. Put images, PDFs, and badges in `assets`.
3. Create full blog article pages by copying `templates/blog-post-template.html`.
4. Use the snippets in `templates/content-blocks.js` when adding new items.
5. Preview locally before pushing to GitHub.

## The Main Files

- `content.js` controls most editable content.
- `index.html` controls the homepage layout and design.
- `blog.html` controls the blog listing page layout.
- `posts/` contains full blog article pages.
- `assets/` contains images, icons, resume files, and placeholders.
- `templates/` contains safe copy-paste starter files.
- `EDITING-GUIDE.md` is the quick editing reference.

## What You Can Edit Without Touching Layout

Use `content.js` for:

- Name, hero text, and resume link
- Current status
- About text and terminal values
- Projects, project images, project buttons
- Skills
- Certifications and credential links
- Contact buttons
- Blog page intro
- Blog post cards
- Medium button visibility per blog post
- Footer year

For small sections like hero, current status, about, and blog intro, replace the existing values in `content.js`.
For repeated sections like projects, skills, certifications, contact links, and blog post cards, copy a block from `templates/content-blocks.js` and paste it into the matching array.

## Add A New Blog Post

1. Copy `templates/blog-post-template.html`.
2. Paste it into `posts`.
3. Rename it with a simple lowercase filename, for example:

```text
posts/my-splunk-lab-notes.html
```

4. Open the new file and replace the placeholder title, summary, tags, and article text.
5. In `content.js`, add a matching object inside `blogPosts`.
6. Make sure the `url` matches your new file:

```js
url: "posts/my-splunk-lab-notes.html"
```

7. If the post is also on Medium, set:

```js
showMedium: true,
mediumUrl: "https://medium.com/@nzubeio/my-post"
```

If not, set:

```js
showMedium: false,
mediumUrl: ""
```

## Add A New Project

1. Put the project image in `assets`.
2. Copy the project block from `templates/content-blocks.js`.
3. Paste it into the `projects` array in `content.js`.
4. Update the title, description, tags, image path, blog link, and code link.

If there is no writeup or code yet, use temporary links:

```js
blogUrl: "blog.html",
codeUrl: "https://github.com/nzubeio"
```

## Add A Certification

1. Put the badge or certificate image in `assets`.
2. Copy the certification block from `templates/content-blocks.js`.
3. Paste it into the `certifications` array in `content.js`.
4. Update the name, issuer, status, date, description, image path, and credential URL.

## Add A Skill

Copy a skill line from `templates/content-blocks.js` into the `skills` array in `content.js`.

Use:

- `tone: "learning"` for active/cyan status
- `tone: "planned"` for planned/yellow status

## Add Or Change Contact Links

Copy a contact link from `templates/content-blocks.js` into `contactLinks` in `content.js`.

Use normal web links for profiles:

```js
{ label: "MEDIUM", url: "https://medium.com/@nzubeio" }
```

Use `mailto:` for email:

```js
{ label: "EMAIL", url: "mailto:your@email.com" }
```

## Image Rules

Keep images in `assets`.

Good names:

```text
assets/project-splunk-dashboard.png
assets/blog-authentication-logs.png
assets/cert-security-plus.png
```

Avoid spaces in filenames. Use hyphens instead.

## GitHub Pages Workflow

1. Edit files locally.
2. Preview at `http://127.0.0.1:8000/`.
3. Commit and push to GitHub.
4. GitHub Pages publishes the updated static files.

## Quick Safety Rules

- Keep quotes around text in `content.js`.
- Keep commas between objects.
- Do not delete `window.siteContent = {` or the final `};`.
- Use `#` only for temporary links.
- Prefer image paths that start with `assets/` inside `content.js`.
- Prefer article links that start with `posts/` inside `content.js`.
