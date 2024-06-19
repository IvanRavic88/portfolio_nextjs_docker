import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import * as React from "react";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="text-white" variant="link">
          Menu
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
