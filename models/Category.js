const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, // type integer
      allowNull: false, // can't be null
      primaryKey: true, // primary key
      autoIncrement: true // auto increment
    },
    category_name: {
      type: DataTypes.STRING, // type string
      allowNull: false // can't be null
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
