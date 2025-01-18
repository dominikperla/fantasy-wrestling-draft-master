import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Wrestler } from "../types/wrestler";
import { toast } from "@/components/ui/use-toast";

interface AddWrestlerFormProps {
  onAddWrestler: (wrestler: Wrestler) => void;
}

const AddWrestlerForm = ({ onAddWrestler }: AddWrestlerFormProps) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("/placeholder.svg");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim()) {
      toast({
        title: "Error",
        description: "Please enter a wrestler name",
        variant: "destructive",
      });
      return;
    }

    const newWrestler: Wrestler = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      image,
    };

    onAddWrestler(newWrestler);
    setName("");
    setImage("/placeholder.svg");
    
    toast({
      title: "Success",
      description: "New wrestler added to available roster",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-8 bg-secondary-dark/50 p-4 rounded-lg">
      <h3 className="text-xl font-semibold text-white mb-4">Add Custom Wrestler</h3>
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="Wrestler Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-primary-dark/50 text-white placeholder:text-gray-400"
        />
        <Input
          type="url"
          placeholder="Image URL (optional)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="bg-primary-dark/50 text-white placeholder:text-gray-400"
        />
        <Button 
          type="submit"
          className="w-full bg-dragBlue hover:bg-dragBlue/80"
        >
          Add Wrestler
        </Button>
      </div>
    </form>
  );
};

export default AddWrestlerForm;