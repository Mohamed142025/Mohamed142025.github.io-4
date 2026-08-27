/**
 * Mohamed Sayed ERP Consultant — Google Sheets form receiver
 *
 * 1. Open the provided Google Sheet.
 * 2. Select Extensions > Apps Script.
 * 3. Replace the starter code with this file and save.
 * 4. Deploy > New deployment > Web app.
 * 5. Execute as: Me. Who has access: Anyone.
 * 6. Copy the /exec URL into GOOGLE_APPS_SCRIPT_URL in sheets.js.
 */
const SPREADSHEET_ID = '15lJs1W9ploFAuuKnL2D1N2t-weQgvhUdJvbqKhPlVAE';
const SHEET_NAME = 'Website Requests';
const HEADERS = [
  'Submitted at', 'Name', 'Company', 'Email', 'Phone / WhatsApp',
  'Service', 'ERPNext Modules', 'Project Description',
  'Preferred Contact Method', 'Source'
];

function doGet() {
  return json_({ ok: true, service: 'Mohamed Sayed website form receiver' });
}

function doPost(e) {
  try {
    const data = e && e.parameter ? e.parameter : {};
    const sheet = getSheet_();
    sheet.appendRow([
      new Date(), data.name || '', data.company || '', data.email || '',
      data.phone || '', data.service || '', data.modules || '',
      data.description || '', data.method || '', data.source || 'Website'
    ]);
    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: error.message });
  }
}

function getSheet_() {
  const book = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = book.getSheetByName(SHEET_NAME) || book.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight('bold')
      .setBackground('#0B315E')
      .setFontColor('#FFFFFF');
    sheet.autoResizeColumns(1, HEADERS.length);
  }
  return sheet;
}

function json_(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
