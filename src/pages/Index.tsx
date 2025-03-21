
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import ModelViewer from "@/components/ModelViewer"
import Header from "@/components/Header"
import FeatureCard from "@/components/FeatureCard"
import { Radiation, Fuel, Shield, Truck, Wrench, Cpu } from "lucide-react"

const Index = () => {
  // Reference for your 3D model - replace with actual path when you have one
  // For now it uses a placeholder box
  const modelPath = ""
  
  const featuresRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  
  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black z-10" />
          <div className="h-full w-full">
            <ModelViewer modelPath={modelPath} />
          </div>
        </div>
        
        <div className="container mx-auto px-4 pt-20 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-red-500">POST</span>APOCALYPSE MACHINE
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Engineered for survival. Built for the wasteland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToFeatures}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Explore Features
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gray-600 text-gray-300 hover:text-white hover:border-white"
              >
                Pre-Order Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" ref={aboutRef} className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-red-500">SURVIVE</span> THE NEW WORLD
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              In a world ravaged by destruction, transportation isn't just about getting from A to B — it's about survival. 
              The POST APOCALYPSE MACHINE isn't just a vehicle; it's your lifeline in the wasteland.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Reinforced Exoskeleton</h3>
                <p className="text-gray-400">Crafted from salvaged military-grade metals, protecting you from both the elements and hostile encounters.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Multi-Fuel Engine</h3>
                <p className="text-gray-400">Runs on conventional fuel, biofuel, or even processed waste—because in the wasteland, you use what you can find.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" ref={featuresRef} className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-red-500">MACHINE</span> FEATURES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Shield className="h-10 w-10" />}
              title="Armored Chassis"
              description="Bullet-resistant plating and reinforced windows protect from wasteland dangers."
            />
            <FeatureCard 
              icon={<Fuel className="h-10 w-10" />}
              title="Adaptive Fuel System"
              description="Engine capable of running on multiple fuel types for maximum survival flexibility."
            />
            <FeatureCard 
              icon={<Radiation className="h-10 w-10" />}
              title="Radiation Shielding"
              description="Built-in protection against harmful environmental hazards in contaminated zones."
            />
            <FeatureCard 
              icon={<Truck className="h-10 w-10" />}
              title="All-Terrain Capability"
              description="Navigate through debris, damaged roads, and off-road environments with ease."
            />
            <FeatureCard 
              icon={<Wrench className="h-10 w-10" />}
              title="Field Reparable"
              description="Modular components designed for quick repairs with limited tools and resources."
            />
            <FeatureCard 
              icon={<Cpu className="h-10 w-10" />}
              title="Survival Tech"
              description="Integrated water filtration, solar charging, and emergency communications."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="contact" className="py-20 bg-black relative">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              READY TO <span className="text-red-500">SURVIVE</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Reserve your POST APOCALYPSE MACHINE today and prepare for whatever tomorrow brings.
            </p>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
            >
              Join the Waitlist
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-10 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold">
                <span className="text-red-500">POST</span>APOCALYPSE
              </h2>
              <p className="text-gray-400 mt-2">Surviving tomorrow, today.</p>
            </div>
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} POST APOCALYPSE MACHINES. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
