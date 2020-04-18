const { GoogleSpreadsheet } = require('google-spreadsheet');
const creds = require('../credentials.json');


async function getAttendances(spreadSheetId) {
  const doc = new GoogleSpreadsheet(spreadSheetId);

  // Method 1 using service account creds
  // await doc.useServiceAccountAuth({
  //   client_email: process.env.GOOGLE_CLIENT_ID,
  //   private_key: process.env.GOOGLE_CLIENT_SECRET
  // })

  // Method 2 using the credentials.json
  await doc.useServiceAccountAuth(creds);
  // Method 3 using the GOOGLE API KEY
  // doc.useApiKey(process.env.GOOGLE_API_KEY)


  await doc.loadInfo(); // loads the document properties and worksheets.
  console.log({ doc });
}

getAttendances('1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms');
