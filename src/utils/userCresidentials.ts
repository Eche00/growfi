// src/utils/userCresidentials.ts
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../lib/firebase";

/** TYPES ******************************************************************/

interface UserType {
    uid: string;
    name?: string;
    username?: string;
    email?: string;
    password?: string;
    phone?: string;
    country?: string;
    address?: string;
    dob?: string;
    refferalid?: string;

    // BALANCES
    balance?: number | string;
    totalDeposit?: number | string;
    totalProfit?: number | string;
    totalBonus?: number | string;
    withdrawals?: number | string;

    // COLLECTION-TYPE FIELDS
    Transactions?: any[];
    investments?: any[];
    refferals?: any[];

    createdAt?: string | number;

    previousBalance?: number | string;
    [key: string]: any;
}

interface FormDataType {
    name: string;
    username: string;
    email: string;
    phone: string;
    country: string;
    address: string;
    dob: string;
    refferalid: string;
}

interface UseUserInfoReturn {
    user: UserType | null;
    loading: boolean;
    reloadUser: () => Promise<void>;
    handleLogOutUser: () => Promise<void>;
    isEditing: boolean;
    setIsEditing: (v: boolean) => void;
    updateUserProfile: (updatedData: Partial<UserType>) => Promise<void>;
    formData: FormDataType;
    setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
    difference: number;
    changeText: string;
    handleChange: (field: keyof FormDataType, value: string) => void;
}

/** HOOK ******************************************************************/
export const useUserInfo = (): UseUserInfoReturn => {
    const navigate = useNavigate();

    const [user, setUser] = useState<UserType | null>(null);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);

    // FORM DATA (MATCHES REGISTRATION DATA)
    const [formData, setFormData] = useState<FormDataType>({
        name: "",
        username: "",
        email: "",
        phone: "",
        country: "",
        address: "",
        dob: "",
        refferalid: "",
    });

    /** FETCH USER DATA *****************************************************/
    const fetchUser = async (uid: string) => {
        try {
            const ref = doc(db, "users", uid);
            const snap = await getDoc(ref);

            if (snap.exists()) {
                const data = snap.data() as Record<string, any>;
                const userData: UserType = { uid, ...data };
                setUser(userData);

                // initialize fields into form state
                setFormData({
                    name: userData.name || "",
                    username: userData.username || "",
                    email: userData.email || "",
                    phone: userData.phone || "",
                    country: userData.country || "",
                    address: userData.address || "",
                    dob: userData.dob || "",
                    refferalid: userData.refferalid || "",
                });
            } else {
                setUser(null);
            }
        } catch (err) {
            console.error("fetchUser error:", err);
            toast.error("Failed to load user data");
            setUser(null);
        }
    };

    /** WATCH FOR LOGIN STATE **********************************************/
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (authUser: any) => {
            try {
                if (authUser) {
                    await fetchUser(authUser.uid);
                } else {
                    setUser(null);
                }
            } finally {
                setLoading(false);
            }
        });
        return () => unsubscribe();
    }, []);

    /** RELOAD */
    const reloadUser = async () => {
        const cur = auth.currentUser;
        if (!cur) return;
        await fetchUser(cur.uid);
    };

    /** LOGOUT */
    const handleLogOutUser = async () => {
        try {
            await signOut(auth);
            navigate("/");
            toast.success("Signed out successfully");
        } catch {
            toast.error("Unable to sign out.");
        }
    };

    /** UPDATE USER PROFILE *************************************************/
    const updateUserProfile = async (updatedData: Partial<UserType>) => {
        if (!user) return;
        try {
            const ref = doc(db, "users", user.uid);
            await updateDoc(ref, updatedData);
            await reloadUser();
            toast.success("Profile updated successfully");
        } catch (err) {
            console.error(err);
            toast.error("Profile update failed");
        }
    };

    /** BALANCE DIFFERENCE **************************************************/
    const current = Number(user?.balance ?? 0);
    const previous = Number(user?.previousBalance ?? 0);

    const difference = Number(current - previous);
    const changeText =
        difference > 0
            ? `↑ Up by $${difference.toLocaleString()}`
            : difference < 0
                ? `↓ Down by $${Math.abs(difference).toLocaleString()}`
                : "No change";

    /** HANDLE INPUT CHANGES ***********************************************/
    const handleChange = (field: keyof FormDataType, value: string) =>
        setFormData((prev) => ({ ...prev, [field]: value }));

    return {
        user,
        loading,
        reloadUser,
        handleLogOutUser,
        isEditing,
        setIsEditing,
        updateUserProfile,
        formData,
        setFormData,
        difference,
        changeText,
        handleChange,
    };
};

export default useUserInfo;
