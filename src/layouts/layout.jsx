import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header";
import SidebarMenu from "@/components/sidebar-menu";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full ">
        <AppSidebar />
        {/* <aside className="w-64 bg-background border-r">
        <SidebarMenu />
      </aside> */}

        <div className="flex flex-col flex-1">
          {/* Header */}

          <Header />

          {/* Main content */}
          <main className="flex-1 overflow-auto p-4">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
