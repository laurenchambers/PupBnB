"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [];
    const demo = {
      email: "demo@user.io",
      username: "Demo-lition",
      isHost: false,
      hashedPassword: await bcrypt.hashSync("password"),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    users.push(demo);

    for (let i = 0; i < 100; i++) {
      const otherUser = {
        email: faker.internet.email(),
        username: faker.internet.userName(),
        isHost: false,
        hashedPassword: await bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      users.push(otherUser);
    }
    return queryInterface.bulkInsert("Users", users, {});
  },

  down: (queryInterface, Sequelize) => {
    // const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      "Users",
      null,
      // {
      //   username: { [Op.in]: ["Demo-lition", "FakeUser1", "FakeUser2"] },
      // },
      {}
    );
  },
};
