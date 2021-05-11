"use strict";
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "Booking",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Users" },
      },
      spotId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "Spots" },
      },
      startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {}
  );
  Booking.associate = function (models) {
    // associations can be defined here
    Booking.belongsTo(models.User, { foreignKey: "userId" });
    Booking.belongsTo(models.Spot, { foreignKey: "Spotid" });
  };
  return Booking;
};
