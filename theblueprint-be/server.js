const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// ============================================
// EVENT DETAILS API
// ============================================
app.get('/api/event-details', (req, res) => {
  try {
    const eventDetails = {
      id: '1',
      description: 'Join us for an exclusive fashion event showcasing the latest trends and innovations in the industry. Network with industry leaders, attend workshops, and witness stunning runway shows featuring emerging designers. This full-day event promises inspiration, education, and unforgettable experiences for all fashion enthusiasts.'
    };
    res.json(eventDetails);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch event details' });
  }
});

// ============================================
// PAST EVENTS API
// ============================================
app.get('/api/past-events', (req, res) => {
  try {
    const pastEvents = [
      {
        id: '1',
        title: 'Rich Tu at Studio',
        image: '/past-events/event-1.png',
        rotation: 0
      },
      {
        id: '2',
        title: 'Past Event 1',
        image: '/past-events/event-2.png',
        rotation: -5,
        z: 0
      },
      {
        id: '3',
        title: 'Past Event 2',
        image: '/past-events/event-3.png',
        rotation: 2,
        z: 10
      },
      {
        id: '4',
        title: 'Past Event 3',
        image: '/past-events/event-4.png',
        rotation: -3,
        z: 0
      }
    ];
    res.json(pastEvents);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch past events' });
  }
});

// ============================================
// FAQ API
// ============================================
app.get('/api/faqs', (req, res) => {
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
    res.json(faqs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch FAQs' });
  }
});

// ============================================
// AGENDA API (if you have one)
// ============================================
app.get('/api/agenda', (req, res) => {
  try {
    const agenda = [
      {
        id: '1',
        time: '9:30 AM',
        title: 'Registration & Networking',
        description: 'Check in and connect with fellow attendees'
      },
      {
        id: '2',
        time: '10:00 AM',
        title: 'Opening Keynote',
        description: 'Welcome address and industry insights'
      },
      {
        id: '3',
        time: '11:30 AM',
        title: 'Workshop Session 1',
        description: 'Hands-on learning with industry experts'
      },
      {
        id: '4',
        time: '1:00 PM',
        title: 'Lunch Break',
        description: 'Networking lunch with refreshments'
      },
      {
        id: '5',
        time: '2:30 PM',
        title: 'Runway Show',
        description: 'Showcase of latest collections'
      },
      {
        id: '6',
        time: '4:00 PM',
        title: 'Panel Discussion',
        description: 'Industry leaders discuss future trends'
      },
      {
        id: '7',
        time: '5:30 PM',
        title: 'Closing Remarks',
        description: 'Final thoughts and announcements'
      }
    ];
    res.json(agenda);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch agenda' });
  }
});

// ============================================
// SPEAKERS API (if you have one)
// ============================================
app.get('/api/speakers', (req, res) => {
  try {
    const speakers = [
      {
        id: '1',
        name: 'Jane Doe',
        title: 'Creative Director',
        company: 'Fashion House Inc.',
        bio: 'Award-winning designer with 15 years of experience in haute couture.',
        image: '/speakers/speaker-1.png'
      },
      {
        id: '2',
        name: 'John Smith',
        title: 'Fashion Editor',
        company: 'Style Magazine',
        bio: 'Influential voice in fashion journalism and trend forecasting.',
        image: '/speakers/speaker-2.png'
      },
      {
        id: '3',
        name: 'Maria Garcia',
        title: 'Sustainable Fashion Advocate',
        company: 'EcoStyle',
        bio: 'Pioneer in sustainable and ethical fashion practices.',
        image: '/speakers/speaker-3.png'
      }
    ];
    res.json(speakers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch speakers' });
  }
});

// ============================================
// HERO/INTRO API (if you have one)
// ============================================
app.get('/api/hero', (req, res) => {
  try {
    const hero = {
      id: '1',
      title: 'The BluePrint Series',
      subtitle: 'Fashion Innovation Summit 2025',
      date: 'March 15, 2025',
      location: 'Downtown Convention Center',
      description: 'Join us for a day of inspiration, innovation, and networking in the fashion industry.'
    };
    res.json(hero);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hero data' });
  }
});

// ============================================
// Health check endpoint
// ============================================
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// ============================================
// Start server
// ============================================
app.listen(PORT, () => {
  console.log(`Blueprint API server is running on http://localhost:${PORT}`);
});

module.exports = app;