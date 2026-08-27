# Mohamed Sayed — ERP Consultant

Premium bilingual Arabic/English static website for an ERPNext consultant.

## Run locally

Use any static server with SPA history fallback. For example:

```powershell
npx serve -s .
```

The application supports English at `/` and Arabic at `/ar`; all services and modules keep the same path in both languages. Content lives in `locales/en.js` and `locales/ar.js`, while reusable catalogue entries are in `data/catalog.js`.

The contact form has accessible client-side validation and a success state. Connect it to a form endpoint before production deployment.

## Google Sheets requests

`google-apps-script.gs` is ready to paste into **Extensions → Apps Script** within the supplied Google Sheet. Deploy it as a Web App, then place the resulting `/exec` address in `GOOGLE_APPS_SCRIPT_URL` in `sheets.js`. Requests will be added to a `Website Requests` tab automatically.
