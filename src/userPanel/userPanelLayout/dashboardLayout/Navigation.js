import DashboardIcon from '@mui/icons-material/Dashboard';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CellTowerOutlinedIcon from '@mui/icons-material/CellTowerOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';

export const NAVIGATION = [
    {
        segment: '/dashboard',
        title: 'Dashboard',
        icon: DashboardIcon,
    },
    {
        title: 'User management',
        icon: SettingsOutlinedIcon,
        children: [
            {
                segment: '/dashboard/userManagement/userList',
                title: 'User list',
                icon: CircleOutlinedIcon,
            },
            // {
            //     segment: '/dashboard/setting/wallet-address',
            //     title: 'Wallet Address',
            //     icon: CircleOutlinedIcon,
            // },
            // {
            //     segment: '/dashboard/setting/Set-transaction-password',
            //     title: 'Set Transaction Password',
            //     icon: CircleOutlinedIcon,
            // },
        ],
    },
    // {
    //     title: 'Setting',
    //     icon: SettingsOutlinedIcon,
    //     children: [
    //         {
    //             segment: '/dashboard/setting/profile',
    //             title: 'Profile',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/setting/wallet-address',
    //             title: 'Wallet Address',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/setting/Set-transaction-password',
    //             title: 'Set Transaction Password',
    //             icon: CircleOutlinedIcon,
    //         },
    //     ],
    // },
    // {
    //     title: 'Network',
    //     icon: CellTowerOutlinedIcon,
    //     children: [
    //         {
    //             segment: '/dashboard/network/networkList',
    //             title: 'Network List',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/network/referralList',
    //             title: 'Referral List',
    //             icon: CircleOutlinedIcon,
    //         }
    //     ],
    // },
    // {
    //     segment: '/dashboard/trade',
    //     title: 'Trade',
    //     icon: HandshakeIcon,
    // },
    // {
    //     segment: '/dashboard/transaction',
    //     title: 'Transaction',
    //     icon: ReceiptLongOutlinedIcon,
    // },
    // {
    //     title: 'Wallet',
    //     icon: AccountBalanceWalletIcon,
    //     children: [
    //         {
    //             segment: '/dashboard/wallet/deposit',
    //             title: 'Deposit',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/wallet/addFund',
    //             title: 'Add fund',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/wallet/withdraw',
    //             title: 'Withdraw',
    //             icon: CircleOutlinedIcon,
    //         },
    //         {
    //             segment: '/dashboard/wallet/swap',
    //             title: 'Swap',
    //             icon: CircleOutlinedIcon,
    //         }
    //     ],
    // },
    // {
    //     title: 'Log out',
    //     icon: LogoutIcon
    // },
]