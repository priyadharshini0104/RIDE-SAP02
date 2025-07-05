
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Car, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Code2 className="w-12 h-12 text-purple-400" />
            <h1 className="text-5xl font-bold text-white">Codtech Projects</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing innovative web applications built with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Ride Sharing App */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-green-500/20 rounded-lg group-hover:bg-green-500/30 transition-colors">
                  <Car className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <CardTitle className="text-white text-xl">Ride Sharing App</CardTitle>
                  <CardDescription className="text-gray-300">
                    Modern transportation solution
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-6">
                A comprehensive ride-sharing platform with real-time tracking, driver matching, 
                and seamless booking experience.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  Tailwind CSS
                </span>
              </div>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                asChild
              >
                <Link to="/">
                  View Ride App →
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Media Player App */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                  <Music className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <CardTitle className="text-white text-xl">Media Player App</CardTitle>
                  <CardDescription className="text-gray-300">
                    Full-featured music player
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-6">
                An elegant music player with playlist management, audio controls, 
                and a beautiful gradient interface.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">
                  Audio API
                </span>
              </div>
              <Button 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                asChild
              >
                <Link to="/media-player">
                  Launch Player →
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400">
            Built with ❤️ using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
