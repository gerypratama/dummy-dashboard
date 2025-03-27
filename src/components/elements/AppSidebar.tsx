import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Link } from "@tanstack/react-router";
import { ChartPie, ChevronsLeft, ChevronsRight } from "lucide-react";

export default function AppSidebar() {
  const { state, toggleSidebar } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader
        className={`flex flex-row items-center justify-between pt-4 ${state === "expanded" ? "px-4" : "px-1.5"}`}
      >
        {state === "expanded" && (
          <p>
            <span className="text-xl font-semibold">Dummy</span>
            <span className="text-xl font-light">Dash</span>
          </p>
        )}
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          {state === "collapsed" ? <ChevronsRight /> : <ChevronsLeft />}
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link
                    to="/dashboard"
                    activeProps={{ className: "font-bold" }}
                  >
                    <ChartPie />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
