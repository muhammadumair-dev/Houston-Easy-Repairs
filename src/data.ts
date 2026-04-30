export type ServiceCategory = {
  id: string;
  title: string;
  icon: string;
  short: string;
  items: string[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "handyman",
    title: "Home Repair & Handyman Services",
    icon: "Wrench",
    short:
      "From small fixes to bigger projects, our handymen handle it all with precision and care.",
    items: [
      "Drywall repair & patching",
      "Door & window repair",
      "Furniture assembly",
      "Cabinet & shelving installation",
      "Interior & exterior painting",
      "Flooring repair (tile, wood, laminate)",
      "Caulking & weather-stripping",
      "General home maintenance tasks",
    ],
  },
  {
    id: "electrical",
    title: "Electrical Repair Services",
    icon: "Zap",
    short:
      "Licensed electrical work to keep your home and business safe, code-compliant, and powered.",
    items: [
      "Light fixture installation & repair",
      "Ceiling fan installation",
      "Outlet & switch replacement",
      "Circuit breaker repairs",
      "Indoor & outdoor lighting",
      "Electrical troubleshooting",
      "Smoke detector installation",
      "Surge protection",
    ],
  },
  {
    id: "plumbing",
    title: "Plumbing Repair Services",
    icon: "Droplets",
    short:
      "Fast, leak-free plumbing repairs and installations for kitchens, bathrooms, and more.",
    items: [
      "Faucet & sink repair/installation",
      "Toilet repair & replacement",
      "Drain cleaning & unclogging",
      "Leak detection & repair",
      "Water heater repair & install",
      "Garbage disposal repair",
      "Pipe replacement",
      "Shower & tub installation",
    ],
  },
  {
    id: "maintenance",
    title: "Property Maintenance Services",
    icon: "Home",
    short:
      "Keep your residential or commercial property in top shape year-round with scheduled care.",
    items: [
      "Seasonal maintenance checks",
      "Pressure washing",
      "Gutter cleaning & repair",
      "Deck & fence repair",
      "Lawn & yard upkeep",
      "Rental property turnovers",
      "Commercial property upkeep",
      "Preventive maintenance plans",
    ],
  },
  {
    id: "installation",
    title: "Installation & Repair Services",
    icon: "Hammer",
    short:
      "Professional installation of fixtures, appliances, and home upgrades — done right the first time.",
    items: [
      "Appliance installation",
      "TV mounting",
      "Smart home device setup",
      "Window blinds & curtain rods",
      "Mirror & artwork hanging",
      "Garage door tune-ups",
      "Bathroom fixture upgrades",
      "Kitchen fixture upgrades",
    ],
  },
];

export const SERVICE_AREAS = [
  "Rosenberg",
  "Houston",
  "Richmond",
  "Sugar Land",
  "Katy",
];

export const COMPANY = {
  name: "Houston Easy Repairs",
  phone: "+1 (281) 250-2592",
  phoneHref: "tel:+12812502592",
  email: "info@houstoneasyrepairs.com",
  address: "4925 Avenue H Suite A, Rosenberg, TX 77471",
  hours: [
    { day: "Monday – Saturday", time: "8:00 AM – 6:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const WHY_CHOOSE_US = [
  {
    icon: "Award",
    title: "Experienced & Skilled Technicians",
    desc: "Our team brings years of hands-on experience to every job, big or small.",
  },
  {
    icon: "Zap",
    title: "Fast & Dependable Service",
    desc: "We show up on time and finish the job efficiently — without cutting corners.",
  },
  {
    icon: "DollarSign",
    title: "Affordable & Transparent Pricing",
    desc: "Honest quotes with no hidden fees. You always know what you're paying for.",
  },
  {
    icon: "Building2",
    title: "Residential & Commercial",
    desc: "From homes to businesses, we handle properties of every shape and size.",
  },
  {
    icon: "Heart",
    title: "Customer Satisfaction First",
    desc: "We're not done until you're 100% happy with the work we've delivered.",
  },
];
