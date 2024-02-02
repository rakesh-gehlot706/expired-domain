// import configuration from '@/configuration';
import { IoMdHelpCircle} from 'react-icons/io';
import { FaRegMoneyBillAlt , FaTools} from 'react-icons/fa';
import { AiOutlineBars } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { TbLogout } from "react-icons/tb";
import { IoSettings } from 'react-icons/io5';



type IconProps = { className: string; color: string; size: number };

const NAVIGATION_CONFIG = {
  items: [
    // {
    //   id: 1,
    //   label: 'Dashbord',
    //   path: '#',
    //   Icon: ({ className, color = 'gray', size = 25 }: IconProps) => {
    //     return <RxDashboard className={className} size={size} color={color} />;
    //   },
    // },
    {
      id: 2,
      label: 'Tools',
      path: '#',
      submenu: true,
      Icon: ({ className, color = 'gray', size =10 }: IconProps) => {
        return (
          <FaTools className={`${className} size={size} color={color} text-m`} style={{ width: `${10}px`, height: `${10}px` }} />
        );
      },
      submenuItems: [
        { label: 'Domain Table', path: '/pages/tools/domainTable' },
        { label: 'Spam Checker', path: '/pages/tools/spamchecker' },
        { label: 'Wayback Expert', path: '/pages/tools/wayback' },
        { label: 'Whois Tool', path: '/pages/tools/whoistool' },
        { label: 'Registrar Compare', path: '/pages/tools/registrarCompare' },
        { label: 'Index Checker', path: '/pages/tools/indexChecker' },
        { label: 'Duplicate Checker', path: '/pages/tools/duplicateChecker' },
        { label: 'SERP Checker', path: '/pages/tools/serpChecker' },
      ],
    },
    {
      id: 3,
      label: 'Domains',
      path: '#',
      submenu: true,
      Icon: ({ className, color = 'gray', size = 25 }: IconProps) => {
        return (
            <AiOutlineBars className={`${className} text-${color} text-sm`} style={{ width: `${10}px`, height: `${10}px` }} />
        );
      },
      submenuItems: [
        { label: 'Private Domain', path: '#' },
        { label: 'Watch List', path: '#' },
       
      ],
    },
    {
      id: 4,
      label: 'Content',
      path: '#',
      submenu: true,
      Icon: ({ className, color = 'gray', size = 25 }: IconProps) => {
        return  <MdContentCopy className={`${className} size={size} color={color} text-m`} style={{ width: `${10}px`, height: `${10}px` }} />
      },
      submenuItems: [
        { label: 'Content Creator', path: '#' },
        { label: 'SZ Words Usage', path: '#' },
        
      ],
    },
    {
      id: 5,
      label: 'Setting',
      path: '#',
      submenu: true,
      Icon: ({ className, color = 'gray', size = 25 }: IconProps) => {
        return (
            <IoSettings className={`${className} size={size} color={color} text-m`} style={{ width: `${10}px`, height: `${10}px` }} />
        );
      },
      submenuItems: [
        { label: 'PBN Hosting', path: '#' },
        { label: 'Ahrefs', path: '#' },
      ],
    },
    {
      id: 6,
      label: 'Profile',
      path: '#',
      Icon: ({ className, color = 'gray', size = 25 }: IconProps) => {
        return  <CgProfile className={`${className} size={size} color={color} text-m`} style={{ width: `${10}px`, height: `${10}px` }} />
      },
    },
    {
      id: 7,
      label: 'Credits',
      path: '#',
      Icon: ({ className, color = 'red', size = 25 }: IconProps) => {
        return (
            <FaRegMoneyBillAlt className={`${className} size={size} color={color} text-m`} style={{ width: `${10}px`, height: `${10}px` }} />
        );
      },
    },
    {
        id: 8,
        label: 'Help',
        path: '#',
        Icon: ({ className, color = 'red', size = 25 }: IconProps) => {
          return (
            <IoMdHelpCircle className={`${className} size={size} color={color} text-m`} style={{ width: `${10}px`, height: `${10}px` }} />
          );
        },
      },
      {
        id: 9,
        label: 'Logout',
        path: '#',
        Icon: ({ className, color = 'red', size = 25 }: IconProps) => {
          return (
            <TbLogout className={`${className} size={size} color={color} text-m`} style={{ width: `${10}px`, height: `${10}px` }} />
          );
        },
      },
  ],
};

export default NAVIGATION_CONFIG;