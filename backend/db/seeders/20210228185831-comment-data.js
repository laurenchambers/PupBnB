"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          comment: "My pup loved staying here!",
          userId: 1,
          spotId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          comment: "My pup had the worst time here!",
          userId: 2,
          spotId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
