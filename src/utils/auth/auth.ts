// regLogic to handle the registration process
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../lib/firebase";

export const handleRegistration = async (formData: any) => {
    const {
        name,
        username,
        email,
        password,
        balance,
        totalDeposit,
        totalProfit,
        totalBonus,
        withdrawals,
        phone,
        country,
        refferalid,
        Transactions,
        investments,
        refferals,
        address,
        dob,
        createdAt
    } = formData;


    try {
        // create User  in firebase
        const userCresidentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const user = userCresidentials.user;

        // Store additional user details in Firestore
        await setDoc(doc(db, "users", user.uid), {
            name,
            username,
            email,
            password,
            balance,
            totalDeposit,
            totalProfit,
            totalBonus,
            withdrawals,
            phone,
            country,
            refferalid,
            Transactions,
            investments,
            refferals,
            address,
            dob,
            createdAt
        });

        console.log("User registered successfully:");
    } catch (error) {
        console.error("Registeration  failed:", error);
        throw new Error("Registeration  Failed. Please try again !!");
    }
};



