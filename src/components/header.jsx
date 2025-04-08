import React, { useState } from "react";
import { CircleUser, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/mode-toggle";
import SidebarMenu from "./sidebar-menu"; // You should have this sidebar menu as a separate mobile menu
import { Link } from "react-router-dom";
import { PATHS } from "@/constants/paths";
import { useAuth } from "@/providers/AuthProvider";
import { SidebarTrigger } from "./ui/sidebar";

function Header() {
  const { logout } = useAuth();
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  const handleOpenChange = (open) => {
    setisSidebarOpen(open);
  };

  const menuClick = () => {
    setisSidebarOpen(false);
  };

  return (
    <>
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      {/* Mobile Menu Sheet */} < SidebarTrigger/>
      {/* <Sheet open={isSidebarOpen} onOpenChange={handleOpenChange}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col px-1 overflow-auto">
          <SidebarMenu onMenuSelect={menuClick} />
        </SheetContent>
      </Sheet> */}

      {/* Optional: Search */}
      <div className="w-full flex-1">
        {/* <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search menu..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3 mt-0"
            />
          </div>
        </form> */}
      </div>

      <ModeToggle />

      {/* Profile Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-5 w-5" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="md:min-w-60">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link to={PATHS.NOTIFICATIONS}>
            <DropdownMenuItem>Notification</DropdownMenuItem>
          </Link>
          <Link to={PATHS.SETTINGS}>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <Link to={PATHS.LOGIN}>
            <DropdownMenuItem
              className="text-destructive dark:text-red-400"
              onClick={logout}
            >
              Logout
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
      </header>
    </>
    
  );
}

export default Header;
