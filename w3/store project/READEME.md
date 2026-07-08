# Server purpose

The server is designed to manage orders.
We have a database of customers and products.
The system manages the addition of a product to a customer's cart and the implementation of a cart purchase.

## File structure

```text
 project-root
 ├──  main.js             # Entry point / Executes the server
 ├──  server.js           # Creating and configuring the server
 ├──  utils.js            # Utility functions
 │
 ├── router              # Route handlers
 │    ├── 📄 productRouter.js  # Product router
 │    ├── 📄 customerRouter.js # Customer router
 │    └── 📄 orderRouter.js    # Order router
 │
 └── service             # Business logic layer
      ├── 📄 productService.js # Product logic
      ├── 📄 customerService.js# Customer logic
      └── 📄 orderService.js   # Order logic
```
### API Endpoints Reference

| Endpoint | Method | Description |
| :--- | :---: | :--- |
| `/` | `GET` | Short welcome message about the API. |
| `/health` | `GET` | Server health check to ensure the API is running. |
| `/products` | `GET` | Retrieves a list of products, with filtering options (see Chapter 7). |
| `/cart` | `GET` | Retrieves the shopping cart for a given `customerId`. |
| `/cart/items` | `POST` | Adds a new product to the customer's cart. |
| `/cart/items/:productId` | `DELETE` | Removes a specific product from the customer's cart. |
| `/account/balance` | `GET` | Retrieves the current account balance of the customer. |
| `/orders/checkout` | `POST` | Processes the checkout and creates a new order. |
| `/orders` | `GET` | Retrieves the order history for the customer. |
