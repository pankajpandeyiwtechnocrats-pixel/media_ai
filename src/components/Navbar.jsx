import { useState } from 'react';
import { Search, ChevronDown, User, MessageCircle, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Data for the Wedding Dropdown
  const weddingLinks = [
    "All", "Save the Date", "Engagement Ceremony", "Hindu Wedding Invite", 
    "South Indian", "Marathi", "Rajasthani", "Jain", "Punjabi", 
    "Muslim", "Christian", "Bengali"
  ];

  // Data for the Birthday Dropdown
  const birthdayLinks = [
    "All", "Birthday Invites", "Adult Milestones"
  ];

  // Data for the Greetings Dropdown
  const greetingsLinks = [
    "All", "Birthday Greetings", "Diwali", "Christmas", "Anniversary"
  ];

  // Data for the More Dropdown
  const moreLinks = [
    "All", "Baby Shower", "Half Saree Ceremony", "Baptism Ceremony", "Naming Naamkaran", "Mundan Ceremony", "House Warming", "Pooja", "Dhoti Ceremony", "Thread Ceremony", "Annaprashan", "Kitty Party", "Grand Opening", "Ganesh Chaturthi"
  ];

  return (
    <nav className="bg-white py-3 px-4 md:px-8 shadow-sm sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-tr from-pink-600 to-pink-400 rounded-tr-xl rounded-bl-xl rotate-12 flex items-center justify-center">
             <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
          </div>
          <span className="text-xl font-bold text-gray-800 tracking-tight">
            123 <span className="font-light text-gray-500">Logo</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-gray-700">
          
          {/* Wedding Dropdown Trigger */}
          <div className="relative group py-4">
            <a href="#" className="flex items-center gap-1 hover:text-pink-600 transition cursor-pointer">
              Wedding <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
            </a>

            {/* The Actual Dropdown Menu */}
            <div className="absolute top-full left-0 w-56 bg-white shadow-2xl rounded-lg border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100]">
              {weddingLinks.map((link, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="block px-6 py-2.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium transition"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>


          {/* birthday Dropdown Trigger */}
          <div className="relative group py-4">
            <a href="#" className="flex items-center gap-1 hover:text-pink-600 transition cursor-pointer">
              Birthday <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
            </a>

            {/* The Actual birthday Dropdown Menu */}
            <div className="absolute top-full left-0 w-56 bg-white shadow-2xl rounded-lg border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100]">
              {birthdayLinks.map((link, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="block px-6 py-2.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium transition"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>


            {/* greetings Dropdown Trigger */}
          <div className="relative group py-4">
            <a href="#" className="flex items-center gap-1 hover:text-pink-600 transition cursor-pointer">
              Greetings <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
            </a>

            {/* The Actual greetings Dropdown Menu */}
            <div className="absolute top-full left-0 w-56 bg-white shadow-2xl rounded-lg border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100]">
              {greetingsLinks.map((link, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="block px-6 py-2.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium transition"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>


            {/* moreLinks Dropdown Trigger */}
          <div className="relative group py-4">
            <a href="#" className="flex items-center gap-1 hover:text-pink-600 transition cursor-pointer">
              More <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
            </a>

            {/* The Actual greetings Dropdown Menu */}
            <div className="absolute top-full left-0 w-56 bg-white shadow-2xl rounded-lg border border-gray-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100]">
              {moreLinks.map((link, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="block px-6 py-2.5 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 font-medium transition"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>


        <a href="./Contact" className="hover:text-pink-600 transition">Contact</a>
          <Search size={18} className="cursor-pointer text-gray-400 hover:text-pink-600 ml-2" />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a href="https://api.whatsapp.com/send?phone=+918822665599&text=Hi team, I want to become a reseller at 123website.com." className="hidden sm:flex items-center gap-2 border border-pink-100 text-pink-600 px-5 py-2 rounded-full text-sm font-bold hover:bg-pink-50 transition">
            <MessageCircle size={16} /> Be a Reseller
          </a>
          
          <button className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md shadow-pink-100 hover:opacity-90 transition">
            <User size={16} className="bg-white/20 rounded-full p-0.5" /> My Videos
          </button>

          <div className="hidden sm:flex w-9 h-9 bg-blue-100 text-blue-600 rounded-full items-center justify-center font-bold text-sm">P</div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-gray-600">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-5">
          <a href="#" className="text-gray-800 font-bold border-b pb-2">Wedding</a>
          <a href="#" className="text-gray-800 font-bold border-b pb-2">Birthday</a>
          <a href="#" className="text-gray-800 font-bold">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;