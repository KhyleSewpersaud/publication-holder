import { useRouter } from "next/navigation";
import { auth } from "./firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

export function IsAuth() {
  const router = useRouter();
  
  const handleNavigation = () => {
    try {
      onAuthStateChanged(auth, (user) => {
        if (user && user.emailVerified) {
          router.push("/dashboard");
        } else {
          router.push("/login");
        }
      });
    } catch (error) {
      router.push("/login")
    }
  };

  return { handleNavigation };
}
