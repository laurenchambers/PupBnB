"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Spots", [
      {
        hostId: 1,
        name: "Lucy's Lovely Little Dog House",
        description:
          "Your pup is sure to feel welcome at my quaint 1 bedroom dog house.",
        streetAddress: "800 S Congress Ave",
        city: "Austin",
        state: "TX",
        zipCode: 78704,
        price: 40,
        img:
          "https://images.squarespace-cdn.com/content/v1/59c967729f7456ec37985037/1595364131033-JCN9NXP3LS587DU9A7W1/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/%231+-+DIY+Modern+Dog+House.JPG?format=2500w",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Spots", null, {});
  },
};
