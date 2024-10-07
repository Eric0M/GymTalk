"use client";
import { Button } from "@/components/ui/button";
import { initFirebase } from "@/firebase";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export default function Component() {
  const router = useRouter();
  const signIn = async () => {
    const app = initFirebase();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    if (user) {
      router.push("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="p-8 rounded-lg shadow-lg bg-gray-900 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-400">
          Welcome Back
        </h1>
        <p className="text-indigo-300 text-center mb-8">
          Sign in to access your account
        </p>
        <Button
          onClick={signIn}
          className="w-full bg-indigo-600 hover:bg-indigo-400 text-white font-bold py-3 rounded-lg transition duration-300 flex items-center justify-center"
        >
          <FcGoogle className="mr-2 text-2xl" />
          Sign in with Google
        </Button>
        <p className="mt-6 text-sm text-center text-gray-400">
          By signing in, you agree to our
          <a href="#" className="text-indigo-400 hover:underline">
            {" "}
            Terms of Service
          </a>{" "}
          and
          <a href="#" className="text-indigo-400 hover:underline">
            {" "}
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}
