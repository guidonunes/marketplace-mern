import { lazy } from 'react';
import AdminDashboard from '../../views/admin/AdminDashboard';
const Home = lazy(() => import('../../pages/admin/Home'));



export const adminRoutes = [
  {
    path: 'admin/dashboard',
    element: <AdminDashboard />,
    ability: ['admin', 'seller'],
  }
]
