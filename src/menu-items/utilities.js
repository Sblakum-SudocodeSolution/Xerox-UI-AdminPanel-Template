import { IconTypography, IconPalette, IconShadow, IconWindmill, IconDashboard } from '@tabler/icons';
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill,
    IconDashboard
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

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
        {
            id: 'util-color',
            title: 'Manage User',
            type: 'item',
            url: '/utils/manage-user',
            icon: icons.IconPalette,
            breadcrumbs: false
        },
        {
            id: 'util-shadow',
            title: 'Work Queue',
            type: 'item',
            url: '/utils/work-queue',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        {
            id: 'util-typography',
            title: 'Application',
            type: 'item',
            url: '/utils/appliaction',
            icon: icons.IconTypography,
            breadcrumbs: false
        }
    ]
};

export default utilities;
