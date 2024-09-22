export const constants = {
  Basic: {
    TestLink:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_14k8zJc0MdKI7CM289"
        : "https://buy.stripe.com/test_14k8zJc0MdKI7CM289",
    PriceID: "price_1Q19AeIxXY4kjgHfBYnIX8E2",
    Price: 9.99,
    Name: "Basic",
  },
  Pro: {
    TestLink:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_6oE7vFaWIfSQ2is288"
        : "https://buy.stripe.com/test_6oE7vFaWIfSQ2is288",
    PriceID: "price_1Q19AeIxXY4kjgHfBYnIX8E2",
    Price: 19.99,
    Name: "Pro",
  },
  Elite: {
    TestLink:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_14k8zJc0MdKI7CM289"
        : "",
    PriceID: "price_1Q19AeIxXY4kjgHfBYnIX8E2",
    Price: 49.99,
    Name: "Elite",
  },
};
