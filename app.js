const express = require('express');
const app = express();
app.use(express.json());

let items = []; // In-memory storage
let idCounter = 1;

// GET all items
app.get('/items', (req, res) => {
  res.json(items);
});

// POST a new item
app.post('/items', (req, res) => {
  const { name, description } = req.body;
  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required.' });
  }

  const newItem = { id: idCounter++, name, description };
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT update an item
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;
  const item = items.find(i => i.id === id);

  if (!item) {
    return res.status(404).json({ error: 'Item not found.' });
  }

  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required.' });
  }

  item.name = name;
  item.description = description;
  res.json(item);
});

// DELETE an item
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(i => i.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Item not found.' });
  }

  items.splice(index, 1);
  res.json({ message: 'Item deleted successfully.' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});