function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  sheet.appendRow([data.timestamp, data.firstName, data.email, data.source]);
  return ContentService.createTextOutput("ok");
}
