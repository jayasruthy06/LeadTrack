# 🧠 Backend – LeadTrack CRM

This is the backend server for **LeadTrack CRM**, a full-featured role-based customer relationship management platform. Built with **Node.js**, **Express**, and **MongoDB**, the backend handles authentication, role-specific logic, file handling, payment processing, and secure API access.


## 🚀 Tech Stack

- **Node.js + Express**
- **MongoDB + Mongoose**
- **JWT Authentication (via jose/jsonwebtoken)**
- **Cloudinary** for PDF storage
- **Stripe** for invoice payments
- **Multer** for file uploads
- **PDFKit** for PDF generation
- **node-cron** for scheduling tasks


## 📁 Project Structure

```bash
backend/
├── config/ # DB and Cloudinary configurations
├── controllers/ # Route logic and business rules
├── middleware/ # Auth, error handling, rate limiting
├── models/ # Mongoose models/schemas
├── routes/ # API endpoints
├── utils/ # Helper functions (PDF, email, etc.)
├── .env # Environment variables
└── server.js # Entry point
```

## 🔐 Environment Variables

Set up a `.env` file in the root of `backend/` with the following:

```env
PORT=your port
JWT_SECRET=your-long-jwt-secret-key
MONGO_URI=your-mongodb-uri
NODE_ENV=development

CLOUDINARY_CLOUD_NAME=your-cloudinary-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
```
