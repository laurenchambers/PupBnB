"use strict";
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define(
    "Rating",
    {
      rating: {
        type: DataTypes.INTEGER,
      },
      comment: {
        type: DataTypes.TEXT,
      },
      spotId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  Rating.associate = function (models) {
    Rating.belongsTo(models.User, { foreignKey: "userId" });
    Rating.belongsTo(models.Spot, { foreignKey: "spotId" });
  };
  return Rating;
};
