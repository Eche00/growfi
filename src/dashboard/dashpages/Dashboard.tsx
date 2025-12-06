import React from "react";
import SavingsIcon from '@mui/icons-material/Savings';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

export default function Dashboard() {
    return (
        <div className="w-full min-h-screen bg-[#0F121B] text-white mm:p-5 p-4 space-y-5">

            {/* Welcome */}
            <h1 className="text-xl font-semibold">Welcome, customer!</h1>

            {/* Balance Section */}
            <div className="bg-[#16162E] rounded-2xl shadow-lg mm:p-5 p-4 space-y-5">
                <div>
                    <p className="text-xs text-gray-300">ACCOUNT BALANCE</p>
                    <h2 className="text-3xl font-bold mt-1">$0.00</h2>
                    <p className="text-green-400 text-xs mt-1">↑ Up by $0.00 since you began investing</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-[#1F2433] rounded-xl p-3 flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-300">TOTAL DEPOSIT</p>
                            <h3 className="text-lg font-semibold">$0.00</h3>
                        </div>
                        <AccountBalanceWalletIcon fontSize="small" />
                    </div>

                    <div className="bg-[#1F2433] rounded-xl p-3 flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-300">TOTAL PROFIT</p>
                            <h3 className="text-lg font-semibold">$0.00</h3>
                        </div>
                        <SavingsIcon fontSize="small" />
                    </div>

                    <div className="bg-[#1F2433] rounded-xl p-3 flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-300">TOTAL BONUS</p>
                            <h3 className="text-lg font-semibold">$0.00</h3>
                        </div>
                        <CardGiftcardIcon fontSize="small" />
                    </div>
                </div>

                <div className="bg-[#1F2433] rounded-xl p-3 flex items-center justify-between">
                    <div>
                        <p className="text-xs text-gray-300">WITHDRAWALS</p>
                        <h3 className="text-lg font-semibold">$0.00</h3>
                    </div>
                    <CreditScoreIcon fontSize="small" />
                </div>
            </div>

            {/* Active Investments */}
            <div className="bg-[#16162E] rounded-2xl shadow-lg mm:p-5 p-4">
                <h2 className="text-lg font-semibold mb-3">Active Investments</h2>
                <div className="bg-[#1F2433] mm:p-5 p-4 rounded-xl text-center text-gray-300">
                    <p className="text-sm">You do not have an active investment at the moment.</p>
                    <button className="mt-3 bg-[#68FCC6] hover:bg-[#68FCC6]/50 text-black rounded-lg px-5 py-1.5 text-sm">
                        Invest
                    </button>
                </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-[#16162E] rounded-2xl shadow-lg mm:p-5 p-4">
                <h2 className="text-lg font-semibold mb-3">Recent Transactions</h2>

                <div className="flex space-x-3 mb-4">
                    <button className="bg-[#68FCC6] hover:bg-[#68FCC6]/50 rounded-lg px-4 py-1.5 text-black text-sm">
                        Deposit
                    </button>
                    <button className="border border-[#68FCC6] text-[#68FCC6] rounded-lg px-4 py-1.5 text-sm">
                        Withdrawal
                    </button>
                </div>

                <div className="bg-[#1F2433] mm:p-5 p-4 rounded-xl text-center text-gray-400">
                    <p className="text-sm">No transactions yet.</p>
                </div>
            </div>

        </div>

    );
}
