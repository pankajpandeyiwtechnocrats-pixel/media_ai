import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Layers, Upload, Eye, Download, Save } from 'lucide-react';

const CustomizeInvite = () => {
  // 1. Data Structure: Each page has its own text fields with locked styles
  const [pages, setPages] = useState([
    {
      id: 1,
      name: "Intro Page",
      backgroundImage: "https://api.247invites.com//UserData/User_66849/VideoTemplate/Project306_S_Comp_61d9e5b0-dd28-4895-a80a-4b1ec8e66edc.png",
      textLines: [
        { id: 'l1', label: "Host Name", content: "Mrs. Joti Verma", style: { top: '15%', fontSize: '36px', fontFamily: 'serif' } },
        { id: 'l2', label: "Blessing Text", content: "with the heavenly blessing Singh,", style: { top: '30%', fontSize: '12px', fontFamily: 'serif' } },
        { id: 'l3', label: "Secondary Text", content: "of their a brother", style: { top: '33%', fontSize: '12px', fontFamily: 'serif' } },
        { id: 'l4', label: "Event Type", content: "Wedding Ceremony", style: { top: '40%', fontSize: '30px', fontFamily: 'serif', color: '#9d174d' } },
        { id: 'l5', label: "Bride Name", content: "Amusha", style: { top: '50%', fontSize: '36px', fontFamily: 'serif', color: '#831843' } },
        { id: 'l6', label: "Connecting Text", content: "weds", style: { top: '57%', fontSize: '16px', fontFamily: 'serif' } },
        { id: 'l7', label: "Groom Name", content: "Nishanth", style: { top: '60%', fontSize: '36px', fontFamily: 'serif', color: '#831843' } },
      ]
    },
    {
      id: 2,
      name: "Venue Page",
      backgroundImage: "https://api.247invites.com//UserData/User_66849/VideoTemplate/Project306_S_Comp_61d9e5b0-dd28-4895-a80a-4b1ec8e66edc.png",
      textLines: [
        { id: 'l1', label: "Date", content: "05 JULY 2026", style: { top: '45%', fontSize: '28px', fontFamily: 'serif' } },
        { id: 'l2', label: "Venue Location", content: "The Grand Palace, Indore", style: { top: '55%', fontSize: '14px', fontFamily: 'serif' } },
        { id: 'l3', label: "Closing Note", content: "Dinner to follow", style: { top: '62%', fontSize: '12px', fontFamily: 'serif' } },
        { id: 'l4', label: "Hey Note", content: "Dinner to follow", style: { top: '65%', fontSize: '12px', fontFamily: 'serif' } },
      ]
    }
  ]);

  const [activePageIndex, setActivePageIndex] = useState(0);
  const activePage = pages[activePageIndex];

  // 2. Function to update text for the currently selected page
  const handleTextChange = (lineId, newContent) => {
    const updatedPages = [...pages];
    const lineIndex = updatedPages[activePageIndex].textLines.findIndex(l => l.id === lineId);
    updatedPages[activePageIndex].textLines[lineIndex].content = newContent;
    setPages(updatedPages);
  };

  return (
    <div className="h-screen flex flex-col bg-[#f5f5f5] overflow-hidden font-sans">
      
      {/* TOP NAVBAR */}
      <div className="bg-white border-b px-6 py-3 flex items-center justify-between z-50">
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-pink-600 transition-colors">
            <Layers size={20} className="rotate-90" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-pink-600 text-pink-600 rounded-lg font-bold text-xs hover:bg-pink-50 transition-all">
            <Upload size={16} /> Upload Music
          </button>
          <button className="flex items-center gap-2 px-6 py-2 bg-pink-600 text-white rounded-lg font-bold text-xs hover:bg-pink-700 shadow-md transition-all">
            <Eye size={16} /> Preview Video
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-400 rounded-lg font-bold text-xs cursor-not-allowed">
            Download <Download size={16} />
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        
        {/* LEFT SIDEBAR: Page list */}
        <div className="w-[300px] bg-white border-r flex flex-col h-full shadow-inner">
          <div className="p-4 border-b">
            <button className="w-full bg-[#d81b60] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 shadow-sm uppercase text-[10px] tracking-widest">
              <Layers size={14} /> Re-Order Clips
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {pages.map((page, index) => (
              <div key={page.id} className="relative group">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setActivePageIndex(index)}
                  className={`cursor-pointer rounded-xl overflow-hidden border-2 transition-all ${activePageIndex === index ? 'border-pink-500 ring-4 ring-pink-50' : 'border-gray-200 opacity-70 hover:opacity-100'}`}
                >
                  <div className="aspect-[9/16] relative">
                     <img src={page.backgroundImage} className="w-full h-full object-cover" alt={page.name} />
                     <div className="absolute inset-0 bg-black/5"></div>
                  </div>
                </motion.div>
                <button className="absolute -right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-md shadow-md border text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all">
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CENTER: Invitation Canvas with One-Time Animation Logic */}
        <div className="flex-1 flex items-center justify-center p-8 bg-gray-200/50">
          <div className="relative h-full max-h-[85vh] aspect-[9/16] bg-white shadow-2xl rounded-sm overflow-hidden border-[10px] border-white">
            
            {/* Background Image: One-time zoom on page change */}
            <AnimatePresence mode="wait">
              <motion.img 
                key={activePage.id}
                src={activePage.backgroundImage} 
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </AnimatePresence>
            
            {/* Text Overlay Layer */}
            <div className="absolute inset-0 select-none">
              <AnimatePresence>
                {activePage.textLines.map((line, index) => (
                  <motion.div 
                    // Using activePageIndex in the key ensures it only animates when the page flips
                    key={`${activePageIndex}-${line.id}`} 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.15, // Creates a beautiful "one by one" sequence
                      ease: "easeOut" 
                    }}
                    style={{ 
                      position: 'absolute', 
                      top: line.style.top, 
                      width: '100%', 
                      textAlign: 'center',
                      fontSize: line.style.fontSize,
                      fontFamily: line.style.fontFamily,
                      color: line.style.color || '#431407',
                    }}
                    className="px-10 leading-snug"
                  >
                    {line.content}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR: Input Fields */}
        <div className="w-[440px] bg-white border-l h-full flex flex-col">
          <div className="p-6 border-b">
            <h3 className="text-sm font-black text-gray-900 uppercase tracking-tighter">Edit Content</h3>
            <p className="text-[10px] text-gray-400 font-bold uppercase mt-1">Modifying {activePage.name}</p>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-gray-50/30">
            {activePage.textLines.map((line) => (
              <div key={line.id} className="space-y-1">
                <label className="text-[9px] font-bold text-gray-400 uppercase tracking-widest px-1">{line.label}</label>
                <div className="flex items-center border rounded-lg bg-white shadow-sm focus-within:ring-2 focus-within:ring-pink-500/20 focus-within:border-pink-500 overflow-hidden transition-all">
                  <input 
                    type="text" 
                    value={line.content} 
                    onChange={(e) => handleTextChange(line.id, e.target.value)}
                    className="flex-1 px-4 py-3 text-sm font-medium outline-none text-gray-700"
                  />
                  <div className="px-3 py-1 bg-gray-50 border-l text-[10px] font-bold text-gray-300">
                    {line.content.length}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 border-t bg-white">
            <button className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-pink-600 transition-all shadow-lg active:scale-[0.98]">
              <Save size={18} /> Save Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeInvite;