import {
  SidebarMenuButton,
  SidebarMenuItem
} from "@/components/ui/sidebar";
import { Link } from "@tanstack/react-router";

export default function SidebarNavItem({
  path,
  icon,
  label,
}: {
  path: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <SidebarMenuItem>
        <SidebarMenuButton asChild>
          <Link to={path} activeProps={{ className: "font-bold" }}>
            {icon}
            <span>{label}</span>
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
  );
}
