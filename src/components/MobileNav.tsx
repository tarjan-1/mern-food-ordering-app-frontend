import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CircleUserRound, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetHeader>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-orange-500" />
              {user?.email}
            </span>
          ) : (
            <SheetTitle>Welcome to MernEats.com</SheetTitle>
          )}
          <Separator />
          <SheetDescription className="flex flex-col gap-4">
            {isAuthenticated ? (
              <MobileNavLinks />
            ) : (
              <Button
                className="flex-1 font-bold bg-orange-500"
                onClick={async () => await loginWithRedirect()}
              >
                Log In
              </Button>
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
