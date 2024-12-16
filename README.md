# Car Store Server - BATCH 4 - ASSIGNMENT 2 - (SET-3)

## objective of this assignment

### Build an Express.js application powered by TypeScript and MongoDB, leveraging Mongoose for schema validation and efficient database management. This application facilitates comprehensive management of Cars and Orders, supporting full CRUD operations while maintaining data integrity.

## Features

### Car Management System

```
* Add, update, delete, and retrieve cars.
* Filter cars by category, brand, or model using query parameters.
* Manage car inventory and track availability.
```

### Order Management System

```
* Place car orders by specifying customer email and car ID.
* Automatically adjust inventory and track stock availability.
* Calculate revenue using MongoDB aggregation.
```

### Error Handling and Validation

```
* Standardized error response with detailed validation messages.
* Handle scenarios like insufficient stock or invalid input gracefully.
```

### Data Validation and Integrity

```
* Mongoose schema validation ensures proper structure for both cars and orders.
* Enum-based category restriction for cars.
```

### Revenue Calculation with Aggregation

```
* Aggregate and calculate total revenue from all orders.
```

## Models and Data Structure

### Car Model

```
* brand: Manufacturer of the car (e.g., Toyota).
* model: Specific car model (e.g., Camry).
* year: Manufacture year.
* price: Cost of the car.
* category: Enum (Sedan, SUV, Truck, Coupe, Convertible).
* description: Brief details about the car.
* quantity: Available stock.
* inStock: Boolean indicating availability.
```

### Order Model

```
* email: Customer email address.
* car: ObjectId referencing the car.
* quantity: Number of units ordered.
* totalPrice: Calculated as ``price × quantity``
```

## Setup Instructions for Local Development

## Prerequisites for Local Development

```
* Node.js (version 18 or higher)
* MongoDB Community Server
* TypeScript installed globally (npm install -g typescript)
```

## Steps to Run Locally

### Clone the Repository and Install Dependencies

```bash
git clone https://github.com/madeincoder/car-store-server
cd car-store-server
```

### Install Dependencies using NPM

```bash
npm install
```

### Set Up Environment Variables (.env)

- Create a .env file in the root directory.
- Add the following:

```dotenv
PORT=5000
MONGODB_URI=<your-mongodb-connection-string>
```

### Compile TypeScript to JavaScript

```bash
npm run dev || tsc || npx tsx
```

### Start the Server in Development Mode

```bash
npm run dev
```

### Test the API Endpoints

#### Use tools like Postman to interact with the endpoints:

- `/api/cars` for managing cars.

- `/api/orders` for placing orders.

## API Endpoints and Usage

### Car Management System

- Create Car

```
POST /api/cars

Request body: { brand, model, year, price, category, description, quantity, inStock }
```

- Retrieve All Cars

```
GET /api/cars?searchTerm=category|brand|model
```

- Retrieve Specific Car

```
GET /api/cars/:carId
```

- Update the Car

```
PUT /api/cars/:carId

Request body: { fields to update }
```

- Delete the Car

```
DELETE /api/cars/:carId
```

### Order Placement and Revenue

- Place An Order

```
POST /api/orders

Request body: { email, car, quantity, totalPrice }
```

- Calculate Revenue

```
GET /api/orders/revenue
```

## Scripts for Local Development

```bash
Build: npm run build
Start: npm start
Development: npm run dev
```

## Thank You for Reviewing this README!
