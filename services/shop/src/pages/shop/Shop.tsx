import { Link } from 'react-router-dom';

import { shopRoutes } from '@packages/shared/src/routes/shop';

const Shop = () => {
  return (
    <div>
      <Link to={shopRoutes.second}>go to second page</Link>
    </div>
  );
};

export default Shop;
