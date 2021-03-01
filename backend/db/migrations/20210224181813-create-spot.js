"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Spots", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      hostId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      streetAddress: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      state: {
        allowNull: false,
        type: Sequelize.STRING(4),
      },
      zipCode: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      img: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Spots");
  },
};
