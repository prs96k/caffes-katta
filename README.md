# ☕ Caffe's Katta

A full-stack online food ordering platform that allows customers to browse menus, place food orders, and make secure payments. The system also includes an admin dashboard for managing food items and customer orders.

## 🚀 Features

### Customer Side

* Browse food menu
* Add items to cart
* Place food orders
* User authentication
* Online payment integration
* Order tracking

### Admin Panel

* Add new food items
* Manage food listings
* View customer orders
* Update order status
* Dashboard management

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Authentication

* JWT (JSON Web Token)
* Bcrypt

### Payment Gateway

* Stripe

## 📂 Project Structure

```text
caffe-s_katta/
│
├── frontend/      # Customer Website
├── admin/         # Admin Dashboard
├── backend/       # REST API Server
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/prs96k/caffes-katta.git
cd caffes-katta
```

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

### Install Admin Dependencies

```bash
cd ../admin
npm install
```

### Install Backend Dependencies

```bash
cd ../backend
npm install
```

## ▶️ Run Project

### Start Backend

```bash
cd backend
npm run server
```

### Start Frontend

```bash
cd frontend
npm run dev
```

### Start Admin Panel

```bash
cd admin
npm run dev
```

## 🔐 Environment Variables

Create a `.env` file in the backend folder and configure:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

## 🎯 Main Functionalities

* User Registration & Login
* Food Browsing
* Shopping Cart
* Secure Checkout
* Stripe Payments
* Order Management
* Admin Dashboard
* MongoDB Database Integration

## 🔮 Future Enhancements

* Email Notifications
* Coupon System
* Food Reviews & Ratings
* Real-time Order Tracking
* Mobile App Integration

## 👨‍💻 Author

GitHub: https://github.com/prs96k
