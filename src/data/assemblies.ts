export type Assembly = {
  id: string;
  name: string;
  district: string;
  location: string;
  pastor: string;
  time: string;
};

export const districts = [
  'All Districts',
  'Abelemkpe',
  'Accra Newtown',
  'Adabraka',
  'Alajo',
  'Avenor',
  'Burma Camp WC',
  'Canaan',
  'Caprice WC',
  'Danquah WC',
  'Kokomlemle',
  'Kotobabi',
  'Labone',
  'Maamobi',
  'Merry Villas',
  'Nima',
  'Nima Alaska',
  'Onyametease WC',
  'Osu',
  'PIWC Accra',
  'PIWC French',
  'Roman Ridge',
  'South La',
  'Trade Fair',
];

export const assembliesData: Assembly[] = [
  // Abelemkpe District
  { id: 'abelemkpe-central', name: 'Central Assembly', district: 'Abelemkpe', location: 'Abelemkpe, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'abelemkpe-dzorwulu-english', name: 'Dzorwulu English Assembly', district: 'Abelemkpe', location: 'Abelemkpe, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'abelemkpe-dzorwulu-twi', name: 'Dzorwulu Twi Assembly', district: 'Abelemkpe', location: 'Abelemkpe, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'abelemkpe-english', name: 'English Assembly', district: 'Abelemkpe', location: 'Abelemkpe, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'abelemkpe-peniel', name: 'Peniel Assembly', district: 'Abelemkpe', location: 'Abelemkpe, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // Accra Newtown District
  { id: 'accra-newtown-dr-thomas-wyatt-deaf', name: 'Dr. Thomas Wyatt Deaf Assembly', district: 'Accra Newtown', location: '19 Mensah Saba Rd, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'accra-newtown-dr-thomas-wyatt-english', name: 'Dr. Thomas Wyatt English Assembly', district: 'Accra Newtown', location: '19 Mensah Saba Rd, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'accra-newtown-dr-thomas-wyatt-main', name: 'Dr. Thomas Wyatt Main Assembly', district: 'Accra Newtown', location: '19 Mensah Saba Rd, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // Adabraka District
  { id: 'adabraka-asylum-down', name: 'Asylum Down Assembly', district: 'Adabraka', location: 'Adabraka, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'adabraka-cmb', name: 'CMB Assembly', district: 'Adabraka', location: 'Adabraka, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'adabraka-cpb', name: 'CPB Assembly', district: 'Adabraka', location: 'Adabraka, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'adabraka-jma-central', name: 'JMA Central Assembly', district: 'Adabraka', location: 'Adabraka, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'adabraka-redemption', name: 'Redemption Assembly', district: 'Adabraka', location: 'Adabraka, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // Alajo District
  { id: 'alajo-central', name: 'Central Assembly', district: 'Alajo', location: 'Alajo, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'alajo-elim', name: 'Elim Assembly', district: 'Alajo', location: 'Alajo, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'alajo-emmanuel', name: 'Emmanuel Assembly', district: 'Alajo', location: 'Alajo, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'alajo-english', name: 'English Assembly', district: 'Alajo', location: 'Alajo, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // Avenor District
  { id: 'avenor-bethany', name: 'Bethany Assembly', district: 'Avenor', location: 'Avenor, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'avenor-central', name: 'Central Assembly', district: 'Avenor', location: 'Avenor, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'avenor-jerusalem', name: 'Jerusalem Assembly', district: 'Avenor', location: 'Avenor, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'avenor-police-depot', name: 'Police Depot Assembly', district: 'Avenor', location: 'Avenor, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // Burma Camp WC District
  { id: 'burma-camp-wc-jubilee', name: 'Jubilee Assembly', district: 'Burma Camp WC', location: 'Burma Camp, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'burma-camp-wc-rhema', name: 'Rhema Assembly', district: 'Burma Camp WC', location: 'Burma Camp, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // Canaan District
  { id: 'canaan-canaan', name: 'Canaan Assembly', district: 'Canaan', location: 'Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'canaan-english', name: 'English Assembly', district: 'Canaan', location: 'Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'canaan-rehoboth', name: 'Rehoboth Assembly', district: 'Canaan', location: 'Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // Caprice WC District
  { id: 'caprice-wc-central', name: 'Central Assembly', district: 'Caprice WC', location: 'Caprice, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'caprice-wc-english', name: 'English Assembly', district: 'Caprice WC', location: 'Caprice, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // Danquah WC District
  { id: 'danquah-wc-danquah', name: 'Danquah Assembly', district: 'Danquah WC', location: 'Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'danquah-wc-english', name: 'English Assembly', district: 'Danquah WC', location: 'Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // Kokomlemle District
  { id: 'kokomlemle-bethel', name: 'Bethel Assembly', district: 'Kokomlemle', location: 'Kokomlemle, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'kokomlemle-english', name: 'English Assembly', district: 'Kokomlemle', location: 'Kokomlemle, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'kokomlemle-israel-and-zion', name: 'Israel and Zion Assembly', district: 'Kokomlemle', location: 'Kokomlemle, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // Kotobabi District
  { id: 'kotobabi-emmanuel', name: 'Emmanuel Assembly', district: 'Kotobabi', location: 'Kotobabi, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'kotobabi-kwc', name: 'KWC', district: 'Kotobabi', location: 'Kotobabi, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'kotobabi-mckeown', name: 'McKeown Assembly', district: 'Kotobabi', location: 'Kotobabi, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'kotobabi-nazareth', name: 'Nazareth Assembly', district: 'Kotobabi', location: 'Kotobabi, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'kotobabi-safo', name: 'Safo Assembly', district: 'Kotobabi', location: 'Kotobabi, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // South La District
  { id: 'south-la-central', name: 'Central Assembly', district: 'South La', location: 'South La, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'south-la-english', name: 'English Assembly', district: 'South La', location: 'South La, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'south-la-sophia-mckeown-temple', name: 'Sophia McKeown Temple', district: 'South La', location: 'South La, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'south-la-south-chapel-square', name: 'South Chapel Square Assembly', district: 'South La', location: 'South La, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // Labone District
  { id: 'labone-english', name: 'English Assembly', district: 'Labone', location: 'Labone, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'labone-grace', name: 'Grace Assembly', district: 'Labone', location: 'Labone, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'labone-labone', name: 'Labone Assembly', district: 'Labone', location: 'Labone, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // Maamobi District
  { id: 'maamobi-central', name: 'Central Assembly', district: 'Maamobi', location: 'Maamobi, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'maamobi-english', name: 'English Assembly', district: 'Maamobi', location: 'Maamobi, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'maamobi-grace', name: 'Grace Assembly', district: 'Maamobi', location: 'Maamobi, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'maamobi-salem', name: 'Salem Assembly', district: 'Maamobi', location: 'Maamobi, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // Merry Villas District
  { id: 'merry-villas-art-centre', name: 'Art Centre Assembly', district: 'Merry Villas', location: 'Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'merry-villas-christiana-obu-memorial-temple', name: 'Christiana Obu Memorial Temple', district: 'Merry Villas', location: 'Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'merry-villas-frafra', name: 'Frafra Assembly', district: 'Merry Villas', location: 'Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'merry-villas-ga-dangme', name: 'Ga Dangme Assembly', district: 'Merry Villas', location: 'Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'merry-villas-james-town', name: 'James Town Assembly', district: 'Merry Villas', location: 'Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'merry-villas-royal-priesthood', name: 'Royal Priesthood Assembly', district: 'Merry Villas', location: 'Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // Nima District
  { id: 'nima-emmanuel', name: 'Emmanuel Assembly', district: 'Nima', location: 'Nima, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'nima-jubilee', name: 'Jubilee Assembly', district: 'Nima', location: 'Nima, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'nima-kanda', name: 'Kanda Assembly', district: 'Nima', location: 'Nima, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // Nima Alaska District
  { id: 'nima-alaska-central', name: 'Central Assembly', district: 'Nima Alaska', location: 'Nima Alaska, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'nima-alaska-culture', name: 'Culture Assembly', district: 'Nima Alaska', location: 'Nima Alaska, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'nima-alaska-eben-danme', name: 'Eben/Danme Assembly', district: 'Nima Alaska', location: 'Nima Alaska, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'nima-alaska-maranatha', name: 'Maranatha Assembly', district: 'Nima Alaska', location: 'Nima Alaska, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'nima-alaska-zion', name: 'Zion Assembly', district: 'Nima Alaska', location: 'Nima Alaska, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // Onyametease WC District
  { id: 'onyametease-wc-otwc', name: 'OTWC', district: 'Onyametease WC', location: 'Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // Osu District
  { id: 'osu-bethel', name: 'Bethel Assembly', district: 'Osu', location: 'Osu, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'osu-cantonment', name: 'Cantonment Assembly', district: 'Osu', location: 'Osu, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'osu-central', name: 'Central Assembly', district: 'Osu', location: 'Osu, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'osu-english', name: 'English Assembly', district: 'Osu', location: 'Osu, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'osu-gloryland', name: 'Gloryland Assembly', district: 'Osu', location: 'Osu, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // PIWC Accra District
  { id: 'piwc-accra-piwc', name: 'PIWC Accra', district: 'PIWC Accra', location: 'Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // PIWC French District
  { id: 'piwc-french-piwc', name: 'PIWC French', district: 'PIWC French', location: 'Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // Roman Ridge District
  { id: 'roman-ridge-central', name: 'Central Assembly', district: 'Roman Ridge', location: 'Roman Ridge, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'roman-ridge-english', name: 'English Assembly', district: 'Roman Ridge', location: 'Roman Ridge, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'roman-ridge-thirty-seven', name: 'Thirty Seven Assembly', district: 'Roman Ridge', location: 'Roman Ridge, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },

  // Trade Fair District
  { id: 'trade-fair-central', name: 'Central Assembly', district: 'Trade Fair', location: 'Trade Fair, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'trade-fair-emmanuel', name: 'Emmanuel Assembly', district: 'Trade Fair', location: 'Trade Fair, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'trade-fair-english', name: 'English Assembly', district: 'Trade Fair', location: 'Trade Fair, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'trade-fair-tse-addo', name: 'Tse Addo Assembly', district: 'Trade Fair', location: 'Trade Fair, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
  { id: 'trade-fair-wireless', name: 'Wireless Assembly', district: 'Trade Fair', location: 'Trade Fair, Accra', pastor: 'Pastor', time: 'Sunday Worship – 9:00 AM' },
];