export const constants = [
  {
    TestLink: "https://discord.gg/jKeKpWyH",
    priceId: "price_1Q19AeIxXY4kjgHfBYnIX8E2",
    Price: "Free",
    Name: "Free tier",
  },
  {
    TestLink:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_6oE7vFaWIfSQ2is288"
        : "https://buy.stripe.com/14k17wh2R8UZ6u47su",
    priceId: "price_1Q19AeIxXY4kjgHfBYnIX8E2",
    Price: 24.99,
    Name: "GymTalk+",
  },
];

export const programs = [
  {
    image: "/heroIMG.jpeg",
    title: "All you need to know about Calisthenics",
    description:
      "This is the perfect all inclusive program for anyone wanting to get started or improve at calisthenics.",
    buttonText: "Get Started",
    href: "/programs/Calisthenics_Basics_Program",
    ft1: "First Feature",
    ft2: "First Feature",
    ft3: "First Feature",
    ft4: "First Feature",
  },
  {
    image: "/Handstand.jpg",
    title: "Handstand Mastery",
    description:
      "For anyone just starting out or advanced athletes looking to improve their strength and technique.",
    buttonText: "Get Started",
    href: "/programs/Handstand_Mastery_Program",
    ft1: "First Feature",
    ft2: "First Feature",
    ft3: "First Feature",
    ft4: "First Feature",
  },
  {
    image: "/Planche.jpg",
    title: "Intermediate to Advanced Calisthenics",
    description:
      "For athletes who have a solid foundation and looking to take their progress to the next level.",
    buttonText: "Get Started",
    href: "/programs/Intermediate_Advanced_Program",
    ft1: "First Feature",
    ft2: "First Feature",
    ft3: "First Feature",
    ft4: "First Feature",
  },
];
