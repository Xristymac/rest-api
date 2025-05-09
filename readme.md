# Simple REST API with Express.js

## 📄 Description

This is a simple REST API built with **Express.js** that demonstrates basic CRUD operations on items. The API includes routes for retrieving, creating, updating, and deleting items, along with error handling and data validation.

---

## 🚀 Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Xristymac/my-rest-api.git
   cd my-rest-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   node app.js
   ```

   The server will run at [http://localhost:3000](http://localhost:3000)

---

## 🧪 Example API Requests

- **POST /items** (Create an item)
  ```json
  {
    "name": "Book",
    "description": "A good read"
  }

**PUT /items/:id** (Update an item)
```json
{
    "name": "Updated Book",
    "description": "A better read"
}
