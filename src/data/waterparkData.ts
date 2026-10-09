import heroImage from '@/src/assets/images/hero_waterpark_splash_1790662825674.jpg';
import thunderRushImg from '@/src/assets/images/attraction_thunder_rush_1790662843689.jpg';
import waveLagoonImg from '@/src/assets/images/attraction_wave_lagoon_1790662855177.jpg';
import lazyRiverImg from '@/src/assets/images/attraction_lazy_river_1790662868104.jpg';
import diningImg from '@/src/assets/images/dining_tropical_refuel_1790662878929.jpg';
import { Attraction, Experience, TicketOption, DiningVenue, GalleryItem, Testimonial } from '../types';

export const HERO_ASSETS = {
  heroBg: heroImage,
  diningCover: diningImg,
};

export const ATTRACTIONS: Attraction[] = [
  {
    id: 'thunder-rush',
    name: 'Thunder Rush',
    category: 'thrill',
    categoryLabel: 'High-Speed Thrill',
    tagline: 'The ultimate high-velocity vertical plunge',
    description: 'Brace yourself for a sheer 75-foot near-vertical drop that propels you at up to 65 km/h through a translucent ocean-view tube.',
    image: thunderRushImg,
    thrillLevel: 'Extreme',
    minHeight: '122 cm (48 in)',
    speed: '65 km/h',
    features: ['Trapdoor Launch', 'Translucent Helix', 'Splash Runout Basin']
  },
  {
    id: 'ocean-drop',
    name: 'Ocean Drop',
    category: 'thrill',
    categoryLabel: 'Freefall Slide',
    tagline: 'Zero-gravity plummet into the blue',
    description: 'Step into the launch pod and feel the floor vanish beneath you as gravity sends you into double-looping high-banked spirals.',
    image: thunderRushImg,
    thrillLevel: 'Extreme',
    minHeight: '122 cm (48 in)',
    speed: '58 km/h',
    features: ['Sky Launch Pod', 'Twin High-G Loops', 'Hydro-brake Exit']
  },
  {
    id: 'aqua-racer',
    name: 'Aqua Racer',
    category: 'thrill',
    categoryLabel: 'Multi-Lane Challenge',
    tagline: 'Race head-to-head on aero-mats',
    description: 'Grab an aerodynamic water sled and race side-by-side down six undulating rainbow lanes with digital finish-line timing.',
    image: heroImage,
    thrillLevel: 'High',
    minHeight: '107 cm (42 in)',
    speed: '45 km/h',
    features: ['6 Racing Lanes', 'Digital Speed Clocks', 'Head-First Aero Mat']
  },
  {
    id: 'wave-lagoon',
    name: 'Wave Lagoon',
    category: 'pool',
    categoryLabel: 'Mega Wave Pool',
    tagline: 'Surging ocean swells and sandy shores',
    description: 'Over 2.5 million gallons of pristine turquoise water generating 4-foot rolling body-surf waves every 10 minutes, lined with warm sun loungers.',
    image: waveLagoonImg,
    thrillLevel: 'Moderate',
    minHeight: 'All Ages (Kids with vest)',
    speed: 'Gentle Swell',
    features: ['4-Foot Periodic Waves', 'White Sand Deck', 'Zero-Entry Shore']
  },
  {
    id: 'family-splash-zone',
    name: 'Family Splash Zone',
    category: 'family',
    categoryLabel: 'Interactive Fortress',
    tagline: 'A multi-level water playground for all ages',
    description: 'Four stories of climbing nets, 12 mini-slides, interactive water cannons, and a giant 1,000-gallon tipping bucket that drenches the plaza.',
    image: heroImage,
    thrillLevel: 'Mild',
    minHeight: 'All Heights Welcome',
    speed: 'Splash Velocity',
    features: ['1,000-Gal Tipping Bucket', '12 Family Mini Slides', '50+ Water Cannons']
  },
  {
    id: 'lazy-river',
    name: 'Lazy River',
    category: 'pool',
    categoryLabel: 'Scenic Float',
    tagline: 'Meander through lush tropical paradise',
    description: 'Drift along a quarter-mile continuous freshwater stream weaving beneath lush palm canopies, misting grottoes, and gentle rock waterfalls.',
    image: lazyRiverImg,
    thrillLevel: 'Mild',
    minHeight: 'All Ages Welcome',
    speed: '3 km/h Gentle Drift',
    features: ['Single & Double Tubes', 'Misting Caverns', 'Lush Tropical Canopy']
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'family-day',
    title: 'Family Day Out',
    subtitle: 'Moments to cherish for every generation',
    description: 'Shaded cabanas, zero-depth splash zones for toddlers, and shared double-rafts where parents and kids plunge together.',
    image: heroImage,
    highlights: ['Complimentary USCG life jackets', 'Dedicated stroller parking', 'Private shaded daybeds'],
    audience: 'Perfect for parents, toddlers & grandparents'
  },
  {
    id: 'adrenaline-rush',
    title: 'Adrenaline Rush',
    subtitle: 'Heart-pounding drops for true thrill-seekers',
    description: 'Conquer the park’s high-altitude launch towers with steep 80-degree freefalls, magnetic acceleration, and sweeping high-speed bowls.',
    image: thunderRushImg,
    highlights: ['Trapdoor zero-G launchers', 'High-speed speedometers', 'FastTrack priority access available'],
    audience: 'Teens & adventurous adults'
  },
  {
    id: 'kids-adventure',
    title: 'Kids Adventure',
    subtitle: 'Safe, splashing joy for curious young explorers',
    description: 'Non-slip splash pads, mini-rapids, interactive water wheels, and dedicated shallow pools staffed with attentive certified guards.',
    image: waveLagoonImg,
    highlights: ['Maximum depth 40cm', 'Interactive sensory fountains', 'Constant lifeguard surveillance'],
    audience: 'Children under 10 years'
  },
  {
    id: 'relax-unwind',
    title: 'Relax & Unwind',
    subtitle: 'Escape into tranquility beneath swaying palms',
    description: 'Float uninterrupted down the winding tropical river, sip fresh coconut mocktails, or lounge on teak sunbeds by the quiet lagoon.',
    image: lazyRiverImg,
    highlights: ['Heated botanical whirlpools', 'Poolside beverage service', 'Adults-only relaxation terrace'],
    audience: 'Couples & relaxation seekers'
  },
  {
    id: 'group-adventures',
    title: 'Group & VIP Cabanas',
    subtitle: 'Celebrate birthdays, reunions, and team milestones',
    description: 'Private furnished cabanas featuring personal host service, chilled refreshments, complimentary lockboxes, and premium shade.',
    image: diningImg,
    highlights: ['VIP concierge & meal delivery', 'Dedicated refrigerator & charging ports', 'Group ticket bundles'],
    audience: 'Groups of 6 to 30 people'
  }
];

export const TICKETS: TicketOption[] = [
  {
    id: 'day-pass',
    name: 'Day Pass',
    price: 49,
    period: 'per person / full day',
    description: 'Our standard full-day admission giving unrestricted access to all 20+ slides, pools, and interactive lagoons.',
    features: [
      'Full-day park access (10:00 AM — 7:00 PM)',
      'Unlimited rides on all 20+ water attractions',
      'Access to Wave Lagoon & Lazy River',
      'Free life jackets for all ages',
      'Complimentary general parking'
    ],
    notIncluded: ['FastTrack priority ride lane', 'Locker rental included']
  },
  {
    id: 'family-pass',
    name: 'Family Pass',
    badge: 'MOST POPULAR · SAVE 25%',
    popular: true,
    price: 159,
    period: 'for 2 Adults + 2 Children',
    description: 'The preferred package for families, bundling entry for four plus special perks and meal savings.',
    features: [
      'Full admission for 2 Adults + 2 Kids (under 12)',
      'Free upgraded Family XL Locker rental',
      '15% dining discount voucher at Wavefront Grill',
      'Dedicated stroller & family priority check-in',
      'Free refillable Aquavista souvenir cups (x2)',
      'Free life vests & toddler splash kit'
    ]
  },
  {
    id: 'premium-pass',
    name: 'Premium VIP Pass',
    badge: 'ALL-INCLUSIVE EXPERIENCE',
    price: 89,
    period: 'per person / VIP perks',
    description: 'The ultimate luxury adventure with skip-the-line privileges and private lounge amenities.',
    features: [
      'FastTrack unlimited skip-the-line ride access',
      'Complimentary premium electronic locker',
      'Exclusive access to VIP Oasis Terrace & daybeds',
      'Complimentary souvenir towel & tote bag',
      'Unlimited fountain beverages all day',
      'Dedicated VIP check-in lane'
    ]
  }
];

export const DINING_VENUES: DiningVenue[] = [
  {
    id: 'wavefront-grill',
    name: 'Wavefront Grill & Burgers',
    category: 'Burgers & Grill',
    description: 'Artisanal brioche smash burgers, crispy seasoned fries, flame-grilled chicken tenders, and ice-cold drafts right by the wave basin.',
    hours: '11:00 AM – 6:30 PM',
    image: diningImg,
    popularItems: [
      { name: 'Island Double Smash Burger', price: '$14.50', description: 'Angus beef, grilled pineapple glaze, cheddar, secret sauce', tag: 'Chef Favorite' },
      { name: 'Crispy Citrus Chicken Sliders', price: '$13.00', description: 'Buttermilk fried chicken, lime slaw, house pickles' },
      { name: 'Sea Salt & Herb Truffle Fries', price: '$7.50', description: 'Fresh cut potatoes tossed in aromatic rosemary sea salt' }
    ]
  },
  {
    id: 'palm-tiki',
    name: 'The Palm Tiki Bar & Smoothies',
    category: 'Tropical Drinks & Cocktails',
    description: 'Freshly cracked young coconuts, ice-blended dragon fruit smoothies, passionfruit coolers, and signature tropical spritzers.',
    hours: '10:00 AM – 7:00 PM',
    image: diningImg,
    popularItems: [
      { name: 'Coconut Mango Dream', price: '$8.50', description: 'Fresh mango, chilled coconut cream, crushed mint & honey', tag: 'Refreshing' },
      { name: 'Berry Splash Cooler', price: '$8.00', description: 'Wild berries, fresh lime juice, sparkling filtered mineral water' },
      { name: 'Whole Chilled Island Coconut', price: '$7.00', description: 'Straight from coastal groves, cracked fresh upon order' }
    ]
  },
  {
    id: 'island-gelato',
    name: 'Splash Gelato & Sweet Treats',
    category: 'Desserts & Refreshments',
    description: 'Authentic Italian-style artisanal gelato made fresh daily, warm cinnamon churros with Belgian chocolate dip, and shaved ice.',
    hours: '11:30 AM – 7:00 PM',
    image: diningImg,
    popularItems: [
      { name: 'Trio Artisanal Gelato Bowl', price: '$9.00', description: 'Salted caramel, pistachio, and fresh Alphonso mango', tag: 'Sweet' },
      { name: 'Crispy Warm Churro Basket', price: '$8.00', description: 'Cinnamon sugar dusting with warm dark chocolate sauce' },
      { name: 'Hawaiian Shaved Ice Cone', price: '$6.50', description: 'Blue raspberry, guava, and passionfruit with condensed milk' }
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Rafting Euphoria on the Main Slide',
    category: 'slides',
    image: heroImage,
    caption: 'Friends screaming with joy as the 4-person raft drops into the giant funnel.'
  },
  {
    id: 'g-2',
    title: 'Thunder Rush Launch Tower',
    category: 'slides',
    image: thunderRushImg,
    caption: 'The heart of our thrill zone standing 75 feet above the palm trees.'
  },
  {
    id: 'g-3',
    title: 'Turquoise Waters of Wave Lagoon',
    category: 'pools',
    image: waveLagoonImg,
    caption: 'Body surfers catching the crest of the 4-foot hourly wave surge.'
  },
  {
    id: 'g-4',
    title: 'Botanical Drift on the Lazy River',
    category: 'pools',
    image: lazyRiverImg,
    caption: 'Drifting beneath lush hanging ferns and tranquil tropical rockeries.'
  },
  {
    id: 'g-5',
    title: 'Poolside Artisanal Refreshments',
    category: 'dining',
    image: diningImg,
    caption: 'Fresh smash burgers, hand-cut fries, and chilled tropical coolers.'
  },
  {
    id: 'g-6',
    title: 'Golden Hour Splash Memories',
    category: 'family',
    image: heroImage,
    caption: 'Families celebrating an unforgettable sun-drenched day at Aquavista.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sarah & David Miller',
    role: 'Visited with 2 kids (ages 7 & 10)',
    visitorType: 'Family Visitors',
    avatarText: 'SM',
    rating: 5,
    date: 'August 2026',
    comment: 'Aquavista exceeded every expectation! The Family Splash Zone kept our kids engaged for hours, while the Wave Lagoon was so clean and well-patrolled by lifeguards. Booking online was effortless.'
  },
  {
    id: 't-2',
    name: 'Marcus Vance',
    role: 'Adventure Enthusiast',
    visitorType: 'Thrill Seeker',
    avatarText: 'MV',
    rating: 5,
    date: 'September 2026',
    comment: 'Thunder Rush is hands down the most intense water slide I’ve experienced on the coast. The vertical trapdoor drop is wild! Getting the VIP Pass with FastTrack made our day seamless.'
  },
  {
    id: 't-3',
    name: 'Elena Rostova',
    role: 'Group Organizer',
    visitorType: 'Cabana Host',
    avatarText: 'ER',
    rating: 5,
    date: 'July 2026',
    comment: 'We rented a private cabana by the Lazy River for my sister’s 30th birthday. The food service from Wavefront Grill was hot and prompt, the cocktails were delicious, and the staff were exceptionally warm.'
  }
];

export const FAQS = [
  {
    question: 'What are the park operating hours?',
    answer: 'Aquavista Waterpark is open daily from 10:00 AM to 7:00 PM. During peak summer and holiday weekends, we extend hours for our “Sunset Splash” evening sessions until 9:00 PM.'
  },
  {
    question: 'Are life jackets provided for children?',
    answer: 'Yes! Coast Guard-approved life vests of all sizes (infant, child, youth, adult) are provided completely free of charge throughout the park at all locker and pool stations.'
  },
  {
    question: 'Can I bring my own food and drinks?',
    answer: 'Guests may bring sealed bottled water and baby food/formula. For guest safety and hygiene, outside coolers, glass containers, and commercial meals are not permitted inside the gates.'
  },
  {
    question: 'What happens if it rains during our visit?',
    answer: 'Aquavista operates in light rain! If severe weather or lightning forces attractions to suspend operations for more than 90 consecutive minutes, we issue a complimentary Rainy Day Return Pass valid for 12 months.'
  },
  {
    question: 'Are there locker facilities available?',
    answer: 'Yes, we provide secure keyless digital lockers in Standard, Large, and Family XL sizes accessible via RFID wristbands or numeric pin codes throughout the day.'
  }
];
