import { AiOutlineDashboard, AiOutlineShopping } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUsers, FaCodePullRequest} from "react-icons/fa6";
import { MdPayments } from "react-icons/md";
import { TiUserDelete } from "react-icons/ti";
import { IoIosChatbubbles } from "react-icons/io";

export const allNav = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <AiOutlineDashboard />,
    role: 'admin',
    path: '/admin/dashboard'
  },
  {
    id: 2,
    title: 'Orders',
    icon: <AiOutlineShopping />,
    role: 'admin',
    path: '/admin/dashboard/orders'
  },
  {
    id: 3,
    title: 'Category',
    icon: <BiCategory />,
    role: 'admin',
    path: '/admin/dashboard/category'
  },
  {
    id: 4,
    title: 'Sellers',
    icon: <FaUsers />,
    role: 'admin',
    path: '/admin/dashboard/sellers'
  },
  {
    id: 5,
    title: 'Payment Request',
    icon: <MdPayments />,
    role: 'admin',
    path: '/admin/dashboard/payment-request'
  },
  {
    id: 6,
    title: 'Deactivate Sellers',
    icon: <TiUserDelete />,
    role: 'admin',
    path: '/admin/dashboard/deactivate-sellers'
  },
  {
    id: 7,
    title: 'Seller Request',
    icon: <FaCodePullRequest />,
    role: 'admin',
    path: '/admin/dashboard/seller-request'
  },
  {
    id: 8,
    title: 'Live Chat',
    icon: <IoIosChatbubbles />,
    role: 'admin',
    path: '/admin/dashboard/live-chat'
  }
]
