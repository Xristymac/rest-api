# 🛠️ Simple REST API with Express.js

## 📄 Description

This is a simple REST API built with **Express.js** that demonstrates the core features of a backend service, including:

- RESTful routing
- Full CRUD functionality
- In-memory data storage
- Request validation
- Error handling

It allows users to create, read, update, and delete items.

---

## 🚀 Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Xristymac/rest-api.git
   cd rest-api

npm install

node app.js

- **POST /items** (Create an item)
  ```json
  {
    "name": "Book",
    "description": "A good read"
  }

**PUT /items/:id** (Update an item)
```json
{
  "name": "Book",
  "description": "A good read"
}

{
  "id": 1,
  "name": "Book",
  "description": "A good read"
}

{
  "name": "Updated Book",
  "description": "A better read"
}

{
  "id": 1,
  "name": "Updated Book",
  "description": "A better read"
}

{
  "message": "Item deleted successfully."
}

{
  "error": "Name and description are required."
}

{
  "error": "Item not found."
}


---