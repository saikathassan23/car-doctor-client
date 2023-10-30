import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import AuthProvider from './providers/AuthProvider';
import myRoutes from './routes/myRoutes.jsx';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={myRoutes} />
        </AuthProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </div>
);
