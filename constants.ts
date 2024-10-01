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
        ? "https://buy.stripe.com/https://buy.stripe.com/test_14k8zJc0MdKI7CM289"
        : "https://buy.stripe.com/14k17wh2R8UZ6u47su",
    priceId: "price_1Q19AeIxXY4kjgHfBYnIX8E2",
    Price: 24.99,
    Name: "GymTalk+",
  },
  {
    TestLink:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/5kAg2q27X2wB6u49AD"
        : "https://buy.stripe.com/5kAg2q27X2wB6u49AD",
    priceId: "price_1Q2u17IxXY4kjgHfE1xMnZUC",
    Price: 39.99,
    Name: "All you need to know about Calisthenics",
  },
];

export const programs = [
  {
    image: "/heroIMG.jpeg",
    title: "All you need to know about Calisthenics",
    description:
      "This is the document I wish I had when I started my calisthenics journey.",
    buttonText: "Get Started",
    href: "/programs/Calisthenics_Basics_Program",
  },
  {
    image: "/Handstand.jpg",
    title: "Handstand Mastery",
    description:
      "For anyone just starting out or advanced athletes looking to improve their strength and technique.",
    buttonText: "Get Started",
    href: "/programs/Handstand_Mastery_Program",
  },
  {
    image: "/Planche.jpg",
    title: "Intermediate to Advanced Calisthenics",
    description:
      "For athletes who have a solid foundation and looking to take their progress to the next level.",
    buttonText: "Get Started",
    href: "/programs/Intermediate_Advanced_Program",
  },
];

export const beginnerCalisthenics = {
  ft1: "Full in-depth workout program that I used to help you accelerate your training right away!",
  ft2: "Learn the intricacies of calisthenics and how to structure and build your own program based on your goals and fitness level!",
  ft3: "Get step by step instructions on how to effectively train outside the gym too! (Including, diet, recovery, etc.)",
};
