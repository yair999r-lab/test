# Online Store Server

The server is designed to manage an online store backend. It handles a database of customers, products, and orders using JSON files. The system manages adding products to a customer's cart, checking balances, and processing checkouts.

## File Structure

project-root
 |-- server.js              # Entry point / Creates, configures, and runs the server
 |-- utils.js               # Utility functions
 |-- fileHandler.js         # File system operations (read/write JSON)
 |-- data/                  # JSON database files
 |    |-- customers.json
 |    |-- orders.json
 |    |-- products.json
 |-- router/                # Route handlers
 |    |-- customerRouter.js
 |    |-- genarelRouter.js
 |    |-- orderRouter.js
 |-- service/               # Business logic layer
 |    |-- customerService.js
 |    |-- genarelService.js
 |    |-- orderService.js
 |-- .env                   # Environment variables (ignored by Git)
 |-- .env.example           # Example of required environment variables
 |-- .gitignore             # Files ignored by Git
 |-- package.json           # Dependencies and scripts

## Installation and Setup

1. Install dependencies:
   npm install

2. Environment Variables:
   Create a .env file in the root of the project (you can use .env.example as a reference).
   Ensure you have the following variables configured:
   PORT=3000
   DB_BASE_PATH=./data
   STARTING_BALANCE=500

3. Run the server (Development mode):
   npm run dev

## API Endpoints Reference

| Endpoint | Method | Description |
| --- | --- | --- |
| `/` | `GET` | Short welcome message about the API. |
| `/health` | `GET` | Server health check to ensure the API is running. |
| `/products` | `GET` | Retrieves a list of products, with filtering options. |
| `/cart` | `GET` | Retrieves the shopping cart for a given `customerId`. |
| `/cart/items` | `POST` | Adds a new product to the customer's cart. |
| `/cart/items/:productId` | `DELETE` | Removes a specific product from the customer's cart. |
| `/account/balance` | `GET` | Retrieves the current account balance of the customer. |
| `/orders/checkout` | `POST` | Processes the checkout and creates a new order. |
| `/orders` | `GET` | Retrieves the order history for the customer. |