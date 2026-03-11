import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { toast } from "sonner";
import { AdminSidebar } from "./_components/adminSidebar";

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = true

  if (!session) {
    toast.error("Você precisa realizar o login")

    return (
      <div className="container">
        <h1 className="text-xl font-bold mb-6 animate-pulse">Você precisa realizer o login</h1>
      </div>
    );
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center gap-4 border-b border-border/50 px-4 md:px-6 bg-card/30 backdrop-blur-sm sticky top-0 z-10">
            <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
            <div className="flex-1" />
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-xs font-medium text-primary">IM</span>
              </div>
            </div>
          </header>

          <main className="flex-1 p-4 md:p-6 relative overflow-auto">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "var(--gradient-glow)" }}
            />
            <div className="flex flex-col items-center justify-center mx-auto px-6 gap-4 w-full max-w-6xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}