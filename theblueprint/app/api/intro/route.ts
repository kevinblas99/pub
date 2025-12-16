import { NextResponse } from 'next/server';

// Intro section data
// Replace this with your actual database call or external API
export async function GET() {
  try {
    const intro = {
      id: '1',
      text: 'Join us for an exclusive evening with Rich Tu, the award-winning designer behind the official NY/NJ 2026 FIFA World Cup poster, and a creative powerhouse known for his work with Nike, MTV, and culture-shaping campaigns across the globe.'
    };

    return NextResponse.json(intro);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch intro' },
      { status: 500 }
    );
  }
}