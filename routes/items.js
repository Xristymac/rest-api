// routes/items.js
const express = require('express');
const router = express.Router();
let items = require('../data/store');

// Helper: Validate item
const validateItem = (item) => {
  if (!item.name || !item.description) {
    return false;
  }
  return true;
};

// GET all items
router.get('/', (req, res) => {
  res.json(items);
});

// GET item by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: 'Item not found' });
  res.json(item);
});

// POST create item
router.post('/', (req, res) => {
  const { name, description } = req.body;
  if (!validateItem(req.body)) return res.status(400).json({ error: 'Invalid item data' });

  const newItem = {
    id: items.length ? items[items.length - 1].id + 1 : 1,
    name,
    description
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT update item
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: 'Item not found' });
  if (!validateItem(req.body)) return res.status(400).json({ error: 'Invalid item data' });

  item.name = req.body.name;
  item.description = req.body.description;
  res.json(item);
});

// DELETE item
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ error: 'Item not found' });

  const deleted = items.splice(index, 1);
  res.json({ message: 'Item deleted', item: deleted[0] });
});

module.exports = router;