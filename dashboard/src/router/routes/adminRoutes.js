import { lazy } from 'react';
const Home = lazy(() => import('../../pages/admin/Home'));



export const adminRoutes = [
  {
    path: 'admin/dashboard',
    element: <Home />,
    ability: ['admin', 'seller'],
  }
]
