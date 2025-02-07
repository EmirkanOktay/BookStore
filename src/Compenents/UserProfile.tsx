import { useEffect, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { getAuth, signOut } from "firebase/auth";
import { db } from "../Firebase/FirebaseInital";
import { doc, getDoc } from "firebase/firestore";
import { userMemberStatus } from "../Redux/UserStatusSlicer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const UserProfile = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const navigate = useNavigate();
    const { setMemberStatus } = userMemberStatus();

    const [userData, setUserData] = useState<{ name: string; lastName: string; email: string }>({
        name: "",
        lastName: "",
        email: "",
    });

    useEffect(() => {
        const fetchUserData = async () => {
            if (user) {
                const userDocRef = doc(db, "users", user.uid);
                const userDocSnap = await getDoc(userDocRef);

                if (userDocSnap.exists()) {
                    setUserData(userDocSnap.data() as { name: string; lastName: string; email: string });
                }
            }
        };

        fetchUserData();
    }, [user]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.success("You Have Logout");
            setMemberStatus(false);
            setTimeout(() => {
                navigate("/");
            }, 3000);
        } catch (error) {
            toast.error("Something went wrong");
        }
    };


    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 3,
                boxShadow: 2,
                borderRadius: 2,
                bgcolor: "background.paper",
            }}
        >
            <AccountCircleIcon sx={{ fontSize: 80, color: "primary.main" }} />
            <Typography variant="h6" sx={{ mt: 1 }}>
                {userData.name + " " + userData.lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {userData.email}
            </Typography>

            <Button
                variant="contained"
                fullWidth
                startIcon={<MenuIcon />}
                sx={{ mt: 2, textTransform: "none" }}
                onClick={() => navigate("/myAccountInfo")}
            >
                My Account
            </Button>
            <Button
                variant="outlined"
                fullWidth
                startIcon={<PowerSettingsNewIcon />}
                onClick={handleLogout}
                sx={{ mt: 2, textTransform: "none", color: "error.main", borderColor: "error.main" }}
            >
                Log Out
            </Button>
        </Box>
    );
};

export default UserProfile;
