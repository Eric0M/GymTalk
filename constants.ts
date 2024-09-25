export const constants = [
  {
    TestLink:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_14k8zJc0MdKI7CM289"
        : "https://buy.stripe.com/test_14k8zJc0MdKI7CM289",
    priceId: "price_1Q19AeIxXY4kjgHfBYnIX8E2",
    Price: 9.99,
    Name: "Basic",
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
  {
    TestLink:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_14k8zJc0MdKI7CM289"
        : "https://buy.stripe.com/test_14k8zJc0MdKI7CM289",
    priceId: "price_1Q19AeIxXY4kjgHfBYnIX8E2",
    Price: 49.99,
    Name: "Elite",
  },
];
