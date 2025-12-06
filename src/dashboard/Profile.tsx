import React from "react";
import useUserInfo from "../utils/userCresidentials";

export default function Profile() {
    const { user, formData, handleChange, isEditing, setIsEditing, updateUserProfile, loading } = useUserInfo();

    if (loading || !user) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center text-white bg-[#0f1629]">
                Loading profile...
            </div>
        );
    }

    const handleSave = async () => {
        await updateUserProfile(formData);
        setIsEditing(false);
    };

    return (
        <div className="min-h-screen bg-[#0F121B] w-full text-white p-4">
            <h1 className="text-xl font-semibold mb-4">Profile</h1>

            <div className="bg-[#16162E] p-4 rounded-2xl shadow-md space-y-6">

                {/* Header */}
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Personal Information</h2>

                    {!isEditing ? (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="px-3 py-1.5 bg-[#68FCC6] hover:bg-[#68FCC6]/50 text-black rounded-lg text-sm cursor-pointer font-semibold"
                        >
                            Update profile
                        </button>
                    ) : (
                        <div className="flex gap-2">
                            <button
                                onClick={handleSave}
                                className="px-3 py-1.5 text-black bg-[#68FCC6] hover:bg-[#68FCC6]/90 rounded-lg text-sm cursor-pointer"
                            >
                                Update
                            </button>

                            <button
                                onClick={() => setIsEditing(false)}
                                className="px-3 py-1.5 bg-red-500 hover:bg-red-600 rounded-lg text-sm cursor-pointer"
                            >
                                Cancel
                            </button>
                        </div>
                    )}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Name */}
                    <div>
                        <label className="text-gray-300 text-xs">Full Name</label>
                        <input
                            disabled={!isEditing}
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            className="w-full bg-[#1F2433] mt-1 p-2 rounded-lg text-sm outline-none disabled:opacity-50"
                            type="text"
                            readOnly
                        />
                    </div>

                    {/* Username */}
                    <div>
                        <label className="text-gray-300 text-xs">Username</label>
                        <input
                            disabled={!isEditing}
                            value={formData.username}
                            onChange={(e) => handleChange("username", e.target.value)}
                            className="w-full bg-[#1F2433] mt-1 p-2 rounded-lg text-sm outline-none disabled:opacity-50"
                            type="text"
                            readOnly
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="text-gray-300 text-xs">Email</label>
                        <input
                            disabled
                            value={formData.email}
                            className="w-full bg-[#1F2433] mt-1 p-2 rounded-lg text-sm outline-none opacity-50"
                            type="email"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="text-gray-300 text-xs">Phone Number</label>
                        <input
                            disabled={!isEditing}
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            className="w-full bg-[#1F2433] mt-1 p-2 rounded-lg text-sm outline-none disabled:opacity-50"
                            type="text"
                        />
                    </div>

                    {/* DOB */}
                    <div>
                        <label className="text-gray-300 text-xs">Date of Birth</label>
                        <input
                            disabled={!isEditing}
                            value={formData.dob}
                            onChange={(e) => handleChange("dob", e.target.value)}
                            className="w-full bg-[#1F2433] mt-1 p-2 rounded-lg text-sm outline-none disabled:opacity-50"
                            type="date"
                        />
                    </div>

                    {/* Country */}
                    <div>
                        <label className="text-gray-300 text-xs">Country</label>
                        <input
                            disabled={!isEditing}
                            value={formData.country}
                            onChange={(e) => handleChange("country", e.target.value)}
                            className="w-full bg-[#1F2433] mt-1 p-2 rounded-lg text-sm outline-none disabled:opacity-50"
                            type="text"
                        />
                    </div>

                    {/* Address */}
                    <div className="md:col-span-2">
                        <label className="text-gray-300 text-xs">Address</label>
                        <textarea
                            disabled={!isEditing}
                            value={formData.address}
                            onChange={(e) => handleChange("address", e.target.value)}
                            className="w-full bg-[#1F2433] mt-1 p-2 rounded-lg text-sm outline-none disabled:opacity-50 h-20"
                        />
                    </div>

                    {/* Referral ID */}
                    <div>
                        <label className="text-gray-300 text-xs">Referral ID</label>
                        <input
                            disabled={!isEditing}
                            value={formData.refferalid}
                            onChange={(e) => handleChange("refferalid", e.target.value)}
                            className="w-full bg-[#1F2433] mt-1 p-2 rounded-lg text-sm outline-none disabled:opacity-50"
                            type="text"
                        />
                    </div>
                </div>

                {/* Account Summary */}
                <div className="bg-[#1F2433] p-4 rounded-xl space-y-2">
                    <h3 className="text-base font-semibold">Account Summary</h3>

                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <p>Balance: <span className="text-green-400">${user.balance || 0}</span></p>
                        <p>Total Deposit: ${user.totalDeposit || 0}</p>
                        <p>Total Profit: ${user.totalProfit || 0}</p>
                        <p>Total Bonus: ${user.totalBonus || 0}</p>
                        <p>Withdrawals: ${user.withdrawals || 0}</p>
                    </div>
                </div>

            </div>
        </div>

    );
}
