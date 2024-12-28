"use client";

interface ToolTipProps {
  selectedTree: any;
}

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Tooltip = ({ selectedTree }: ToolTipProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-[70px] left-1 z-50 flex flex-row items-center justify-end gap-1">
      {open && selectedTree && (
        <div className="flex flex-col h-[calc(100vh_-_80px)] w-96 bg-white p-4 rounded shadow-lg w-64">
          <h3 className="font-bold text-lg">{selectedTree.common_name}</h3>
          <p className="text-sm italic">{selectedTree.species}</p>
          <p className="text-sm mt-2">
            <strong>Location:</strong> {selectedTree.address || "Unknown"}
          </p>
          <p className="text-sm">
            <strong>Fruit:</strong> {selectedTree.fruit_type}
          </p>
          <p className="text-sm">
            <strong>Yield:</strong> {selectedTree.yield_estimate}
          </p>
          <p className="text-sm">
            <strong>Health:</strong> {selectedTree.health_status}
          </p>
          <p className="text-sm">
            <strong>Last Maintenance:</strong>{" "}
            {selectedTree.last_maintenance || "N/A"}
          </p>
          <p className="text-sm mt-2">{selectedTree.notes || ""}</p>
          <button
            className="mt-4 bg-blue-500 text-white px-3 py-1 rounded"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
      )}
      <Button
        variant="outline"
        size="icon"
        className="self-start"
        onClick={() => setOpen(!open)}
      >
        {open ? <ChevronLeft /> : <ChevronRight />}
      </Button>
    </div>
  );
};

export default Tooltip;
