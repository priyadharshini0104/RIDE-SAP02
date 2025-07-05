
import { useState } from "react";
import { MapPin, Navigation, Car, Clock, Star, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import LocationPicker from "@/components/LocationPicker";
import RideTypeSelector from "@/components/RideTypeSelector";
import DriverCard from "@/components/DriverCard";

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'booking' | 'searching' | 'matched' | 'riding'>('booking');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [selectedRideType, setSelectedRideType] = useState('economy');
  const [estimatedPrice, setEstimatedPrice] = useState(0);

  const handleBookRide = () => {
    if (pickup && destination) {
      // Calculate estimated price based on ride type
      const basePrice = 50;
      const multiplier = selectedRideType === 'economy' ? 1 : selectedRideType === 'comfort' ? 1.5 : 2;
      setEstimatedPrice(basePrice * multiplier);
      setCurrentStep('searching');
      
      // Simulate finding a driver
      setTimeout(() => {
        setCurrentStep('matched');
      }, 3000);
    }
  };

  const handleStartRide = () => {
    setCurrentStep('riding');
  };

  const handleCompleteRide = () => {
    setCurrentStep('booking');
    setPickup('');
    setDestination('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Car className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-800">RideShare</h1>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Online
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Booking Interface */}
        {currentStep === 'booking' && (
          <div className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Where to?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <LocationPicker
                  pickup={pickup}
                  destination={destination}
                  onPickupChange={setPickup}
                  onDestinationChange={setDestination}
                />
              </CardContent>
            </Card>

            {pickup && destination && (
              <>
                <RideTypeSelector
                  selectedType={selectedRideType}
                  onTypeChange={setSelectedRideType}
                />
                
                <Button 
                  onClick={handleBookRide}
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg"
                >
                  Book Ride
                </Button>
              </>
            )}
          </div>
        )}

        {/* Searching for Driver */}
        {currentStep === 'searching' && (
          <Card className="shadow-lg border-0">
            <CardContent className="py-8 text-center space-y-4">
              <div className="animate-spin w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full mx-auto"></div>
              <h3 className="text-lg font-semibold text-gray-800">Finding your driver...</h3>
              <p className="text-gray-600">Estimated price: ₹{estimatedPrice}</p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  {pickup} → {destination}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Driver Matched */}
        {currentStep === 'matched' && (
          <div className="space-y-4">
            <DriverCard onStartRide={handleStartRide} />
            
            <Card className="shadow-lg border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Estimated arrival</span>
                  <span className="font-semibold text-green-600">3 min</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-gray-600">Trip fare</span>
                  <span className="font-semibold">₹{estimatedPrice}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* During Ride */}
        {currentStep === 'riding' && (
          <div className="space-y-4">
            <Card className="shadow-lg border-0">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto">
                  <Navigation className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">On the way!</h3>
                <p className="text-gray-600">Your driver is taking you to your destination</p>
                
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Estimated time</span>
                    <span className="font-semibold">15 min</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Distance</span>
                    <span className="font-semibold">8.5 km</span>
                  </div>
                </div>

                <Button 
                  onClick={handleCompleteRide}
                  variant="outline"
                  className="w-full mt-4"
                >
                  Complete Ride (Demo)
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Quick Actions */}
        {currentStep === 'booking' && (
          <div className="grid grid-cols-2 gap-4">
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm font-medium">Schedule Ride</p>
              </CardContent>
            </Card>
            <Card className="cursor-pointer hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <Star className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                <p className="text-sm font-medium">Saved Places</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
