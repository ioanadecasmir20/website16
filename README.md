# Seccuro Security Website

Static HTML/CSS/JavaScript website package.

## Structure
- `/index.html` — home page (navigation uses `/`)
- `/about/index.html` — navigation URL `/about`
- `/services/index.html` — navigation URL `/services`
- `/retail-security/index.html` — navigation URL `/retail-security`
- `/door-supervisors/index.html` — navigation URL `/door-supervisors`
- `/careers/index.html` — navigation URL `/careers`
- `/contact/index.html` — navigation URL `/contact`
- `/privacy/index.html` — navigation URL `/privacy`
- `/assets/css/style.css`
- `/assets/js/script.js`
- `/images/` — logo, favicon and replaceable image placeholders
- `/.nojekyll`

## Before going live
1. Replace placeholder images in `/images/` with your own licensed photography.
2. Connect enquiry forms to your chosen backend/form provider. The current JavaScript demonstrates validation and user feedback only.
3. Review the Privacy Policy and legal/company footer details.
4. Confirm all service claims, licences, accreditations and operating areas before publishing.

The page links intentionally do not use `.html`. Each page is a folder with its own `index.html`, which allows clean URLs on GitHub Pages and most static web hosts.
