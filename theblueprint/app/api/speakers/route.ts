import { NextResponse } from 'next/server';

// Sample speakers data structure
// Replace this with your actual database call or external API
export async function GET() {
  try {
    const speakers = [
      {
        id: '1',
        name: 'Rich Tu',
        title: 'ARTIST',
        image: '/speakers/rich-tu.png'
      },
      {
        id: '2',
        name: 'Love Malone',
        title: 'FOUNDER CEO',
        image: '/speakers/love-malone.png'
      },
      {
        id: '3',
        name: 'Milan Chaney',
        title: 'MC',
        image: '/speakers/milan-chaney.png'
      }
    ];

    return NextResponse.json(speakers);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch speakers' },
      { status: 500 }
    );
  }
}