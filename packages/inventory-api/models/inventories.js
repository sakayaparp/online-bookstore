'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class inventories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  inventories.init({
    ISBN: DataTypes.STRING,
    title: DataTypes.STRING,
    authors: DataTypes.STRING,
    amount: DataTypes.REAL,
    price: DataTypes.FLOAT,
    coverImage: DataTypes.TEXT,
    description: DataTypes.TEXT,
    categoryId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'inventories',
  });
  return inventories;
};