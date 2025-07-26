# 🛍️ Route Tech - E-commerce Products App

A simple e-commerce UI built with **React**, **TypeScript**, and **TailwindCSS**.  
You can view, filter, search, sort, and manage your favorite and cart items — all stored in `localStorage`.

## 🚀 Features

- 🔍 Filter by brands and categories
- 🔄 Sort by price (ascending / descending)
- 🔎 Search products by name
- ❤️ Add/remove from favorites
- 🛒 Add/remove from cart
- 💾 Persist data in localStorage
- 🔄 Reusable filtering component
- 🧠 Custom hooks for data handling
- 🎨 Styled using Tailwind CSS

---

## 📁 Project Structure

src/
├── components/ # Reusable UI components (e.g., ProductCard, Filter UI)
├── containers/ # Logical grouping of product displays (with conditions)
├── hooks/ # Custom hooks (like useProductActions, useMainProducts)
├── pages/
│ ├── all-products/ # All products page with filters
│ ├── cart/ # Cart page
│ └── favorites/ # Favorites page
├── types/ # TypeScript types (e.g., ProductType)
├── assets/ # Icons, images, etc.
└── App.tsx # Routing and navigation

---

## 🧪 Tech Stack

- **React**
- **TypeScript**
- **TailwindCSS**
- **React Router**
- **LocalStorage** for state persistence
- **Custom Hooks** for better separation of logic
- **Toast Notifications** (Sonner)

---

## 🛠️ Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/Hassan-yasser/Route-Tech.git
cd Route-Tech
```

2. \*\*install Dependencies
   <!-- npm -->
   npm install
   <!-- yarn -->
   yarn install
