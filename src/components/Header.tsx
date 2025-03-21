
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">
            <span className="text-red-500">POST</span>APOCALYPSE
          </h1>
        </div>
        
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-gray-900 text-white border-gray-800">
              <nav className="flex flex-col gap-4 mt-8">
                <a href="#home" className="px-4 py-2 hover:bg-gray-800 rounded-md transition">HOME</a>
                <a href="#about" className="px-4 py-2 hover:bg-gray-800 rounded-md transition">ABOUT</a>
                <a href="#features" className="px-4 py-2 hover:bg-gray-800 rounded-md transition">FEATURES</a>
                <a href="#contact" className="px-4 py-2 hover:bg-gray-800 rounded-md transition">CONTACT</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-gray-300 hover:text-white transition">HOME</a>
          <a href="#about" className="text-gray-300 hover:text-white transition">ABOUT</a>
          <a href="#features" className="text-gray-300 hover:text-white transition">FEATURES</a>
          <Button variant="destructive" className="ml-2">CONTACT US</Button>
        </nav>
      </div>
    </header>
  )
}
