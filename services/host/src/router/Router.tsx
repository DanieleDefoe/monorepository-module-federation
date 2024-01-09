import { App } from '@/components/App';
import { createBrowserRouter } from 'react-router-dom';

// @ts-expect-error module federation
import shopRoutes from 'shop/Router';
// @ts-expect-error module federation
import adminRoutes from 'admin/Router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [...shopRoutes, ...adminRoutes],
  },
]);
