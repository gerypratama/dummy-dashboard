import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSidebar } from "@/components/ui/sidebar";
import { useNavigate, useRouter } from "@tanstack/react-router";
import Cookies from "js-cookie";
import { toast } from "sonner";
import LogoutDialog from "./LogoutDialog";

export default function Header() {
  const router = useRouter();
  const navigate = useNavigate();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  const handleLogout = () => {
    Cookies.remove("accessToken");
    router.invalidate();
    toast.success("Logout success");
    navigate({ to: "/" });
  };

  return (
    <header
      className={`flex bg-gray-700 p-4 ${isCollapsed ? "justify-between" : "justify-end"}`}
    >
      {isCollapsed && (
        <p className="text-gray-200 text-xl">
          <span className="font-semibold">Dummy</span>
          <span className="font-light">Dash</span>
        </p>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-gray-800 border-gray-600 text-gray-300 shadow"
        >
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-600" />
          <DropdownMenuItem asChild>
            <LogoutDialog handleLogout={handleLogout} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
