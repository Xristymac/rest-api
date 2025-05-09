// app.js
const express = require('express');
const app = express();
const itemsRouter = require('./routes/items');

app.use(express.json());

// Root Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Item Routes
app.use('/items', itemsRouter);

// 404 Error Handling
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// General Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));