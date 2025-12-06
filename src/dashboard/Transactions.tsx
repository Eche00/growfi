import React from "react";

function Transactions() {
    return (
        <main className="w-full min-h-screen bg-[#0F121B]  text-white p-4">

            <h1 className="text-2xl font-semibold mb-4">Transaction Records</h1>

            <section className="bg-[#16162E] rounded-xl p-4 border border-[#2A3144]">

                {/* Tabs */}
                <div className="flex gap-2 mb-4">
                    <button className="px-4 py-1.5 rounded-md font-medium bg-[#68FCC6] text-black text-sm">
                        Deposit
                    </button>
                    <button className="px-4 py-1.5 rounded-md font-medium bg-[#2A3144] text-gray-300 text-sm">
                        Withdrawal
                    </button>
                </div>

                {/* Controls */}
                <div className="flex justify-between items-center mb-4 text-sm">
                    <div className="flex items-center gap-2 text-gray-300">
                        <span>Show</span>
                        <select className="bg-[#0F121B] border border-[#2A3144] rounded px-2 py-1 text-sm text-white">
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                        </select>
                        <span>entries</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-300">
                        <span>Search:</span>
                        <input
                            type="text"
                            className="bg-[#0F121B] border border-[#2A3144] rounded px-3 py-1 text-sm text-white w-48"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto border border-[#2A3144] rounded-lg">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-[#1F2433] text-gray-300 text-xs uppercase tracking-wide">
                            <tr>
                                <th className="p-3">Amount</th>
                                <th className="p-3">Payment Mode</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Date Created</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td colSpan={4} className="text-center py-6 text-gray-400 text-sm">
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
                        <button className="px-4 py-1.5 bg-[#2A3144] rounded-md text-sm">
                            Previous
                        </button>
                        <button className="px-4 py-1.5 bg-[#68FCC6] text-black rounded-md text-sm">
                            Next
                        </button>
                    </div>
                </div>
            </section>

            <p className="mt-8 text-gray-500 text-xs text-center">
                © GROWFI 2025
            </p>
        </main>
    );
}

export default Transactions;
