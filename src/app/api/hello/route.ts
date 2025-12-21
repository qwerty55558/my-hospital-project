import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'API Connection Successful!', timestamp: new Date().toISOString() });
}
