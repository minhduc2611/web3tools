"use client";

import superbaseInstance from "@/services/superbaseInstance";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  // const authen = async () => {
  //   const { data, error } = await superbaseInstance
  //     .getInstance()
  //     .auth.signInWithOAuth({
  //       provider: "google",
  //       options: {
  //         queryParams: {
  //           access_type: "offline",
  //           prompt: "consent",
  //         },
  //       },
  //     });

  //   console.log("data", data.url);
  //   if (data.url) {
  //     redirect(data.url);
  //   }
  // };
  // useEffect(() => {
  //   authen();
  // }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 md:p-24">
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        <Link href="/collections">Go to Collections</Link>
      </button>
    </main>
  );
}
