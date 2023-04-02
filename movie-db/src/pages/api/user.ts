import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        // handle user registration
    } else if (req.method === 'PUT') {
        // handle user login
    } else if (req.method === 'GET') {
        // handle fetching user data
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}