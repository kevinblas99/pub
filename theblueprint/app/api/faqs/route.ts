import { NextResponse } from 'next/server';

// FAQ data
// Replace this with your actual database call or external API
export async function GET() {
  try {
    const faqs = [
      {
        id: '1',
        question: 'WHAT IS THE SCHEDULE FOR THE EVENT?',
        answer: 'The event will take place from 10:00 AM to 6:00 PM. Registration starts at 9:30 AM. We recommend arriving early to check in and network with other attendees.'
      },
      {
        id: '2',
        question: 'WHERE IS THE EVENT LOCATED?',
        answer: 'The event will be held at the Downtown Convention Center, 123 Main Street. Free parking is available in the adjacent parking structure.'
      },
      {
        id: '3',
        question: 'HOW MUCH DOES IT COST TO ATTEND?',
        answer: 'General admission tickets are $50. Early bird pricing of $35 is available until two weeks before the event. Group discounts are available for parties of 5 or more.'
      },
      {
        id: '4',
        question: 'WHAT SHOULD I BRING TO THE EVENT?',
        answer: 'Please bring a valid ID for check-in, your ticket confirmation (digital or printed), and business cards for networking. Laptops and notebooks are welcome but not required.'
      },
      {
        id: '5',
        question: 'IS FOOD PROVIDED?',
        answer: 'Yes! Lunch and light refreshments will be provided throughout the day. Please let us know of any dietary restrictions when registering.'
      }
    ];

    return NextResponse.json(faqs);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch FAQs' },
      { status: 500 }
    );
  }
}