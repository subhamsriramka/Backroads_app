import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "home",
  },
  {
    id: 2,
    href: "#about",
    text: "about",
  },
  {
    id: 3,
    href: "#services",
    text: "services",
  },
  {
    id: 4,
    href: "#tours",
    text: "tours",
  },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.facebook.com",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    icon: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.squarespace.com",
    icon: "fab fa-squarespace",
  },
];

export const services = [
  {
    id: "1",
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Budget-friendly options available for maximizing your savings.",
  },
  {
    id: "2",
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Unleash your wanderlust with our endless hiking adventures and trails.",
  },
  {
    id: "3",
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Experience the epitome of amazing comfort with us.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "August 26th, 2023",
    title: "Tibet Adventure",
    info: "Embark on an extraordinary Tibet adventure, where ancient traditions, majestic landscapes, and spiritual wonders combine for an unforgettable journey of a lifetime.",
    location: "china",
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "August 26th, 2023",
    title: "Best Of Java",
    info: "Indulge in the rich flavors and vibrant culture of Java as we curate the best of Java for an unforgettable experience.",
    location: "Indonesia",
    duration: 6,
    price: 2000,
  },
  {
    id: 3,
    image: tour3,
    date: "August 26th, 2023",
    title: "Explore Hong Kong",
    info: "Embark on an unforgettable journey to explore Hong Kong's vibrant culture, iconic landmarks, and captivating blend of tradition and modernity.",
    location: "china",
    duration: 6,
    price: 2100,
  },
  {
    id: 4,
    image: tour4,
    date: "August 26th, 2023",
    title: "Kenya Highlights",
    info: "Embark on a captivating journey through Kenya's highlights, where majestic wildlife, stunning landscapes, and vibrant cultures come together in harmony.",
    location: "Kenya",
    duration: 6,
    price: 2100,
  },
];
