export const stepDetails = [
  {
    id: 'process',
    title: 'Process',
    description: `Entrance Design is a modern approach to design, born with the intention of
                  creating a fresh and accessible interior design solution. Taking the
                  guesswork out of decorating, we offer affordable, convenient and professional
                  e-decorating services, tailored to your home and style.  Or we can arrange a
                  no-obligation in-home consultation to discuss your interior design requirements
                  and customise our services to suit your individual needs and budget.
                  Whatever you choose, our guiding principle is to enrich your life at home,
                  transforming your space to reflect your unique personality and create a
                  home your family and friends will love to spend time in. `,
    link: {
      text: 'view our design packages',
      route: '/pricing',
    },
    image: require('../assets/steps/step1-darkdesk.jpg'),
  },
  {
    number: 1,
    title: 'Find your interior design style',
    link: {
      text: 'take our free design quiz',
      route: '/questionnaire',
    },
    image: require('../assets/steps/step2-lightroom.jpg'),
    reverse: true,
  },
  {
    number: 2,
    title: 'Choose your design package',
    link: {
      text: 'view our pricing options',
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
