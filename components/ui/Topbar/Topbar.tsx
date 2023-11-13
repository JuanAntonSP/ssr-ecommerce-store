import { Button } from "@/components/ui/button";
import React from "react";

export function Topbar() {
  return (
    <div className="flex">
      <Button>X</Button>
      <h1 className="flex-grow text-center">My Store</h1>
    </div>
  );
}
