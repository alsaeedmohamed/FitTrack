import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Activity, Trophy } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      {/* Hero Section with Image */}
      <div className="relative">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0A0F1A]/90 to-[#0A0F1A]"></div>
        <img 
          src="/image/1.jpg" 
          alt="Fitness athlete working out" 
          className="w-full h-[50vh] object-cover object-center"
        />
        
        <div className="relative z-20 container mx-auto px-6 pt-24 pb-12 -mt-40">
          <div className="flex justify-center mb-6">
            <div className="h-16 w-16 rounded-full border-2 border-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
                <path d="M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z" />
                <path d="M8 8c-1.36 1.33-3.15 1.27-4.2.2a2.7 2.7 0 0 1 0-3.81l.4-.39.4.4c.9.9.24 1.78-.2 2.2" />
                <path d="M16 8c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.4-.39-.4.4c-.9.9-.24 1.78.2 2.2" />
              </svg>
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 text-center">FitTrack</h1>
          <p className="text-xl text-gray-400 mb-12 max-w-md mx-auto text-center">
            Track your fitness activity and achieve your physical goals with our comprehensive platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/sginIn" 
              className="px-8 py-3 bg-transparent border-2 border-green-500 text-green-500 font-bold rounded-lg hover:bg-green-500 hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/sginUp" 
              className="px-8 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors"
            >
              Create Account
            </Link>
          </div>
        </div>
      </div>

      {/* About Section with New Images */}
      <div className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose FitTrack?</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          FitTrack is designed to help you optimize your fitness journey with advanced tracking, personalized programs, and a supportive community of fitness enthusiasts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* First Feature with Image */}
          <Card className="bg-[#141B2D] border-none overflow-hidden shadow-xl">
            <div className="h-56 overflow-hidden">
              <img 
                src="/image/4.png"
                alt="Group fitness training outdoors" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center">
                <Activity className="w-5 h-5 text-green-500 mr-2" />
                <h3 className="text-xl font-semibold text-green-500">Community Workouts</h3>
              </div>
              <p className="text-gray-400">
                Join our community training sessions to boost motivation and make fitness a social experience. Group training sessions led by expert coaches.
              </p>
            </CardContent>
          </Card>

          {/* Second Feature with Image */}
          <Card className="bg-[#141B2D] border-none overflow-hidden shadow-xl">
            <div className="h-56 overflow-hidden">
              <img 
                src="/image/2.png"
                alt="Intense workout with battle ropes" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center">
                <Dumbbell className="w-5 h-5 text-green-500 mr-2" />
                <h3 className="text-xl font-semibold text-green-500">Strength Training</h3>
              </div>
              <p className="text-gray-400">
                Access specialized strength training programs designed to build muscle, increase power, and improve overall physical performance.
              </p>
            </CardContent>
          </Card>

          {/* Third Feature with Image */}
          <Card className="bg-[#141B2D] border-none overflow-hidden shadow-xl">
            <div className="h-56 overflow-hidden">
              <img 
                src="/image/5.png"
                alt="Cardio training on treadmill" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center">
                <Trophy className="w-5 h-5 text-green-500 mr-2" />
                <h3 className="text-xl font-semibold text-green-500">Cardio Excellence</h3>
              </div>
              <p className="text-gray-400">
                Optimize your cardiovascular health with customized cardio programs that adapt to your fitness level and progress over time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20 bg-[#0F1629]">
        <h2 className="text-2xl font-bold mb-10 text-center">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 bg-[#141B2D] rounded-xl">
            <div className="w-12 h-12 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">Comprehensive Profile</h3>
            <p className="text-gray-400">Track all your fitness activities in one place with advanced reports and statistics</p>
          </div>
          
          <div className="p-6 bg-[#141B2D] rounded-xl">
            <div className="w-12 h-12 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">Advanced Performance Analysis</h3>
            <p className="text-gray-400">Detailed analysis of your athletic performance with charts and personalized recommendations</p>
          </div>
          
          <div className="p-6 bg-[#141B2D] rounded-xl">
            <div className="w-12 h-12 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">Time Management</h3>
            <p className="text-gray-400">Custom and organized workout schedule with reminders to help you achieve your goals</p>
          </div>
        </div>
      </div>
      
      {/* Call to Action with Image */}
      <div className="relative py-16 bg-[#141B2D]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-3xl font-bold mb-6">Start Your Fitness Journey Today</h2>
            <p className="text-gray-400 mb-8">
              Join thousands of users who have transformed their fitness journey with FitTrack. Achieve your goals with our powerful tools and guidance.
            </p>
            <Link 
              href="/sginUp" 
              className="px-8 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/image/3.png" 
              alt="Fitness enthusiasts running outdoors"
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
