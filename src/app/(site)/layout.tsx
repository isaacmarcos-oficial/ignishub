import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { toast } from "sonner";

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
      <SidebarInset>
        <div className="">
          <Navbar />
          {children}
          <Footer />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}