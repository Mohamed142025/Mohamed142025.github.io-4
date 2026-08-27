/*
  Paste the Web App URL created from google-apps-script.gs below, then deploy.
  Example: https://script.google.com/macros/s/AKfycb.../exec
*/
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzemGbKdCxptUWOzV0gMqMpiBM4z9J74wdX_iz29lGxOcuKbrDwBe79aqko07vJr_Fyyw/exec';

document.addEventListener('submit', async event => {
  const form = event.target;
  if (!form.matches('.contact-form') || !GOOGLE_APPS_SCRIPT_URL) return;

  event.preventDefault();
  event.stopImmediatePropagation();
  const required = [...form.querySelectorAll('[required]')];
  if (required.some(field => !field.value.trim() || !field.checkValidity())) return;

  const submit = form.querySelector('[type="submit"]');
  const success = form.querySelector('.form-success');
  submit.disabled = true;
  submit.setAttribute('aria-busy', 'true');

  try {
    await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
      body: new URLSearchParams([...new FormData(form), ['source', 'Mohamed Sayed website']])
    });
    form.reset();
    success.hidden = false;
  } catch {
    // The original form handler preserves its accessible local error behavior.
  } finally {
    submit.disabled = false;
    submit.removeAttribute('aria-busy');
  }
}, true);
