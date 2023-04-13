import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

const icons = {
    PersonAddAltOutlinedIcon,
    LoginOutlinedIcon
};

const pages = {
    id: 'pages',
    type: 'group',
    children: [
        {
            id: 'login3',
            title: 'SignIn',
            type: 'item',
            url: '/pages/signin',
            icon: icons.LoginOutlinedIcon,
            target: false
        },
        {
            id: 'register3',
            title: 'SignUp',
            type: 'item',
            url: '/pages/signup',
            icon: icons.PersonAddAltOutlinedIcon,
            target: false
        }
    ]
};

export default pages;
