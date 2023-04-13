// import React from 'react';
import { IconShadow, IconDashboard } from '@tabler/icons';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
const icons = {
    IconShadow,
    IconDashboard,
    PersonOutlineOutlinedIcon,
    InsertDriveFileOutlinedIcon,
    PeopleAltOutlinedIcon
};

let user = JSON.parse(localStorage.getItem('Admin_Signup'));

const utilities = {
    id: 'utilities',
    type: 'group',
    children: [
        {
            id: 'util-dash',
            title: 'Dashboard',
            type: 'item',
            url: '/utils/dashboard',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        user.userType === '1'
            ? {
                  id: 'util-color',
                  title: 'Manage User',
                  type: 'item',
                  url: '/utils/manage-user',
                  icon: icons.PeopleAltOutlinedIcon,
                  breadcrumbs: false
              }
            : 'External User',
        user.userType === '1'
            ? {
                  id: 'util-shadow',
                  title: 'Work Queue',
                  type: 'item',
                  url: '/utils/work-queue',
                  icon: icons.IconShadow,
                  breadcrumbs: false
              }
            : 'External User',
        {
            id: 'util-typography',
            title: 'Application',
            type: 'item',
            url: '/utils/appliaction',
            icon: icons.InsertDriveFileOutlinedIcon,
            breadcrumbs: false
        },
        {
            id: 'util-profile',
            title: 'Profile',
            type: 'item',
            url: '/utils/profile',
            icon: icons.PersonOutlineOutlinedIcon,
            breadcrumbs: false
        }
    ]
};

export default utilities;
