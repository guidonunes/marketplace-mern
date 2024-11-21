import { lazy } from 'react';
import AdminDashboard from '../../views/admin/AdminDashboard';
const AdminDashboard = lazy(() => import('../../views/admin/AdminDashboard'));



export const adminRoutes = [
  {
    path: 'admin/dashboard',
    element: <AdminDashboard />,
    ability: ['admin', 'seller'],
  }
]
