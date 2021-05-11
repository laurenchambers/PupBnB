"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Bookings",
      [
        {
          userId: 1,
          spotId: 1,
          startDate: "2021-7-03",
          endDate: "2021-7-07",
        },
        {
          userId: 1,
          spotId: 4,
          startDate: "2021-8-10",
          endDate: "2021-8-14",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Bookings", null, {});
  },
};
