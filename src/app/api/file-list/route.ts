import { type NextRequest } from 'next/server'

const fs = require('fs').promises;

// Specify the directory path
const directoryPath = './readData';

// Read the files in the directory


export async function GET(req: NextRequest) {
  try {
    // Example usage:
    const version = req.nextUrl.searchParams.get("version");
    const files = await fs.readdir(`./data/buspropfiles/${version}`);
    return Response.json({success : true, data : files });
  } catch (err: any) {
    return Response.json({ message: err.message ?? "Internal Server Error", success: false });
  } 
}

