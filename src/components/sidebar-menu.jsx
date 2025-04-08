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
import { PATHS } from "@/constants/paths";

function SidebarMenu({ onMenuSelect }) {
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
    {
      label: "Category",
      icon: <List className="h-4 w-4" />,
      path: PATHS.CATEGORY,
    },
    {
      category: "University Courses",
      label: "Courses",
      icon: <ClipboardList className="h-4 w-4" />,
      path: PATHS.UNIVERSITY_COURSE,
    },
    {
      label: "Course Type",
      icon: <Book className="h-4 w-4" />,
      path: PATHS.COURSE_TYPE,
    },
    {
      label: "University",
      icon: <School className="h-4 w-4" />,
      path: PATHS.UNIVERSITIES,
    },
    {
      category: "Engage",
      label: "Notifications",
      icon: <BellRing className="h-4 w-4" />,
      path: PATHS.NOTIFICATIONS,
    },
    {
      label: "FAQ",
      icon: <HelpCircle className="h-4 w-4" />,
      path: PATHS.FAQ,
    },
    {
      label: "Settings",
      icon: <Settings className="h-4 w-4" />,
      path: PATHS.SETTINGS,
    },
  ];

  return (
    <>
      <nav className="px-2 text-sm font-medium lg:px-4">
        {sidebarItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.category && (
              <div className="text-[11px] text-gray-400 font-semibold mt-4 mb-3 md:mb-2 uppercase">
                {item.category}
              </div>
            )}
            <NavLink
              onClick={onMenuSelect}
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

      <div className="mt-auto p-2 md:p-4">
        <Card x-chunk="dashboard-02-chunk-0">
          <Button
            size="sm"
            className="w-full uppercase"
            onClick={() => navigate(PATHS.Enrollment)}
          >
            📚<span className="mx-2">Enroll Student</span>
          </Button>
        </Card>
      </div>
    </>
  );
}

export default SidebarMenu;
