import "server-only";
import { google } from "googleapis";

export const getSheetData = async (sheet) => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
  });

  const sheets = google.sheets({ version: "v4", auth: await auth.getClient() });
  const range = `${sheet}!A:Z`;

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range,
    });
    return extractData(response.data.values);
  } catch (error) {
    throw new Error("Failed to fetch spreadsheet data");
  }
};

// parallel data fetching
export const handleParallelSheetDataFetching = async (props) => {
  const requestArray = props.map((item) => getSheetData(item));

  return Promise.all(requestArray);
};

const extractData = (data) => {
  const jsonArray = [];
  const headers = data[0];
  for (let i = 1, length = data.length; i < length; i++) {
    const row = data[i];
    const record = {};

    for (let j = 0; j < row.length; j++) {
      record[headers[j]] = row[j];
    }

    jsonArray.push(record);
  }

  return jsonArray;
};
