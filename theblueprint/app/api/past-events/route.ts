import { NextResponse } from 'next/server';

// Past events data
// Replace this with your actual database call or external API
export async function GET() {
  try {
    const pastEvents = [
      {
        id: '1',
        title: 'Rich Tu at Studio',
        image: '/past-events/event-1.png',
        rotation: 0 // Main image, no rotation
      },
      {
        id: '2',
        title: 'Past Event 1',
        image: '/past-events/event-2.png',
        rotation: -5, // Slight tilt left
        z:0
      },
      {
        id: '3',
        title: 'Past Event 2',
        image: '/past-events/event-3.png',
        rotation: 2, // Slight tilt right
        z:10,
      },
      {
        id: '4',
        title: 'Past Event 3',
        image: '/past-events/event-4.png',
        rotation: -3, // Slight tilt left
        z:0
      }
    ];

    return NextResponse.json(pastEvents);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch past events' },
      { status: 500 }
    );
  }
}