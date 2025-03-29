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
import { useAtomValue } from "jotai";
import { userState } from "@/states/auth";

export default function Header() {
  const user = useAtomValue(userState);
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

  console.log(user);

  return (
    <header
      className={`flex bg-gray-700 py-4 px-6 ${isCollapsed ? "justify-between" : "justify-end"}`}
    >
      {isCollapsed && (
        <p className="text-gray-200 text-xl">
          <span className="font-semibold">Dummy</span>
          <span className="font-light">Dash</span>
        </p>
      )}
      <div className="flex items-center gap-2">
        <p className="text-gray-200">{`${user?.firstName} ${user?.lastName}`}</p>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src={user?.image} />
              <AvatarFallback>
                {user?.firstName.charAt(0)! + user?.lastName.charAt(0)!}
              </AvatarFallback>
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
      </div>
    </header>
  );
}
