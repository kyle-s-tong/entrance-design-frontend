export const stepDetails = [
  {
    id: 'howitworks',
    title: 'How it works',
    description: `You have a home. You want it to look great. So do we! Using the magic of the web,
                  we can transform your house, into your dream home... completely online! No
                  appointments. No hassles or frustrations. Just fast, professional e-decorating
                  services, tailored to your space. Never fear, we also offer in-home services
                  as found in our design packages.`,
    link: {
      text: 'View our design packages',
      route: '/pricing',
    },
    image: require('../assets/steps/step1-darkdesk.jpg'),
  },
  {
    number: 1,
    title: 'Answer our simple questionnaire',
    description: `This will gauge your look & style.`,
    link: {
      text: 'View our simple questionnaire',
      route: '/questionnaire',
    },
    image: require('../assets/steps/step2-lightroom.jpg'),
    reverse: true,
  },
  {
    number: 2,
    title: 'Choose your design package',
    description: `Select the package that best suits your needs.`,
    link: {
      text: 'View our design packages',
      route: '/pricing',
    },
    image: require('../assets/steps/step3-pricingoptions.jpg'),
  },
  {
    number: 3,
    title: 'Digital collaboration',
    description: `You send us measurements and images, we send you back concepts.`,
    image: require('../assets/steps/step4-digitalcollab.jpg'),
    reverse: true,
  },
  {
    number: 4,
    title: 'Your concept design supplied',
    description: `We send you a mood board & shopping list to make your interiors work.`,
    image: require('../assets/steps/step5-moodboard.jpg'),
  },
];
