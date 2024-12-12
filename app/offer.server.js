const OFFERS = [
  {
    id: 1,
    title: "One time offer",
    productTitle: "Test",
    productImageURL:
      "", // Replace this with the product image's URL.
    productDescription: [""],
    originalPrice: "12.00",
    discountedPrice: "12.00",
    changes: [
      {
        type: "add_variant",
        variantID: 42300751478844, // Replace with the variant ID.
        quantity: 1,
        discount: {
          value: 15,
          valueType: "percentage",
          title: "15% off",
        },
      },
    ],
  },
];

/*
 * For testing purposes, product information is hardcoded.
 * In a production application, replace this function with logic to determine
 * what product to offer to the customer.
 */
export function getOffers() {
  return OFFERS;
}

/*
 * Retrieve discount information for the specific order on the backend instead of relying
 * on the discount information that is sent from the frontend.
 * This is to ensure that the discount information is not tampered with.
 */
export function getSelectedOffer(offerId) {
  return OFFERS.find((offer) => offer.id === offerId);
}