// Uncomment the code below to use Sequelize ORM
const {Sequelize, DataTypes} = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Trades = sequelize.define('Trade', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  type: DataTypes.ENUM('buy', 'sell'),
  user_id: DataTypes.INTEGER,
  symbol: DataTypes.STRING,
  shares: DataTypes.INTEGER,
  price: DataTypes.INTEGER,
  timestamp: DataTypes.INTEGER,
}, {
  createdAt: false,
  updatedAt: false,
});

module.exports = Trades;