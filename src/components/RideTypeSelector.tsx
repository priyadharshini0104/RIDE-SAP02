
import { Car } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface RideTypeSelectorProps {
  selectedType: string;
  onTypeChange: (type: string) => void;
}

const rideTypes = [
  {
    id: 'economy',
    name: 'Economy',
    description: 'Affordable rides',
    price: '₹50',
    time: '2 min',
    icon: '🚗'
  },
  {
    id: 'comfort',
    name: 'Comfort',
    description: 'Extra legroom',
    price: '₹75',
    time: '3 min',
    icon: '🚙'
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'High-end cars',
    price: '₹100',
    time: '5 min',
    icon: '🚘'
  }
];

const RideTypeSelector = ({ selectedType, onTypeChange }: RideTypeSelectorProps) => {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-gray-800">Choose a ride</h3>
      {rideTypes.map((type) => (
        <Card
          key={type.id}
          className={`cursor-pointer transition-all duration-200 ${
            selectedType === type.id
              ? 'border-2 border-blue-500 bg-blue-50 shadow-md'
              : 'border border-gray-200 hover:shadow-md'
          }`}
          onClick={() => onTypeChange(type.id)}
        >
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{type.icon}</span>
                <div>
                  <h4 className="font-semibold text-gray-800">{type.name}</h4>
                  <p className="text-sm text-gray-600">{type.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800">{type.price}</p>
                <p className="text-sm text-gray-600">{type.time}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default RideTypeSelector;
