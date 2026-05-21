# Editing Your Portfolio Site

Most content now lives in `content.js`.

For the full workflow, use `SITE-MANAGER.md`.
For copy-paste starter blocks, use `templates/content-blocks.js`.
For a new full article page, copy `templates/blog-post-template.html` into `posts`.

Open `content.js` when you want to update:

- Hero text and status items
- About text
- Projects
- Skills
- Certifications
- Contact links
- Blog intro, topics, and posts
- Footer year
- CV download link

## Add A Blog Post

In `content.js`, find `blogPosts`.

For the blog card, copy the blog post block from `templates/content-blocks.js`, paste it under the last post, then edit the text:

```js
{
  status: "PUBLISHED",
  readTime: "6 MIN READ",
  title: "My New Blog Post",
  excerpt: "A short summary of the post.",
  image: "assets/my-blog-image.png",
  imageAlt: "Short description of the image",
  tags: ["SOC", "SIEM", "LAB"],
  showMedium: false,
  mediumUrl: "",
  url: "#"
}
```

If you create a real article page later, replace `url: "#"` with something like:

```js
url: "posts/my-new-blog-post.html"
```

The sample published post already works this way:

```js
url: "posts/home-soc-lab.html"
```

You can copy `posts/home-soc-lab.html` when you want to create another full article page.

Better option: copy `templates/blog-post-template.html`, paste it into `posts`, rename it, and edit the placeholder text.

For blog images, put the image in `assets`, then set `image` to that path. Example:

```js
image: "assets/my-blog-image.png"
```

To add images or videos inside the full article page, paste one of these inside the `<article>` where you want it:

```html
<figure class="post-media">
  <img src="../assets/my-screenshot.png" alt="Describe the screenshot">
  <figcaption>Short caption for the image.</figcaption>
</figure>
```

```html
<figure class="post-media">
  <video controls>
    <source src="../assets/my-demo.mp4" type="video/mp4">
  </video>
  <figcaption>Short caption for the video.</figcaption>
</figure>
```

```html
<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/YOUTUBE_VIDEO_ID" title="Video title" allowfullscreen></iframe>
</div>
```

If you also publish the same post on Medium, show a button at the bottom of the article page like this:

```js
showMedium: true,
mediumUrl: "https://medium.com/@nzubeio/my-post"
```

If you do not want the Medium button to show, use:

```js
showMedium: false,
mediumUrl: ""
```

## Add A Project

In `content.js`, find `projects`.

Copy the project block from `templates/content-blocks.js`, paste it under the last project, then edit it:

```js
{
  status: "COMPLETED",
  number: "PROJECT_07",
  title: "My New Project",
  description: "What I built, what tools I used, and what I learned.",
  image: "assets/my-project-image.png",
  imageAlt: "Short description of the project image",
  tags: ["SPLUNK", "DETECTION", "LAB"],
  blogUrl: "posts/my-project-writeup.html",
  codeUrl: "https://github.com/nzubeio/my-project"
}
```

If you do not want an image on a project card, leave out the `image` and `imageAlt` lines.

When someone clicks a project card, a popup opens. The popup buttons use:

- `blogUrl` for the `VIEW BLOG` button
- `codeUrl` for the `VIEW CODE` button

If you do not have a blog post or code repo yet, you can temporarily use:

```js
blogUrl: "blog.html",
codeUrl: "https://github.com/nzubeio"
```

## Add A Skill

In `content.js`, find `skills`.

Copy the skill line from `templates/content-blocks.js` and edit it:

```js
{ icon: "🛡️", name: "Microsoft Defender", status: "LEARNING", tone: "learning" }
```

Use `tone: "learning"` for cyan text, or `tone: "planned"` for yellow text.

## Add A Certification

In `content.js`, find `certifications`.

Copy the certification block from `templates/content-blocks.js` and edit it:

```js
{
  name: "CompTIA Security+",
  issuer: "CompTIA",
  status: "TARGET CERT",
  date: "In Progress",
  description: "What the certification covers or why it matters.",
  image: "assets/my-cert-image.png",
  imageAlt: "Short description of the certification image",
  url: "#"
}
```

If you have a public credential link, replace `url: "#"` with that link.
If you do not want an image, remove the `image` and `imageAlt` lines.

## Update Your Resume Link

The hero resume button uses this setting in `content.js`:

```js
cv: {
  label: "VIEW RESUME",
  url: "https://nzubeio.github.io/resume.pdf"
}
```

Use a PDF URL so recruiters can view it in the browser and download it from the PDF viewer if they want.

## Add Or Update Contact Links

In `content.js`, find `contactLinks`.

Copy the contact link block from `templates/content-blocks.js` and edit it:

```js
{ label: "MEDIUM", url: "https://medium.com/@nzubeio" }
```

Use `mailto:` for email links:

```js
{ label: "EMAIL", url: "mailto:your@email.com" }
```

## Image And File Uploads

Put images, PDFs, and badges in `assets`.

Use simple lowercase filenames with hyphens:

```text
assets/project-my-lab.png
assets/blog-my-writeup.png
assets/cert-my-certificate.png
assets/resume.pdf
```

## Important Rules

- Keep text inside quotes.
- Keep commas between items.
- Do not delete the opening `window.siteContent = {` or the final `};`.
- After editing, refresh the browser.
- After pushing to GitHub, GitHub Pages will publish the updated site.
