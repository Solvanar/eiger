const express = require('express');
const router = express.Router();
const Trades = require('../models/trades');

const notAllowedHandler = (req, res) => {
  return res.status(405).send('Not Allowed');
};

router.post('/', async (req, res) => {
  const { type, user_id, symbol, shares, price, timestamp } = req.body;

  if (!(['sell', 'buy']).includes(type) || shares < 1 || shares > 100) {
    return res.status(400).send('Invalid data');
  }

  const newUser = await Trades.create({
    type,
    user_id,
    symbol,
    shares,
    price,
    timestamp,
  });

  return res.status(201).send(newUser);
});

router.get('/', async (req, res) => {
  const { type, user_id } = req.query;

  const conditions = type || user_id ? { where: {} } : {};

  type && (conditions.where.type = type)
  user_id && (conditions.where.user_id = user_id)

  try {
    const trades = await Trades.findAll({
      order: [['id', 'ASC']],
      ...conditions,
    });
    return res.status(200).send(trades || [{}]);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Invalid data');
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const trade = await Trades.findByPk(id);
    return trade ? res.status(200).send(trade) :
      res.status(404).send('ID not found');
  } catch (error) {
    console.error(error);
    return res.status(404).send('Database error');
  }
});

router.patch('/:id', notAllowedHandler);
router.put('/:id', notAllowedHandler);
router.delete('/:id', notAllowedHandler);

module.exports = router;
