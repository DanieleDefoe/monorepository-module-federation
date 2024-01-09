import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { deepMerge } from '@packages/shared/src/utils/deepMerge';

import { UserCard } from '@packages/shared/src/components/UserCard';

export const App = () => {
  deepMerge();
  return (
    <div>
      <h1>ADMIN MODULE</h1>

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>

      <UserCard username="FROM ADMIN" />
    </div>
  );
};
