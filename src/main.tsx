import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

import App from './App.tsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Add this line

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </QueryClientProvider>
    </Provider>

);
