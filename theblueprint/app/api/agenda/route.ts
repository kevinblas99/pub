import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const agendaItems = [
      {
        id: '1',
        timeStart: '6:00 PM',
        timeEnd: '6:30 PM',
        title: 'WELCOME AND REGISTRATION',
        description: 'Join us for check-in and welcome drinks as we kick off an exciting evening. Network with fellow attendees and get ready for an inspiring conversation.',
        location: 'GROUND FLOOR'
      },
      {
        id: '2',
        timeStart: '6:30 PM',
        timeEnd: '7:00 PM',
        title: 'OPENING REMARKS',
        description: 'Introduction to The BluePrint Series and tonight\'s special guest. Learn about the vision behind this exclusive event series and what makes it unique.',
        location: 'MAIN LOUNGE'
      },
      {
        id: '3',
        timeStart: '7:00 PM',
        timeEnd: '8:00 PM',
        title: 'FIRESIDE CHAT WITH RICH TU',
        description: 'Join us for an exclusive evening with Rich Tu, the award-winning designer behind the official NY/NJ 2026 FIFA World Cup logo. Hear his creative process and insights on design.',
        location: 'MAIN LOUNGE'
      },
      {
        id: '4',
        timeStart: '8:00 PM',
        timeEnd: '8:30 PM',
        title: 'Q&A SESSION',
        description: 'Interactive discussion where attendees can ask questions and engage directly with Rich Tu about his work, inspiration, and the future of design.',
        location: 'MAIN LOUNGE'
      },
      {
        id: '5',
        timeStart: '8:30 PM',
        timeEnd: '9:30 PM',
        title: 'NETWORKING RECEPTION',
        description: 'Wind down with cocktails and light bites while connecting with fellow creatives, designers, and industry professionals in an intimate setting.',
        location: 'ROOFTOP TERRACE'
      }
    ];

    return NextResponse.json(agendaItems);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch agenda items' },
      { status: 500 }
    );
  }
}