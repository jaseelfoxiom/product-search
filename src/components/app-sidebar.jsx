import React from "react";
import {
  Home,
  GraduationCap,
  ClipboardList,
  List,
  Book,
  Settings,
  BellRing,
  School,
  HelpCircle,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { PATHS } from "@/constants/paths";

export function AppSidebar() {
  const navigate = useNavigate();

  const sidebarItems = [
    {
      category: "Main",
      label: "Dashboard",
      icon: <Home className="h-4 w-4" />,
      path: PATHS.BASE_PATH,
    },
    {
      label: "Students",
      icon: <GraduationCap className="h-4 w-4" />,
      path: PATHS.STUDENTS,
    },
    {
      category: "Certification Courses",
      label: "Courses",
      icon: <ClipboardList className="h-4 w-4" />,
      path: PATHS.CERTIFICATION_COURSE,
    },
 
  ];

  return (
    <Sidebar>
      <SidebarContent className="flex flex-col p-2 md:p-4">
        <nav className="text-sm font-medium">
          {sidebarItems.map((item, index) => (
            <React.Fragment key={index}>
              {item.category && (
                <div className="text-[11px] text-gray-400 font-semibold mt-4 mb-3 md:mb-2 uppercase">
                  {item.category}
                </div>
              )}
              <NavLink
                to={item.path}
                end
                className={({ isActive, isPending }) =>
                  [
                    "flex items-center gap-3 rounded-lg px-3 py-3 md:py-2 transition-all my-1 text-[0.81rem]",
                    isPending
                      ? "text-muted-foreground"
                      : "hover:text-primary dark:hover:text-white",
                    isActive
                      ? "bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/50 backdrop-blur-md bg-opacity-30"
                      : "text-muted-foreground hover:text-primary dark:hover:text-white",
                  ].join(" ")
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            </React.Fragment>
          ))}
        </nav>

        {/* <div className="mt-auto">
          <Card>
            <Button
              size="sm"
              className="w-full uppercase"
              onClick={() => navigate(PATHS.Enrollment)}
            >
              📚<span className="mx-2">Enroll Student</span>
            </Button>
          </Card>
        </div> */}
      </SidebarContent>
    </Sidebar>
  );
}
