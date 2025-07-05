
import { Phone, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface DriverCardProps {
  onStartRide: () => void;
}

const DriverCard = ({ onStartRide }: DriverCardProps) => {
  return (
    <Card className="shadow-lg border-0">
      <CardContent className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src="/placeholder.svg" alt="Driver" />
            <AvatarFallback className="bg-gradient-to-r from-blue-500 to-green-500 text-white text-lg font-semibold">
              RK
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-800">Raj Kumar</h3>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium ml-1">4.8</span>
              </div>
              <span className="text-gray-400">•</span>
              <span className="text-sm text-gray-600">238 trips</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">Honda City • KA 01 AB 1234</p>
          </div>
          
          <Button
            size="sm"
            variant="outline"
            className="rounded-full w-10 h-10 p-0"
          >
            <Phone className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="bg-green-50 p-3 rounded-lg mb-4">
          <p className="text-sm text-green-800 font-medium">Driver is arriving in 3 minutes</p>
        </div>
        
        <Button 
          onClick={onStartRide}
          className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
        >
          Start Ride
        </Button>
      </CardContent>
    </Card>
  );
};

export default DriverCard;
