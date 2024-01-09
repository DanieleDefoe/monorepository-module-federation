import { App } from '@/components/App';
import { Shop } from '@/pages/shop';
import { createBrowserRouter } from 'react-router-dom';

import { UserCard } from '@packages/shared/src/components/UserCard';

const routes = [
  {
    path: '/shop',
    element: <App />,
    children: [
      {
        path: '/shop/main',
        element: <Shop />,
      },
      {
        path: '/shop/second',
        element: (
          <div style={{ color: 'red' }}>
            <h1>second page</h1>
            <UserCard username="FROM SHOP" />
          </div>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
