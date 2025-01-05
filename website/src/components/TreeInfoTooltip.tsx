"use client";

interface TreeInfoTooltipProps {
  selectedTree: SelectedTreeInfo | null;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

import { Button } from "@/components/ui/button";
import { SelectedTreeInfo } from "@/types/trees";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TreeInfoTooltip = ({
  selectedTree,
  open,
  setOpen,
}: TreeInfoTooltipProps) => {
  return (
    <div className="absolute top-[80px] left-[10px] z-50 flex flex-row items-center justify-end gap-1">
      {open && selectedTree && (
        <div className="flex flex-col my-auto w-64 sm:w-96 bg-white px-4 rounded shadow-lg">
          <div className="w-full flex justify-end mt-2">
            <Button
              variant="outline"
              size="icon"
              style={{ width: "48px", height: "48px" }}
              className="bg-background/60 hover:bg-accent/75"
              onClick={() => setOpen(!open)}
            >
              <ChevronLeft
                style={{ width: "48px", height: "48px" }}
                strokeWidth={1.5}
              />
            </Button>
          </div>
          <div className="pb-4">
            <h3 className="font-bold text-lg">
              {selectedTree.properties?.fruitType || "Unknown"}
            </h3>
            {/* <p className="text-sm italic">
              {selectedTree.properties?.species || "Unknown"}
            </p> */}
            <p className="text-sm mt-2">
              <strong>Location:</strong>{" "}
              {`${selectedTree.coordinates[1].toFixed(
                6
              )}, ${selectedTree.coordinates[0].toFixed(6)}`}
            </p>
            <p className="text-sm">
              <strong>Fruiting Time: </strong>
              {
                JSON.parse(selectedTree.properties?.fruitingTimes)[0]
                  .description
              }
            </p>
            <p className="text-sm">
              <strong>Property Type: </strong>
              {selectedTree.properties?.propertyType}
            </p>
            <p className="text-sm">
              <strong>Public Picking: </strong>
              {selectedTree.properties?.publicPicking ? "Yes" : "No"}
            </p>
            {selectedTree.properties?.notes && (
              <p className="text-sm mt-2">
                <strong>Notes: </strong>
                {selectedTree.properties?.notes || ""}
              </p>
            )}

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
          style={{ width: "48px", height: "48px" }}
          className="justify-self-end bg-background/60 hover:bg-accent/75"
          onClick={() => setOpen(!open)}
        >
          <ChevronRight
            style={{ width: "48px", height: "48px" }}
            strokeWidth={1.5}
          />
        </Button>
      )}
    </div>
  );
};

export default TreeInfoTooltip;
