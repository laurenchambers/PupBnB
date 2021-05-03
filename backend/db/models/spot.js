"use strict";
module.exports = (sequelize, DataTypes) => {
  const Spot = sequelize.define(
    "Spot",
    {
      hostId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      streetAddress: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      state: {
        allowNull: false,
        type: DataTypes.STRING(4),
      },
      zipCode: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      img: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      lat: {
        allowNull: true,
        type: DataTypes.NUMERIC(10, 5),
      },
      lng: {
        allowNull: true,
        type: DataTypes.NUMERIC(10, 5),
      },
    },
    {}
  );
  Spot.associate = function (models) {
    Spot.hasMany(models.Rating, { foreignKey: "spotId" });
  };
  return Spot;
};
