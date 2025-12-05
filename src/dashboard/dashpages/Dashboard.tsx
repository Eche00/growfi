import React from "react";
import SavingsIcon from '@mui/icons-material/Savings';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CreditScoreIcon from '@mui/icons-material/CreditScore';

export default function Dashboard() {
    return (
        <div className="w-full min-h-screen  text-white mm:p-6 p-4 space-y-6">

            {/* Welcome */}
            <h1 className="text-2xl font-semibold">Welcome, customer!</h1>

            {/* Balance Section */}
            <div className="bg-[#16162E] rounded-3xl shadow-xl mm:p-6 p-4 space-y-6">
                <div>
                    <p className="text-sm text-gray-300">ACCOUNT BALANCE</p>
                    <h2 className="text-4xl font-bold mt-1">$0.00</h2>
                    <p className="text-green-400 text-sm mt-1">↑ Up by $0.00 since you began investing</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#1a2342] rounded-2xl p-4 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-300">TOTAL DEPOSIT</p>
                            <h3 className="text-xl font-bold">$0.00</h3>
                        </div>
                        <AccountBalanceWalletIcon />
                    </div>

                    <div className="bg-[#1a2342] rounded-2xl p-4 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-300">TOTAL PROFIT</p>
                            <h3 className="text-xl font-bold">$0.00</h3>
                        </div>
                        <SavingsIcon />
                    </div>

                    <div className="bg-[#1a2342] rounded-2xl p-4 flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-300">TOTAL BONUS</p>
                            <h3 className="text-xl font-bold">$0.00</h3>
                        </div>
                        <CardGiftcardIcon />
                    </div>
                </div>

                <div className="bg-[#1a2342] rounded-2xl p-4 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-300">WITHDRAWALS</p>
                        <h3 className="text-xl font-bold">$0.00</h3>
                    </div>
                    <CreditScoreIcon />
                </div>
            </div>

            {/* Active Investments */}
            <div className="bg-[#16162E] rounded-3xl shadow-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Active Investments</h2>
                <div className="bg-[#1a2342] mm:p-6 p-4 rounded-2xl text-center text-gray-300">
                    <p>You do not have an active investment at the moment.</p>
                    <button className="mt-4 bg-[#68FCC6] hover:bg-[#68FCC6]/50 text-black rounded-xl px-6 py-2">Invest</button>
                </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-[#16162E] rounded-3xl shadow-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>

                <div className="flex space-x-4 mb-4">
                    <button className="bg-[#68FCC6] hover:bg-blue-700 rounded-xl px-4 py-2 text-black">Deposit</button>
                    <button className="border border-[#68FCC6] text-[#68FCC6] rounded-xl px-4 py-2">Withdrawal</button>
                </div>

                <div className="bg-[#1a2342] mm:p-6 p-4 rounded-2xl text-center text-gray-400">
                    <p>No transactions yet.</p>
                </div>
            </div>

        </div>
    );
}
