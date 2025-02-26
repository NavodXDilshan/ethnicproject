import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

type SheetForm = {
    name: string;
    email: string;
    phone: string;
    address: string;
    message: string;
    role: string; // Added role field
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Only POST requests allowed' });
    }

    const body = req.body as SheetForm;

    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets',
            ],
        });

        const sheets = google.sheets({
            auth,
            version: 'v4',
        });

        // Adjust the range if needed (e.g., to include more columns for the role)
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range: 'A1:F1', // Updated range to match the number of columns
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.name, body.email, body.phone, body.address, body.message, body.role], // Include role in the request
                ],
            },
        });

        console.log('Google Sheets API Response:', response.data);

        if (response.data.updates && response.data.updates.updatedRange) {
            return res.status(201).json({
                data: {
                    tableRange: response.data.updates.updatedRange, // ✅ Corrected property access
                },
            });
        } else {
            console.warn('Unexpected response structure:', response.data);
            return res.status(400).json({
                message: 'Table range is not available in the response.',
            });
        }
    } catch (e: any) {
        console.error('Error during API call:', e);
        return res.status(500).json({ message: e.message });
    }
}
