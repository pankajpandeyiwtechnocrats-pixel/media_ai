import { Play } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoModal from './VideoModal';

const EngagementCeremony = () => {
  // 1. State for the Video Preview Modal
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = ["Save the Date", "Engagement Ceremony", "Hindu Wedding Invite", "South Indian", "Marathi", "Rajasthani", "Jain", "Punjabi", "Muslim", "Christian", "Bengali"];
  
  const designs = [
    { title: "Elegant Engagement Invitation", price: "249", img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400", duration: "00:00:20" },
    { title: "Floral Engagement Theme", price: "399", oldPrice: "900", img: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=400", duration: "00:00:45" },
    { title: "Traditional Ring Ceremony", price: "480", oldPrice: "900", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400", duration: "00:00:45" },
    { title: "Premium Engagement Invite", price: "400", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400", duration: "00:00:45" },
  ];

  // 2. Function to open the modal
  const handleVideoClick = (design) => {
    setSelectedVideo(design);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white min-h-screen pb-20 relative">
      {/* Pink Header Section */}
      <div className="bg-[#FFF5F6] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              ENGAGEMENT CEREMONY <span className="text-pink-600">INVITATIONS</span>
            </h1>
            <p className="text-gray-700 font-bold mb-2">Celebrate your love story with a perfect ring ceremony invite.</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Create stunning engagement ceremony invitation videos with our Invitation Video Maker. Choose from beautiful templates, personalize your content, and download your video invitation instantly.
            </p>
            <button className="text-pink-600 font-bold text-sm mt-4 hover:underline">Show More</button>
          </div>
          <div className="hidden md:block w-32 h-32 opacity-20">
             <img src="https://cdn-icons-png.flaticon.com/512/2913/2913454.png" alt="icon" />
          </div>
        </div>
      </div>

      {/* Filter Bar capsules with Redirect Links */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap gap-3 items-center">
           <div className="bg-pink-500 p-2 rounded-lg text-white"><Play size={18} fill="currentColor" /></div>
           <span className="text-gray-500 font-bold mr-4">18 designs</span>
           {filters.map((f, i) => {
             let path = "#";
             if (f === "Save the Date") path = "/save-the-date";
             if (f === "Engagement Ceremony") path = "/engagement-ceremony";
             
             return (
               <Link 
                  key={i} 
                  to={path}
                  className={`px-5 py-2 rounded-full border text-sm font-medium transition ${f === "Engagement Ceremony" ? 'border-pink-500 text-pink-600 bg-pink-50' : 'border-gray-200 text-gray-600 hover:border-pink-300'}`}
               >
                 {f}
               </Link>
             );
           })}
        </div>
      </div>

      {/* Designs Grid - CLICKABLE */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {designs.map((design, i) => (
          <div 
            key={i} 
            className="group cursor-pointer" 
            onClick={() => handleVideoClick(design)} // 3. Triggers the modal
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
              <img src={design.img} alt={design.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-pink-100/90 text-pink-600 text-[10px] font-bold px-2 py-0.5 rounded">Video</span>
                <span className="bg-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">₹{design.price}</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                  <Play fill="white" color="white" size={24} />
                </div>
              </div>
            </div>
            <h3 className="mt-4 text-sm font-bold text-gray-700 group-hover:text-pink-600 transition-colors">{design.title}</h3>
          </div>
        ))}
      </div>

      {/* 4. The Modal Component UI */}
      <VideoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        videoData={selectedVideo}
      />
    </div>
  );
};

export default EngagementCeremony;