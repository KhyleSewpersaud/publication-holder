import { auth } from "@/lib/firebase/firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/navigation";

export async function handleLoginSubmit(
  email: string,
  password: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  e: React.MouseEvent<HTMLElement>
) {
  e.preventDefault;
  await signInWithEmailAndPassword(auth, email, password)
    .then(async (userCred) => {
      const user = userCred.user;
      setEmail("");
      setPassword("");
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

export async function handleSignupSubmit(
  email: string,
  password: string,
  confirmPassword: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>,
  e: React.MouseEvent<HTMLElement>
) {
  e.preventDefault;
  if (password === confirmPassword) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCred) => {
        const user = userCred.user;
        await sendEmailVerification(user);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  } else {
    console.log("passwords do not match");
  }
}

export async function googleLogin(e: React.MouseEvent<HTMLElement>) {
  e.preventDefault;
  const provider = await new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
}

export async function resetPassword(
  email: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  e: React.MouseEvent<HTMLElement>
) {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      setEmail("");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

export function HandleSignout() {
  const router = useRouter();

  const signoutPress = async () => {
    await signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };
  return { signoutPress };
}
