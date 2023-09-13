import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import { FaSocks, FaTree, FaWallet } from 'react-icons/fa6';

import tour1 from './assets/tour-1.jpeg';
import tour2 from './assets/tour-2.jpeg';
import tour3 from './assets/tour-3.jpeg';
import tour4 from './assets/tour-4.jpeg';
import tour5 from './assets/tour-5.jpeg';
import tour6 from './assets/tour-6.jpeg';

export const pageLinks = [
    { id: 1, title: 'home', path: '#home' },
    { id: 2, title: 'about', path: '#about' },
    { id: 3, title: 'services', path: '#services' },
    { id: 4, title: 'tours', path: '#tours' },
];

export const socialLinks = [
    { id: 1, icon: FaFacebook, path: 'https://www.facebook.com' },
    { id: 2, icon: FaTwitter, path: 'https://www.twitter.com' },
    { id: 3, icon: FaInstagram, path: 'https://www.instagram.com/' },
];

export const services = [
    {
        id: 1,
        icon: FaWallet,
        title: 'saving money',
        text: 'Our budget-friendly options ensure you explore more without breaking the bank.',
    },
    {
        id: 2,
        icon: FaTree,
        title: 'endless hiking',
        text: `Uncover the world's natural beauty with extensive hiking trails and adventures.`,
    },
    {
        id: 3,
        icon: FaSocks,
        title: 'amazing comfort',
        text: 'Experience comfort and luxury throughout your journey with our accommodations.',
    },
];

export const tours = [
    {
        id: 1,
        image: tour6,
        date: 'january 17th, 2024',
        title: 'taj mahal exploration',
        info: `Journey to the heart of India and behold the iconic Taj Mahal. Immerse yourself in the grandeur of this architectural masterpiece and explore India's rich history and culture.`,
        location: 'india',
        duration: 14,
        price: 2900,
    },
    {
        id: 2,
        image: tour5,
        date: 'february 9th, 2024',
        title: 'tanzania adventure',
        info: `Discover the untamed beauty of Tanzania on a thrilling safari adventure. Witness the "Big Five" and experience the stunning Serengeti and Ngorongoro Crater.`,
        location: 'tanzania',
        duration: 17,
        price: 3800,
    },
    {
        id: 3,
        image: tour1,
        date: 'august 26th, 2024',
        title: 'tibet adventure',
        info: `Embark on a spiritual journey through Tibet's landscapes, visiting ancient monasteries and witnessing breathtaking Himalayan vistas. Discover enlightenment in Tibet.`,
        location: 'china',
        duration: 6,
        price: 2100,
    },
    {
        id: 4,
        image: tour2,
        date: 'september 1th, 2024',
        title: 'best of java',
        info: `Experience the heart of Java, Indonesia, with our curated tour. Explore lush jungles, ancient temples, vibrant markets, and savor the rich flavors of Java's cuisine.`,
        location: 'indonesia',
        duration: 11,
        price: 1400,
    },
    {
        id: 5,
        image: tour3,
        date: 'october 15th, 2024',
        title: 'explore hong kong',
        info: `Dive into the vibrant energy of Hong Kong. From skyscrapers to traditional markets, savor a fusion of cultures and relish the city's unique blend of old and new.`,
        location: 'hong kong',
        duration: 8,
        price: 5000,
    },
    {
        id: 6,
        image: tour4,
        date: 'december 5th, 2024',
        title: 'kenya highlights',
        info: `Witness the untamed beauty of Kenya. Safari through iconic national parks, wildlife, and immerse yourself in Maasai culture. Kenya's natural wonders await.`,
        location: 'kenya',
        duration: 20,
        price: 3300,
    },
];
