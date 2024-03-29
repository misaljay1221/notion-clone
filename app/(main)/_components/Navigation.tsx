"use client";

import { ChevronsLeft } from "lucide-react";
import React from "react";

const Navigation = () => {
  return (
    <>
      <aside className="group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[99999]">
        <div
          role="button"
          className="h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition "
        >
          <ChevronsLeft className="h-6 w-6" />
        </div>
        <div>
          <p>action items</p>
        </div>
        <div className="mt-4">
          <p>documents</p>
        </div>
        <div className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize h-full w-1 bg-primary/10 absolute top-0 right-0" />
      </aside>
    </>
  );
};

export default Navigation;
