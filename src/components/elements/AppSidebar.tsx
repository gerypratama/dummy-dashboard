import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  useSidebar,
} from "@/components/ui/sidebar";
import { sidebarNavItems } from "@/constants/sidebarItem";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import SidebarNavItem from "./SidebarNavItem";

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
              {sidebarNavItems.map((item) => (
                <SidebarNavItem
                  key={item.label}
                  icon={<item.icon />}
                  path={item.path}
                  label={item.label}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
