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

const firebaseAuthCodes: Record<FirebaseAuthErrorCode, string> = {
  "auth/email-already-in-use": "Email Taken",
  "auth/invalid-email": "Invalid Email",
  "auth/operation-not-allowed": "Operation not allowed",
  "auth/weak-password": "Weak Password",
  "auth/user-disabled": "User Disabled",
  "auth/user-not-found": "User Not Found",
  "auth/wrong-password": "Wrong Password",
  "auth/invalid-credential": "Invalid Credentials",
};

export function HandleLoginSubmit() {
  const router = useRouter();

  const handleLoginSubmit = async (
    email: string,
    password: string,
    setEmail: React.Dispatch<React.SetStateAction<string>>,
    setPassword: React.Dispatch<React.SetStateAction<string>>,
    e: React.MouseEvent<HTMLElement>,
    setLoginError: React.Dispatch<React.SetStateAction<string>>
  ) => {
    e.preventDefault;
    await signInWithEmailAndPassword(auth, email, password)
      .then(async (userCred) => {
        const user = userCred.user;
        if (userCred.user.emailVerified) {
          setEmail("");
          setPassword("");
          router.push("/dashboard");
        }
        setLoginError("Email not verified");
        console.log(user);
      })
      .catch((error) => {
        const errorCode: FirebaseAuthErrorCode =
          error.code as FirebaseAuthErrorCode;
        console.log(errorCode);
        setLoginError(
          firebaseAuthCodes[errorCode] || "An unknown error occurred"
        );
      });
  };
  return { handleLoginSubmit };
}

export async function handleSignupSubmit(
  email: string,
  password: string,
  confirmPassword: string,
  setEmail: React.Dispatch<React.SetStateAction<string>>,
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>,
  e: React.MouseEvent<HTMLElement>,
  setErrorCode: React.Dispatch<React.SetStateAction<string>>
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
        setErrorCode("Success! A verifiction link has been sent to you email");
      })
      .catch((error) => {
        const errorCode: FirebaseAuthErrorCode =
          error.code as FirebaseAuthErrorCode;
        setErrorCode(
          firebaseAuthCodes[errorCode] || "An unknown error occurred"
        );
      });
  } else {
    setErrorCode("Password's do not match");
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
