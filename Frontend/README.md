# 🧩 Frontend – LeadTrack CRM

This is the frontend application for **LeadTrack CRM**, a role-based customer relationship management platform. Built using **React + Vite**, the app delivers an intuitive user experience with powerful UI features, secure authentication, and role-specific access.

## 🛠️ Tech Stack

- **React + Vite**
- **React Router DOM** – for routing and navigation
- **Tailwind CSS** – for utility-first styling
- **Shadcn UI** – for clean, accessible components
- **Lucide React** – icon library
- **Cloudinary** – for invoice PDF storage and distribution
- **react-phone-input-2** – international phone number input
- **libphonenumber-js** – phone number formatting

## 🔐 Authentication & Routing

- **Auth Context** using React's Context API manages user session and user details globally.
- **ProtectedRoute** component is used to guard routes that require authentication.
- **Landing Page** is the default public route. After successful login, users are redirected to their respective role-based dashboards:

## 📊 Features

- **Role-based dashboards** for Admin, Sales, and Customers
- **Analytical Dashboard**: dynamic charts and key performance metrics
- **Interactive Kanban Board**: View, edit, delete, drag-and-drop deals. Customers have read-only access to deals
- **Cloudinary Integration** : Uploading and viewing invoice PDFs
- **Form Validations** applied across all forms
- **International Phone Number Input**: Automatically detects country code. Formats using `libphonenumber-js`

## 🌐 Environment Variables

> All API calls use the `VITE_API_BASE_URL` environment variable.

### Setup

Create a `.env` file in the root:

```env
VITE_API_BASE_URL=your url
```

Create your files inside src folder and store your images in assets folder.
