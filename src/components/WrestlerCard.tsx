import { Wrestler } from "../types/wrestler";
import { cn } from "@/lib/utils";

interface WrestlerCardProps {
  wrestler: Wrestler;
  isDragging?: boolean;
  className?: string;
}

const WrestlerCard = ({ wrestler, isDragging, className }: WrestlerCardProps) => {
  return (
    <div
      className={cn(
        "relative p-4 rounded-lg shadow-lg transition-all duration-200",
        "bg-primary-dark/80 backdrop-blur-sm",
        isDragging && "bg-dragBlue/80",
        wrestler.isChampion && "border-2 border-champion",
        className
      )}
      draggable
    >
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-secondary-dark">
          <img
            src={wrestler.image}
            alt={wrestler.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-bold text-lg">{wrestler.name}</h3>
          <span className="text-primary inline-block px-2 py-1 rounded-full text-sm bg-secondary-dark">
            {wrestler.promotion}
          </span>
          {wrestler.isChampion && (
            <div className="mt-2">
              {wrestler.championships?.map((title) => (
                <span
                  key={title}
                  className="text-champion text-sm font-semibold block"
                >
                  {title}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WrestlerCard;