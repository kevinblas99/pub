import { NextResponse } from 'next/server';

// Event details data
// Replace this with your actual database call or external API
export async function GET() {
  try {
    const eventDetails = {
      id: '1',
      description: 'Presented as part of The Gradient\'s Blueprint Series, this fireside chat—moderated by Love Malone, CEO of The Gradient—will dive into Rich\'s creative journey, his thoughts on where the industry is headed, and how design continues to shape identity, storytelling, and the future of culture.'
    };

    return NextResponse.json(eventDetails);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch event details' },
      { status: 500 }
    );
  }
}