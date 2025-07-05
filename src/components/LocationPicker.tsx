
import { MapPin, Navigation } from "lucide-react";
import { Input } from "@/components/ui/input";

interface LocationPickerProps {
  pickup: string;
  destination: string;
  onPickupChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
}

const LocationPicker = ({ pickup, destination, onPickupChange, onDestinationChange }: LocationPickerProps) => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <MapPin className="absolute left-3 top-3 w-4 h-4 text-green-600" />
        <Input
          placeholder="Pickup location"
          value={pickup}
          onChange={(e) => onPickupChange(e.target.value)}
          className="pl-10 h-12 border-2 border-gray-200 focus:border-green-500 rounded-xl"
        />
      </div>
      
      <div className="relative">
        <Navigation className="absolute left-3 top-3 w-4 h-4 text-red-600" />
        <Input
          placeholder="Where to?"
          value={destination}
          onChange={(e) => onDestinationChange(e.target.value)}
          className="pl-10 h-12 border-2 border-gray-200 focus:border-red-500 rounded-xl"
        />
      </div>
    </div>
  );
};

export default LocationPicker;
