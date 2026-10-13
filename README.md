# KOMU Website Redesign — Working Concept Prototype

This deliverable is an **interactive website prototype**, not the production replacement for https://komu.edu.ng/.

## Open the website

1. Extract the entire ZIP file to a folder.
2. Double-click **index.html** in Chrome, Edge or Firefox.
3. Use the navigation menu and page links to explore the site. Internet access is needed to open existing KOMU portals, retrieve high-resolution online imagery, and load the optional Google font; the included images, approved intro video, and core site work locally.

Optional local testing: From the extracted folder run `python -m http.server 8000` and open `http://localhost:8000/` in your browser.

## Implemented in this prototype

- **Full-screen hero slideshow (v2):** the header sits over the hero in deep blue and the hero fills the screen. The approved campus video (`assets/approved-komu-hero.mp4`, re-encoded at 1920 px wide) is **slide 1** and holds for 10 seconds. The selected featured news posts follow, each for 10 seconds, entering from the right and leaving to the left, then the slideshow loops back to the video. Includes next, previous and pause controls, reduced-motion handling, and a progress display.
- **Featured Editor (Demo)** under News & Events lets you choose homepage stories. Choices persist in the current browser using localStorage. This is not a secure multiuser editor or a live CMS.
- **Home Page News & Events:** the “Stay Informed” section presents a split image-and-summary carousel using KOMU news stories not selected for the hero slideshow, plus upcoming programme events such as the Special Citation. It advances vertically every 3 seconds and loops through available items, pausing while a visitor hovers or focuses a story. Desktop visitors use normal page scrolling; mobile visitors see the image above its matching story, with no swipe or carousel scroll. There are no visible carousel controls or timer. A back-to-top arrow appears after scrolling down the homepage. Images retain their proportions, and reduced-motion preferences disable automatic movement. Content still comes from the prototype’s shared news records; an authenticated CMS connection is future work.
- **Media navigation:** the Media dropdown contains only Gallery and News & Events. Gallery combines available photographs and videos in one responsive grid with All, HM, Programmes, Events and Courtesy Visit category filters; selecting a photograph opens it larger, and video items play in place. News & Events separates university news, announcements and upcoming programme events.
- **Header and About Us navigation:** desktop menus remain in the header; the compact-screen menu opens as an overlay without pushing or covering the hero content permanently. About Us provides local links to the Vision and Mission statement page and University Administration.
- **System dark mode:** programme tabs, level selectors, curriculum table headers and inactive news filters retain readable contrast when the device or browser is in dark mode.
- Approved opening homepage order: Hero → Quick Access → Welcome/Vision/Mission/**At a Glance** → News & Events. Supporting sections for Academics, Research, Campus and Services appear farther down.
- Separate **About Us** (establishment, mandate, objectives, vision, mission, philosophy, core values, mantra, motto and logo), **Academics**, **Admissions**, **University Administration**, **Research**, and **Media** menus, with responsive mobile navigation. The former History & heritage / Our story section has been removed. Academics contains only Faculties & Departments.
- **Academic Resources & Services** in locked order: (1) Admissions Services, (2) Staff Portal, (3) Student Portal, (4) Digital Learning, (5) University Library, (6) Academic Documents, (7) Graduate Services, (8) Help & Support.
- Existing official Staff and Student Portal login pages are linked directly, with no duplicate login or disclosure of protected records.
- **Faculty and programme catalogue:** lists the 10 academic areas and 45 programme records consolidated from the supplied 2026/2027 KOMU JAMB/IBASS PDF. Programme profiles show the document’s UTME subject combinations, O’Level requirements and stated minimum JAMB score; unspecified scores and Direct Entry criteria are labelled as not provided. Every academic catalogue link stays within the prototype. The Psychology curriculum tabs remain a clearly labelled demonstration; other curricula and course details are not fabricated.
- **Undergraduate admissions:** the Undergraduate / Post-UTME pathway now opens a local page with separate Post-UTME and supplementary screening information and links to the relevant official instructions/forms.
- Faculty listing, admissions pathways, research publications/project categories, media gallery and video pages, university administration, archived news, graduate/help/document pages.

## Important boundaries / items still needed before launch

- **Not deployed** to `komu.edu.ng`; this ZIP does not modify the existing university website.
- **Static front-end prototype only**. University user roles, database, publishing approvals, upload tools, server hosting, API integrations, security reviews, forms and content authorisation are future production-development work.
- **Psychology courses and lecturers are illustrative placeholders**, not verified KOMU curriculum records. Do not publish these as official. Subjects/entry combinations, durations, course units, assessments and lecturer assignments require departmental and academic-records verification, including academic-session and cohort/version control.
- **Stats:** 9 faculty listings sourced from the current KOMU homepage; other institutional metrics deliberately remain unpopulated until verified.
- **Images:** opening video is the user-provided approved reference. Additional campus/news thumbnails are crops from the user's screenshot or existing official KOMU image links. Replace preview crops with university-approved high-resolution photographs and confirm publication rights.
- **Admissions pathway icons:** Undergraduate and IJMB use the supplied artwork in `assets/`; JUPEB uses the bundled board logo. ICEP, Admission Lists and Explore Requirements retain their built-in SVG icons; no additional official programme artwork was available to verify.
- **Admission Lists:** the Admissions Services card opens a programme-selection page linking to the verified KOMU undergraduate, JUPEB and IJMB admission-list pages. No separate public ICEP list page was verified; the page directs ICEP applicants to the official KOMU website or Admissions Office.
- **Colour theme:** the site automatically follows the device’s light/dark appearance. Dark mode also adjusts form controls, typed text, placeholders, focus states and option menus for readability; there is no on-page theme selector.
- **Homepage welcome section:** Vision, Mission, At a Glance and the University Administration shortcut use bordered card treatments. The Administration card links directly to the University Administration page.
- **University Administration profiles:** principal-officer, faculty/department-leadership and lecturer-profile links open local pages using the shared portrait-left, caption-below, green-name/profile-text layout. The Vice-Chancellor profile includes the supplied biography in labelled sections; other verified biography content and staff directories remain pending. No external portal is used to retrieve public staff biographies.
- **Faculty and department leadership welcomes:** faculty pages and department pages place the Dean/HOD welcome card before department or programme information. Long welcome messages expand inline with a “Click to see more” control. Portraits open local staff-profile pages; the demo editor stores non-published values only in the current browser and is not authenticated.
- **Upcoming event:** the News & Events page includes the supplied Special Citation announcement and poster, with its date, time, venue, honouree and full invitation details.
- **Page breadcrumbs:** Home, section and faculty breadcrumb segments are clickable links; the current page is identified as the non-linked final segment.
- **University Library and e-Learning:** links target the existing official sites, which may have current service or licensing issues outside this prototype. Do not claim they are operational until verified.
- **Admissions & transcript links:** public official pathways are linked where confirmed; complete programme-specific routing, ICEP details and exact transcript destinations require final mapping.
- **Search results:** the finder is backed by a sample data array. Full production needs a verified university catalogue and database-backed cross-linking.
- **News slider selections:** localStorage demonstration only; production requires a password-protected authorised editorial workflow, publication/expiry dates and prioritised editor-managed records.
- **Brand review:** verify crest artwork, colors, font choices, published vision/mission wording, accessibility compliance, privacy policy, and university approval before launch.

## Technology / structure

- `index.html` – main web app document
- `styles.css` – responsive styles and animations
- `app.js` – client-side router, content and interactive features
- `assets/` – local photos, admissions icons, crest crop and the user-supplied approved animation video

**No framework, build chain or package installation required to inspect the prototype.**

## v2 change log
- About Us: institutional establishment, mandate, objectives, vision, mission, philosophy, core values, mantra, motto and logo on one page.
- Earlier v2 navigation snapshot: Advanced Programme Finder, Admissions Services and University Governance were removed from dropdowns; Academic Staff moved to University Administration, and News & Events was a direct link. The current navigation supersedes that link with a Media dropdown.
- Hero: full-bleed, deep-blue header overlay, intro video is part of the 10-second rotation.
- The source video is only 640x426; supply a 1080p original for true sharpness.

## v3 change log
- One navigation on every page, in deep blue with colour-coded icons. The current navigation reflects later scoped changes, including Academics with only Faculties & Departments and the Media dropdown. The old strip above the header (Academic Resources / Student Portal / Staff Portal) is removed; the portals now live under the Academic Portal icon.
- University Administration is now a link under About Us, opening one page with Principal Officers, Academic Staff and Non-Academic Staff.
- New Contact page (details come from the existing KOMU site and must be confirmed).
- Colourful front page: icon tiles, coloured Quick Access cards, coloured service cards.
- Mobile/tablet: icon menu below 1080 px; on portrait screens the hero shows the whole video over a blurred backdrop so K.O.M.U is never cropped.
- The supplied WhatsApp video is identical to the one already used (640x426, 5 s); it is served upscaled to 1920 px.

## v4 change log
- Navigation is now plain text (Home, Academics, Academic Portal, News & Events, Research, About Us, Contact) with a gold underline for the current page. The Admissions menu is removed; the always-visible **Apply Now** button opens the Admissions page with all pathways.
- Coloured icon tiles removed. All remaining icons (quick access, services, faculties, people) are thin line icons in one neutral style.
- Hero video re-processed (denoise, two-stage upscale, gentle sharpening, higher bitrate). The source is 640x426, so true sharpness needs the original higher-resolution file.

## v5 visual cleanup (2026-10-11)
- Refined main homepage to its approved four distinct content sections: animated full-bleed hero, embedded deep-blue Quick Access strip, Welcome/Vision/Mission/At a Glance, and concise News & Events.
- Removed redundant homepage promotional blocks for programmes, campus galleries, research and services; **their dedicated pages remain** and are reachable through navigation/Quick Access/footer.
- Removed unnecessary introductory video labels, unverified event teaser card and duplicate news links.
- Styled header, typography, icon strip, photo framing and editorial news cards for more consistent institutional presentation.
- Kept the approved KOMU animation as the recurring first 10-second hero slide.
- Improved source-video upscaling and image poster using careful sharpening; original 640×426 limits actual detail.
- All source-course placeholder and portal restrictions from prior versions still apply.


## Version 6 — Original-quality Hero & Cleaner Homepage

- Removed the entire four-card Quick Access strip shown in the user screenshot (Admissions, Academic Programmes, University Services, News & Notices). The destinations remain accessible in the primary navigation and pages.
- Hero now uses the **original unmodified uploaded InShot video** at **1624×1080**. SHA-256 is preserved byte-for-byte. No recompression, colour changes, blur, AI sharpening, or quality-loss filter has been applied.
- New poster frame extracted from the original video; it is not a new animation or a changed video.
- The introductory video remains slide 1 and repeats each cycle of the 10-second editor-selected featured-news carousel.
- Hero sizing and carousel controls updated on desktop and mobile. Mobile chooses uncropped video framing to protect the complete KOMU lettering and building composition.
- The removal of Quick Access supersedes the previous approval to embed those shortcuts in the hero.
- No production CMS, backend or deployment is included; official student and staff portals remain separate systems.
