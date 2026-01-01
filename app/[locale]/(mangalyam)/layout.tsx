import { Header } from "@/components/ui/header";
import { AxiosAuthProvider } from "@/providers/axios-auth-provider";
import { SWRProvider } from "@/providers/swr-provider";
import UserProfileProvider from "@/providers/user-profile-provider";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AxiosAuthProvider>
      <SWRProvider>
        <UserProfileProvider>
          <div className="flex-1 flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
              <div className="mx-auto p-6">{children}</div>
            </main>
          </div>
        </UserProfileProvider>
      </SWRProvider>
    </AxiosAuthProvider>
  );
}
