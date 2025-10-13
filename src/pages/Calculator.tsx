import { useState } from "react";

export default function RiskCalculator() {
  const pairs = [
    "AUDUSD",
    "EURUSD",
    "GBPUSD",
    "NZDUSD",
    "USDCAD",
    "USDCHF",
    "USDJPY",
    "GBPJPY",
    "XAUUSD",
    "BTCUSD",
  ];

  const [selectedPair, setSelectedPair] = useState("");
  const [entry, setEntry] = useState<number | "">("");
  const [stopLoss, setStopLoss] = useState<number | "">("");
  const [takeProfit, setTakeProfit] = useState<number | "">("");
  const [equity, setEquity] = useState<number | "">("");
  const [lotSize, setLotSize] = useState<number | "">("");
  const [results, setResults] = useState<any>(null);

  const handleCalculate = () => {
    if (!selectedPair || !entry || !stopLoss || !takeProfit || !equity || !lotSize) {
      alert("Please fill in all fields.");
      return;
    }

    const isJPY = selectedPair.includes("JPY");
    const isGold = selectedPair === "XAUUSD";
    const isBTC = selectedPair === "BTCUSD";

    let pipValuePerStandardLot = 10; // Default for USD quote pairs (e.g. EURUSD)

    if (isJPY) pipValuePerStandardLot = 9.13; // Roughly accurate
    if (isGold) pipValuePerStandardLot = 1.0; // XAUUSD = $1 per pip per 1 lot
    if (isBTC) pipValuePerStandardLot = 1; // Simplified (crypto pairs vary)

    const pipDiff = Math.abs(entry - stopLoss);
    const tpDiff = Math.abs(takeProfit - entry);

    // Determine pip size
    const pipSize = isJPY ? 0.01 : isGold ? 0.1 : 0.0001;

    const pipCount = pipDiff / pipSize;
    const tpPips = tpDiff / pipSize;

    const pipValue = pipValuePerStandardLot * (Number(lotSize) / 1);
    const riskAmount = pipCount * pipValue;
    const rewardAmount = tpPips * pipValue;
    const riskPercent = (riskAmount / Number(equity)) * 100;
    const rrRatio = rewardAmount / riskAmount;

    setResults({
      pipCount: pipCount.toFixed(1),
      tpPips: tpPips.toFixed(1),
      pipValue: pipValue.toFixed(2),
      riskAmount: riskAmount.toFixed(2),
      rewardAmount: rewardAmount.toFixed(2),
      riskPercent: riskPercent.toFixed(2),
      rrRatio: rrRatio.toFixed(2),
    });
  };

  const handleClear = () => {
    setSelectedPair("");
    setEntry("");
    setStopLoss("");
    setTakeProfit("");
    setEquity("");
    setLotSize("");
    setResults(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-32 min-h-[100vh] flex lg:flex-row flex-col items-center justify-center gap-2">
      <div className="bg-white rounded-3xl shadow-xl p-8 flex-1 border border-gray-100">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Forex Risk Calculator
          </h2>
          <p className="text-gray-500 mt-2">
            Calculate your pip value, risk %, and reward-to-risk ratio.
          </p>
        </div>

        {/* Select Currency Pair */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Select a Currency Pair
          </label>
          <select
            value={selectedPair}
            onChange={(e) => setSelectedPair(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-200 outline-none"
          >
            <option value="">-- Select Pair --</option>
            {pairs.map((pair, idx) => (
              <option key={idx} value={pair}>
                {pair}
              </option>
            ))}
          </select>
        </div>

        {/* Inputs */}
        <div className="space-y-5">
          <Input label="Entry Price" value={entry} setValue={setEntry} />
          <Input label="Exit Price (Stop Loss)" value={stopLoss} setValue={setStopLoss} />
          <Input label="Target Price (Take Profit)" value={takeProfit} setValue={setTakeProfit} />
          <Input label="Equity Balance (USD)" value={equity} setValue={setEquity} />
          <Input label="Lot Size" value={lotSize} setValue={setLotSize} />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-8">

          <button
            onClick={handleClear}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition"
          >
            Clear
          </button>
          <button
            onClick={handleCalculate}
            className="flex-1 bg-green-700 hover:bg-green-600 text-white py-3 rounded-lg font-medium transition"
          >
            Calculate
          </button>
        </div>

       
      </div>
       {/* Results */}
       {results && (
          <div className="flex-1 mt-10 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-lg p-8 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
               Results Summary
            </h3>
            <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-700 rounded-full">
              Live Analysis
            </span>
          </div>
        
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-800">
            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-500">Pip Count</p>
              <p className="text-[16px] font-semibold mt-1 text-blue-600">{results.pipCount}</p>
            </div>
        
            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-500">Target Pips</p>
              <p className="text-[16px] font-semibold mt-1 text-green-600">{results.tpPips}</p>
            </div>
        
            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-500">Pip Value</p>
              <p className="text-[16px] font-semibold mt-1 text-indigo-600">${results.pipValue}</p>
            </div>
        
            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-500">Risk Amount</p>
              <p className="text-[16px] font-semibold mt-1 text-red-600">${results.riskAmount}</p>
            </div>
        
            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-500">Reward Amount</p>
              <p className="text-[16px] font-semibold mt-1 text-emerald-600">${results.rewardAmount}</p>
            </div>
        
            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-500">Risk %</p>
              <p className="text-[16px] font-semibold mt-1 text-orange-600">{results.riskPercent}%</p>
            </div>
        
            <div className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow col-span-2 sm:col-span-3">
              <p className="text-sm text-gray-500">R:R Ratio</p>
              <p className="text-2xl font-bold mt-1 text-purple-600">
                {results.rrRatio} : 1
              </p>
            </div>
          </div>
        </div>
        
        )}
    </div>
  );
}

// Reusable input component
function Input({
  label,
  value,
  setValue,
}: {
  label: string;
  value: number | "";
  setValue: (v: number | "") => void;
}) {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value ? Number(e.target.value) : "")}
        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-200 outline-none"
      />
    </div>
  );
}
