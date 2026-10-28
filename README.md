# Dr. Kalam Educational Consultancy

A bilingual, multi-page education consultancy website for students and parents. The existing homepage remains the homepage; its navigation now opens dedicated pages for About, Services, Courses, Colleges and Contact.

## Run locally

```sh
npm ci
npm run dev
```

Vite serves the homepage at `/` and the interior pages at `/about.html`, `/services.html`, `/courses.html`, `/colleges.html` and `/contact.html`.

## Build for hosting

```sh
npm run build
npm run preview
```

The production site is written to `dist/`. Deploy the contents of that directory to a host that serves static HTML, CSS, JavaScript and files from `public/`.

## Site features

- Shared responsive navigation and footer for interior pages.
- English and Tamil page content, with the language preference remembered in the browser.
- Search filter for the featured college list.
- Contact form that prepares an enquiry in WhatsApp. It does not submit data to a website backend.
- The home page's existing content and visual layout are preserved; only navigation, contact destinations and the supplied Instagram URL were connected.

## Content and launch notes

- Do not add student names, photos, quotes, admission counts, success rates, partnerships, accreditations or guarantees without client-approved evidence.
- Obtain permission from each student/parent (and a parent/guardian for minors) before publishing their photos, names or story. Collect the approved caption and course/college details with each image.
- Confirm office address, operating hours, languages offered, fees, service scope, founder/counsellor background and policy wording with the client before final publication.
- Admission rules, course availability, fees and deadlines change. Verify current details with the relevant institution or official authority.

The `/src` React files are the earlier starter scaffold; the current site uses the HTML pages listed above.
