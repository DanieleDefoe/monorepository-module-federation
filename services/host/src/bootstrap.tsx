import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router';

const rootNode = document.getElementById('root')!;

const root = createRoot(rootNode);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
