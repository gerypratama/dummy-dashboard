import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate, useRouter } from "@tanstack/react-router";
import { toast } from "sonner";
import LogoutDialog from "./LogoutDialog";

export default function Header() {
  const router = useRouter();
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("isAuth");
    router.invalidate();
    toast.success("Logout success");
    navigate({ to: "/" });
  };

  return (
    <header className="flex justify-end bg-gray-700 p-4">
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
