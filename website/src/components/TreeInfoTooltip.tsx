"use client";

import { GeoJsonProperties } from "geojson";

interface TreeInfoTooltipProps {
  selectedTree: GeoJsonProperties;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TreeInfoTooltip = ({
  selectedTree,
  open,
  setOpen,
}: TreeInfoTooltipProps) => {
  return (
    <div className="absolute top-[70px] left-1 z-50 flex flex-row items-center justify-end gap-1">
      {open && selectedTree && (
        <div className="flex flex-col h-[calc(100vh_-_80px)] w-96 bg-white px-4 rounded shadow-lg w-64">
          <div className="w-full flex justify-end mt-2">
            <Button
              variant="outline"
              size="icon"
              className=""
              onClick={() => setOpen(!open)}
            >
              <ChevronLeft />
            </Button>
          </div>
          <div className="py-4">
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
            <Button
              className="mt-4 bg-blue-500 text-white px-3 py-1 rounded"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
      {!open && selectedTree && (
        <Button
          variant="outline"
          size="icon"
          className="justify-self-end"
          onClick={() => setOpen(!open)}
        >
          <ChevronRight />
        </Button>
      )}
    </div>
  );
};

export default TreeInfoTooltip;
