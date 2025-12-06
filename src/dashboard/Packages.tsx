import React, { useState } from "react";

const plans = [
    {
        title: "Basic Plan",
        min: "$30",
        max: "$999",
        duration: "24hrs",
    },
    {
        title: "Silver Plan",
        min: "$1,000",
        max: "$4,999",
        duration: "72hrs",
    },
    {
        title: "Gold Plan",
        min: "$5,000",
        max: "$9,999",
        duration: "7 Days",
    },
    {
        title: "Platinum Plan",
        desc: "An exclusive and high-level strategy for seasoned traders aiming to achieve exceptional long-term success.",
        min: "$10,000",
        max: "Unlimited",
        duration: "30 Days",
    },
];

function Packages() {
    const [amounts, setAmounts] = useState<{ [key: number]: string }>({});

    const handleInputChange = (index: number, value: string) => {
        setAmounts((prev) => ({ ...prev, [index]: value }));
    };

    return (
        <div className="w-full p-4 bg-[#0F121B] text-white">
            {/* Header */}
            <h1 className="text-xl font-semibold">Invest in a Plan</h1>
            <p className="text-gray-400 mt-1 text-sm">
                Make your money work for you and earn profits from our auto-trading packages.
            </p>

            {/* Balance Box */}
            <div className="bg-[#16162E] mt-5 p-3 rounded-lg border border-gray-800">
                <p className="text-xs text-gray-400">ACCOUNT BALANCE</p>
                <p className="text-lg font-semibold mt-1">$0</p>
            </div>

            {/* Plans Grid */}
            <h2 className="mt-6 mb-4 text-lg font-semibold">Choose Plan</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="bg-[#16162E] border border-gray-800 p-6 rounded-xl shadow-md flex flex-col"
                    >
                        <h3 className="text-xl font-semibold  text-center  pb-5">{plan.title}</h3>

                        <div className="space-y-2 text-sm bg-linear-to-b from-[#68fcc621] border-t border-[#68FCC6] py-5 rounded-t-lg">
                            <p className="flex flex-col items-center justify-center gap-1">
                                <span className="text-gray-400">Minimum Amount:</span>{" "}
                                <span className="font-medium">{plan.min}</span>
                            </p>
                            <p className="flex flex-col items-center justify-center gap-1 mt-5">
                                <span className="text-gray-400">Maximum Amount:</span>{" "}
                                <span className="font-medium">{plan.max}</span>
                            </p>
                            <p className="flex flex-col items-center justify-center gap-1 mt-5">
                                <span className="text-gray-400">Duration:</span>{" "}
                                <span className="font-medium">{plan.duration}</span>
                            </p>
                        </div>

                        {/* Amount Input */}
                        <div className="mt-6">
                            <p className="text-sm text-gray-300 mb-1 text-center">Amount to invest</p>
                            <input
                                type="number"
                                placeholder="$0"
                                value={amounts[index] || ""}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                className="w-full bg-transparent border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-indigo-500"
                            />
                        </div>

                        {/* Button */}
                        <button className="mt-6 w-full py-2 bg-[#68FCC6] text-black rounded-lg font-semibold hover:bg-[#68FCC6]/50 transition">
                            Invest
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Packages;
