export const GRAPHY_URLS = {
  AVATAR: 'https://graphy.example.com/sailorgpt', // replace later
  TESTER_CHECKOUT: 'https://graphy.example.com/sailorgpt/tester',
  LITE_CHECKOUT: 'https://graphy.example.com/sailorgpt/lite',
  PRO_CHECKOUT: 'https://graphy.example.com/sailorgpt/pro'
};

export const PLANS = [
  {
    id: 'tester',
    name: 'Tester',
    price: 79,
    currency: '₹',
    period: 'one-time',
    description: '5 questions to quickly test Sailor GPT.',
    highlight: false,
    features: ['5 text questions', 'Best for quick trial'],
    graphyUrl: GRAPHY_URLS.TESTER_CHECKOUT
  },
  {
    id: 'lite',
    name: 'Lite',
    price: 99,
    currency: '₹',
    period: 'month',
    description: 'Lite monthly plan for regular cadets.',
    highlight: true,
    badge: 'Most Popular',
    features: [
      '30 questions / month',
      '5 minutes voice per month',
      'Ideal for semester exam prep'
    ],
    graphyUrl: GRAPHY_URLS.LITE_CHECKOUT
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 199,
    currency: '₹',
    period: 'month',
    description: 'Pro plan for serious exam prep and officers.',
    highlight: false,
    features: [
      '100 questions / month',
      '10 minutes voice per month',
      'Priority support for urgent queries'
    ],
    graphyUrl: GRAPHY_URLS.PRO_CHECKOUT
  }
];

export const FREEMIUM_COPY =
  'Start free with 4 questions and 1 minute of voice. No card required.';
