export const constants = {
  paymentLinks: {
    TestLink:
      process.env.NODE_ENV === "development"
        ? "https://buy.stripe.com/test_6oE7vFaWIfSQ2is288"
        : "",
  },
};
