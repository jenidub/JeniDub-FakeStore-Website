
# The JeniDub Store 🛍️

A modern, full-featured e-commerce shopping cart application built with React, TypeScript, and Redux Toolkit. This project demonstrates advanced state management, persistent storage, and integration with external APIs.

## 🚀 Features

-   **Product Catalog**: Browse products fetched from the Fake Store API
-   **Category Filtering**: Filter products by category for easy navigation
-   **Shopping Cart Management**: Add, remove, and adjust item quantities
-   **Persistent Storage**: Cart state persists across browser sessions using localStorage
-   **Real-time Updates**: Cart totals and item counts update instantly
-   **Responsive Design**: Built with React Bootstrap for mobile-friendly UI
-   **Checkout Flow**: Complete purchase workflow with modal confirmation

## 🛠️ Tech Stack

**Core:**
-   React 19.2.0
-   TypeScript 5.9.3

**State Management:**
-   Redux Toolkit 2.11.2

**Data Fetching:**
-   TanStack React Query 5.90.12

**UI & Styling:**
-   React Bootstrap 2.10.10
-   React Icons 5.5.0

**Routing:**
-   React Router DOM 7.11.0

## 📦 Installation

1.  **Clone the repository:**
```bash
git clone <your-repo-url>
cd fake-store-app

```

2.  **Install dependencies:**
```bash
npm install

```

3.  **Start the development server:**
```bash
npm run dev

```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── CartCard.tsx          # Individual cart item component
│   ├── Checkout.tsx          # Checkout modal
│   ├── MenuBar.tsx           # Navigation bar with cart summary
│   ├── ProductCard.tsx       # Product display card
│   ├── ProductCatalog.tsx    # Main catalog page
│   └── ShoppingCart.tsx      # Shopping cart page
├── redux/
│   ├── cartSlice.tsx         # Redux cart state & actions
│   ├── storage.tsx           # localStorage utilities
│   └── store.ts              # Redux store configuration
├── types/
│   └── Product.ts            # TypeScript interfaces
├── App.tsx                   # Main app component with routing
└── main.tsx                  # Application entry point

```

## 🔑 Key Functionality

### Redux State Management

The application uses Redux Toolkit for centralized state management with three main actions:

-   `addToCart`: Adds products to the shopping cart
-   `removeFromCart`: Removes individual items
-   `checkout`: Clears the cart after purchase

### Persistent Storage

Cart data is automatically saved to localStorage and restored on page reload, ensuring users don't lose their selections between sessions.

### Data Fetching
React Query manages API calls to the Fake Store API, providing:
-   Automatic caching
-   Loading states
-   Error handling

## 🐛 Known Issues
-   Minor TypeScript configuration warning in `store.ts` (suppressed with `@ts-expect-error` - functionality works correctly)

## 🎓 Learning Objectives
This project demonstrates:
-   ✅ Redux Toolkit state management patterns
-   ✅ TypeScript integration with React
-   ✅ React Query for API data fetching
-   ✅ localStorage for state persistence
-   ✅ React Router for SPA navigation
-   ✅ Component composition and reusability
-   ✅ Modern React patterns (hooks, functional components)

## 📄 License
This project is part of the Coding Temple Front End Specialization coursework.

----------

**Developed by Jeni** | _Coding Temple Front End Specialization - January 2026_
