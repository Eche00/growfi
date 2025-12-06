import React from "react";

function Referrals() {
    return (
        <main className="w-full min-h-screen bg-[#0F121B] text-white p-4">

            <h1 className="text-2xl font-semibold mb-6">Referrals</h1>

            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

                {/* Referral Bonus */}
                <div className="bg-[#16162E] border border-[#2A3144] rounded-xl p-5">
                    <p className="text-sm text-gray-400">REFERRAL BONUS</p>
                    <h2 className="text-3xl font-bold mt-1 mb-4">$0.00</h2>

                    <button className="bg-[#2A3144] cursor-not-allowed transition px-4 py-2 rounded-md text-sm">
                        Withdraw Funds
                    </button>
                </div>

                {/* Referral Link */}
                <div className="bg-[#16162E] border border-[#2A3144] rounded-xl p-5">
                    <h2 className="text-lg font-semibold mb-1">Invite friends to earn</h2>
                    <p className="text-gray-400 text-sm mb-4">
                        Earn more commissions by inviting your friends to join Staking It.
                    </p>

                    <div className="flex items-center bg-[#0F121B] border border-[#2A3144] rounded-lg overflow-hidden">
                        <input
                            type="text"
                            readOnly
                            value="https://account.elitestockfinancepro.com/ref/customer"
                            className="flex-1 bg-transparent text-gray-300 px-3 py-2 text-sm outline-none"
                        />
                        <button className="bg-[#2A3144] hover:bg-[#353d53] px-4 py-2 text-sm">
                            📋
                        </button>
                    </div>
                </div>
            </div>

            {/* Referrals Table */}
            <section className="bg-[#16162E] border border-[#2A3144] rounded-xl p-4">

                <h2 className="text-lg font-medium mb-3">Your Referrals.</h2>

                {/* Controls */}
                <div className="flex flex-wrap justify-between items-center mb-4 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                        <span>Show</span>
                        <select className="bg-[#0F121B] border border-[#2A3144] rounded px-2 py-1 text-white">
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                        </select>
                        <span>entries</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span>Search:</span>
                        <input
                            type="text"
                            className="bg-[#0F121B] border border-[#2A3144] rounded px-3 py-1 text-white w-48"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto border border-[#2A3144] rounded-lg">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-[#1F2433] text-gray-300 text-xs uppercase tracking-wide">
                            <tr>
                                <th className="p-3">Client name</th>
                                <th className="p-3">Ref. level</th>
                                <th className="p-3">Parent</th>
                                <th className="p-3">Client status</th>
                                <th className="p-3">Date registered</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td colSpan={5} className="text-center py-6 text-gray-400">
                                    No data available in table
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center mt-4 text-gray-400 text-sm">
                    <span>Showing 0 to 0 of 0 entries</span>

                    <div className="flex gap-2">
                        <button className="px-4 py-1.5 bg-[#2A3144] rounded-md">
                            Previous
                        </button>
                        <button className="px-4 py-1.5 bg-[#68FCC6] hover:bg-[#68FCC6]/50 text-black rounded-md">
                            Next
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <p className="mt-8 text-gray-500 text-xs text-center">
                All Rights Reserved © Elite Stocks Finance 2025
            </p>
        </main>
    );
}

export default Referrals;
