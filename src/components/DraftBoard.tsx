import { useState } from "react";
import { wrestlers } from "../data/wrestlers";
import { Wrestler } from "../types/wrestler";
import WrestlerCard from "./WrestlerCard";
import AddWrestlerForm from "./AddWrestlerForm";
import { toast } from "@/components/ui/use-toast";

const DraftBoard = () => {
  const [availableWrestlers, setAvailableWrestlers] = useState<Wrestler[]>(wrestlers);
  const [draftedWrestlers, setDraftedWrestlers] = useState<Wrestler[]>([]);
  const [draggingWrestler, setDraggingWrestler] = useState<Wrestler | null>(null);

  const handleDragStart = (wrestler: Wrestler) => {
    setDraggingWrestler(wrestler);
  };

  const handleDragEnd = () => {
    setDraggingWrestler(null);
  };

  const handleDrop = (wrestler: Wrestler) => {
    if (!draggingWrestler) return;

    // Add TNA promotion when drafted
    const wrestlerWithTNA = {
      ...wrestler,
      promotion: "TNA"
    };

    setAvailableWrestlers(prev => prev.filter(w => w.id !== wrestler.id));
    setDraftedWrestlers(prev => [...prev, wrestlerWithTNA]);
    
    toast({
      title: "Wrestler Drafted!",
      description: `${wrestler.name} has been added to your TNA roster.`,
    });
  };

  const handleAddCustomWrestler = (newWrestler: Wrestler) => {
    setAvailableWrestlers(prev => [...prev, newWrestler]);
  };

  return (
    <div className="min-h-screen bg-primary-dark p-8">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        Fantasy Wrestling Draft
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <AddWrestlerForm onAddWrestler={handleAddCustomWrestler} />
          <h2 className="text-2xl font-semibold text-white">Available Wrestlers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableWrestlers.map((wrestler) => (
              <div
                key={wrestler.id}
                draggable
                onDragStart={() => handleDragStart(wrestler)}
                onDragEnd={handleDragEnd}
                onDrop={() => handleDrop(wrestler)}
                onDragOver={(e) => e.preventDefault()}
              >
                <WrestlerCard
                  wrestler={wrestler}
                  isDragging={draggingWrestler?.id === wrestler.id}
                  className="hover:scale-105 cursor-grab active:cursor-grabbing"
                />
              </div>
            ))}
          </div>
        </div>

        <div
          className="bg-secondary-dark/50 rounded-lg p-6 min-h-[400px]"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            if (draggingWrestler) {
              handleDrop(draggingWrestler);
            }
          }}
        >
          <h2 className="text-2xl font-semibold text-white mb-6">TNA Roster</h2>
          <div className="grid grid-cols-1 gap-4">
            {draftedWrestlers.map((wrestler) => (
              <WrestlerCard key={wrestler.id} wrestler={wrestler} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraftBoard;