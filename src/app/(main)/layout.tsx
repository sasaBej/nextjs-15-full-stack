import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";
import SessionProvider from "./SessionProvider";
import Navbar from "./Navbar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sessionData = await validateRequest();

  console.log(sessionData, "salut");
  if (!sessionData?.user) {
    redirect("/login");
  }
  return (
    <SessionProvider value={sessionData}>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="mx-auto max-w-7xl bg-black p-5">{children}</div>
      </div>
    </SessionProvider>
  );
}
