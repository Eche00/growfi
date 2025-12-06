import React, { useState } from "react";

const Deposit = () => {
    const [selectedMethod, setSelectedMethod] = useState("");
    const methods = [
        { name: "USDT", icon: "https://cryptologos.cc/logos/tether-usdt-logo.png" },
        { name: "Ethereum", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
        { name: "Bitcoin", icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
    ];

    return (
        <main className="w-full min-h-screen bg-[#0F121B] text-white p-6">
            <h1 className="text-3xl font-bold mb-6">Fund Your Account</h1>

            <section className="bg-[#16162E] rounded-2xl p-6 shadow-xl border border-[#2A3144]">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left */}
                    <div className="lg:col-span-2">
                        <label className="block text-sm mb-2">Enter Amount</label>
                        <input
                            type="number"
                            placeholder="Enter Amount"
                            className="w-full bg-transparent border border-gray-700 px-4 py-2 rounded-lg text-white mb-6 focus:border-blue-500"
                        />

                        <p className="mb-3">Choose payment method:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {methods.map((m) => (
                                <div
                                    key={m.name}
                                    onClick={() => setSelectedMethod(m.name)}
                                    className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition 
                    ${selectedMethod === m.name ? "border-[#68FCC6] bg-[#68fcc621]" : "border-gray-700"}`}
                                >
                                    <div className="flex items-center gap-2">
                                        <img src={m.icon} alt={m.name} className="w-6 h-6" />
                                        <p className="text-lg">{m.name}</p>
                                    </div>
                                    <div className={`w-4 h-4 rounded border ${selectedMethod === m.name ? "bg-[#68FCC6] border-[#68FCC6]" : "border-gray-400"}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right */}
                    <div className="space-y-4">
                        <div className="border border-gray-700 rounded-xl p-4">
                            <p className="text-xs text-gray-400">ACCOUNT BALANCE</p>
                            <p className="text-2xl font-semibold mt-1">$0.00</p>
                        </div>
                        <div className="border border-gray-700 rounded-xl p-4">
                            <p className="text-xs text-gray-400">TOTAL DEPOSIT</p>
                            <p className="text-2xl font-semibold mt-1">$0.00</p>
                        </div>

                    </div>
                </div>

                <button className="w-full bg-white text-black font-semibold py-2 mt-6 rounded-lg hover:bg-gray-200 transition">
                    Proceed to Payment
                </button>
            </section>

            <p className="mt-8 text-gray-400 text-sm text-center">
                All Rights Reserved © Elite Stocks Finance 2025
            </p>
        </main>
    );
};

export default Deposit;
