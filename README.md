# Event Management System

## Description

This is a full-stack Event Management System that provides three types of users: Admin, Vendor, and User. The platform allows vendors to manage their items and user requests, users to browse products, add to cart, and make payments, while the admin can manage vendors, users, and memberships.

### Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript
- **Database**: MongoDB
- **Testing Tools**: Postman for API endpoint testing

## Features

### Admin

- Can add, update, and manage vendors.
- Can add, update, and manage users.
- Manage memberships (add/update).
  
### Vendor

- Manage items (add/view/update/delete).
- View product status.
- Handle user requests and transactions.
  
### User

- Browse vendor products.
- Add products to the cart.
- Complete payments.
- Manage guest list.
  
## Project Structure

|-- backend/ |-- models/ |-- User.js |-- Vendor.js |-- Membership.js |-- routes/ |-- admin.js |-- vendor.js |-- user.js |-- app.js |-- frontend/ |-- index.html |-- admin.html |-- vendor.html |-- user.html |-- css/ |-- styles.css |-- js/ |-- script.js

markdown
Copy code

### API Endpoints

- **Admin Routes**:
  - `POST /admin/add-vendor`: Add a new vendor.
  - `PUT /admin/update-vendor/:id`: Update vendor information.
  - `POST /admin/add-user`: Add a new user.
  - `PUT /admin/update-user/:id`: Update user information.
  - `POST /admin/add-membership`: Add a new membership.
  - `PUT /admin/update-membership/:id`: Update membership details.

- **Vendor Routes**:
  - `POST /vendor/add-item`: Add new product.
  - `GET /vendor/items`: View all products.
  - `PUT /vendor/update-item/:id`: Update a product.
  - `DELETE /vendor/delete-item/:id`: Delete a product.
  - `GET /vendor/view-requests`: View user requests.

- **User Routes**:
  - `GET /user/view-products`: View all vendor products.
  - `POST /user/cart/add`: Add product to the cart.
  - `POST /user/cart/payment`: Complete payment.
  - `POST /user/guest-list/add`: Add guests to the guest list.

## Installation

### Backend Setup

1. Clone the repository:
    ```bash
    git clone <repository_url>
    cd <project_directory>/backend
    ```

2. Install backend dependencies:
    ```bash
    npm install
    ```

3. Set up MongoDB:
   Ensure that MongoDB is running locally or remotely, and update the MongoDB URI in `app.js` or environment variables.

4. Run the server:
    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the `frontend/` directory.
2. Open `index.html` in your preferred browser or serve it using a local server.

### Testing

To test the API endpoints, you can use **Postman**:
1. Open Postman.
2. Import API routes and test each one with relevant payloads as provided in the API routes section.
