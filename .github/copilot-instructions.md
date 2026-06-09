# JeniDub Store - Copilot Instructions

## Architecture Overview

This is a React 19 e-commerce application with a dual state management approach:
- **Redux Toolkit** ([src/redux/cartSlice.tsx](src/redux/cartSlice.tsx)): Centralized cart state with localStorage persistence
- **React Context** ([src/context/ShoppingCartContext.tsx](src/context/ShoppingCartContext.tsx)): Currently defined but not actively used—consider consolidating to Redux only
- **React Query**: Handles product fetching and caching from the Fake Store API

### Key Components

- **ProductCatalog** ([src/components/ProductCatalog.tsx](src/components/ProductCatalog.tsx)): Fetches products via TanStack React Query, filters by category
- **ShoppingCart** ([src/components/ShoppingCart.tsx](src/components/ShoppingCart.tsx)): Displays cart items from Redux state
- **ProductCard** ([src/components/ProductCard.tsx](src/components/ProductCard.tsx)): Individual product display with "add to cart" action
- **MenuBar** ([src/components/MenuBar.tsx](src/components/MenuBar.tsx)): Navigation bar showing cart summary
- **Checkout** ([src/components/Checkout.tsx](src/components/Checkout.tsx)): Modal for purchase confirmation

Routes:
- `/` → ProductCatalog
- `/cart` → ShoppingCart

## State Management Pattern

**Redux Cart Actions** (in [src/redux/cartSlice.tsx](src/redux/cartSlice.tsx)):
- `addToCart(product)`: Appends product to `shoppingCart.items[]`
- `removeFromCart(productId)`: Removes by ID from items array
- `checkout()`: Clears `items` array after purchase

**Persistence**: [src/redux/storage.tsx](src/redux/storage.tsx) automatically saves/loads Redux state to localStorage under the `"currentCart"` key. Store subscription triggers on state changes ([src/redux/store.ts](src/redux/store.ts), line 19).

## Important Implementation Details

1. **TypeScript Issue**: [src/redux/store.ts](src/redux/store.ts) uses `@ts-expect-error` for `preloadedState` typing—this is a known limitation but works correctly at runtime. Do not attempt to fix without understanding Redux Toolkit's type system.

2. **Cart Duplicate Logic**: The `addToCart` reducer always appends items. There is no quantity increment logic—adding the same product twice creates two separate entries. Consider implementing quantity management if this needs fixing.

3. **Category Filtering**: ProductCatalog uses a Set to extract unique categories from the API response. The "All" category is hardcoded as the first option.

4. **API Source**: All products come from `https://fakestoreapi.com/products`. No custom API layer exists—axios calls happen directly in components.

## Development Workflow

```bash
npm install          # Install dependencies
npm run dev         # Start Vite dev server (localhost:5173)
npm run build       # TypeScript check + Vite build
npm run lint        # ESLint check
npm run preview     # Preview production build locally
```

## Styling Conventions

- **Bootstrap**: React Bootstrap components for layout (Container, Row, Col, Dropdown, Modal)
- **CSS Modules**: Individual `.css` files in component directories (App.css, index.css)
- **Icons**: FontAwesome and react-icons libraries available but usage varies by component

## Type Definitions

All types centralized in [src/types/Product.ts](src/types/Product.ts). The Product interface includes `quantity?` as optional—ensure consistency when adding cart quantity features.

## Testing & Debugging

- No test suite currently exists—add tests to `src/**/*.test.tsx` if implementing new features
- Use React DevTools Redux extension to inspect state changes
- Component console logs exist in removeFromCart action for debugging

## Code Organization Notes

- Redux state shape: `{ shoppingCart: { items: Product[] } }`
- Components use functional components with hooks
- TypeScript strict mode enabled in [tsconfig.json](tsconfig.json)
