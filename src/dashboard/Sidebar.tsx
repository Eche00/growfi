import { NavLink } from "react-router-dom";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import HistoryIcon from '@mui/icons-material/History';
import PersonIcon from '@mui/icons-material/Person';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
        ? "flex flex-col items-center justify-center gap-1 w-[100px] h-[100px] rounded-xl border border-[#7E7ED7] shadow-[0_0_15px_rgba(255,255,255,0.05)] text-white transition"
        : "flex flex-col items-center justify-center gap-1 w-[100px] h-[100px] rounded-xl text-gray-400 hover:text-white transition";

function Sidebar() {
    return (
        <div className="bg-[#16162E] fixed top-0 left-0 w-[270px] h-screen flex flex-col items-center py-10 gap-10">

            {/* GRID MENU */}
            <div className="grid grid-cols-2 gap-4">

                <NavLink to="/dashboard" className={linkStyle}>
                    <SpaceDashboardIcon fontSize="small" />
                    <span className="text-xs">Home</span>
                </NavLink>

                <NavLink to="/dashboard/packages" className={linkStyle}>
                    <AssuredWorkloadIcon fontSize="small" />
                    <span className="text-xs">Packages</span>
                </NavLink>

                <NavLink to="/dashboard/deposit" className={linkStyle}>
                    <CurrencyExchangeIcon fontSize="small" />
                    <span className="text-xs">Deposit</span>
                </NavLink>

                <NavLink to="/dashboard/withdraw" className={linkStyle}>
                    <AssuredWorkloadIcon fontSize="small" />
                    <span className="text-xs">Withdraw</span>
                </NavLink>

                <NavLink to="/dashboard/transactions" className={linkStyle}>
                    <HistoryIcon fontSize="small" />
                    <span className="text-xs">Transactions</span>
                </NavLink>

                <NavLink to="/dashboard/referrals" className={linkStyle}>
                    <GroupAddIcon fontSize="small" />
                    <span className="text-xs">Referrals</span>
                </NavLink>
            </div>

            {/* PROFILE */}
            <NavLink to="/dashboard/profile" className={linkStyle}>
                <PersonIcon fontSize="small" />
                <span className="text-xs">Profile</span>
            </NavLink>
        </div>
    );
}

export default Sidebar;
