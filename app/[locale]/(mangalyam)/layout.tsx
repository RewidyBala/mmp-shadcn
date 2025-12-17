// import { auth, signOut } from "@/lib/auth";
// import { redirect } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "@/components/ui/theme-toggle";
// import { LanguageSwitcher } from "@/components/ui/language-switcher";

// export default async function MangalyamPage() {
//   const session = await auth();

//   if (!session) {
//     redirect("/login");
//   }

//   return (
//     <div className="min-h-screen p-8">
//       <div className="fixed top-4 right-4 z-50 flex gap-2">
//         <LanguageSwitcher />
//         <ThemeToggle />
//       </div>
//       <main className="container mx-auto">
//         <h1 className="text-4xl font-bold mb-4">Welcome to Mangalyam</h1>
//         <p className="text-muted-foreground mb-6">
//           You are authenticated! User:{" "}
//           {session.user?.name || session.user?.email || "Guest"}
//         </p>
//         <form
//           action={async () => {
//             "use server";
//             await signOut({ redirectTo: "/login" });
//           }}
//         >
//           <Button type="submit" variant="destructive">
//             Sign Out
//           </Button>
//         </form>
//       </main>
//     </div>
//   );
// }

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { Header } from "@/components/ui/header";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <div className="mx-auto p-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
