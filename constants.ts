export const constants = [
  {
    TestLink: "https://discord.gg/65Bn7YZj",
    priceId: "price_1Q19AeIxXY4kjgHfBYnIX8E2",
    Price: "Free",
    Name: "Free tier",
  },
  {
    TestLink:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_6oE7vFaWIfSQ2is288"
        : "https://buy.stripe.com/test_14k8zJc0MdKI7CM289",
    priceId: "price_1Q19AeIxXY4kjgHfBYnIX8E2",
    Price: 24.99,
    Name: "GymTalk+",
  },
];
