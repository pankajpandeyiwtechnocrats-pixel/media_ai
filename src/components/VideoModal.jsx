import { motion, AnimatePresence } from 'framer-motion';
import { X, MousePointer2 } from 'lucide-react'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VideoModal = ({ isOpen, onClose, videoData }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpening(false);
    setShowVideo(false);
    onClose();
  };

  if (!isOpen) return null;

  const handleStart = () => {
    setIsOpening(true);
    setTimeout(() => setShowVideo(true), 1100); 
  };

  const handleCustomizeClick = () => {
    navigate(`/customize/${videoData?.id || 'temp-id'}`);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" onClick={handleClose}></div>

      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative bg-[#fafaf9] w-full max-w-[440px] h-[85vh] rounded-[3rem] overflow-hidden shadow-2xl z-10 flex flex-col border border-white/20"
      >
        {/* UPDATED HEADER: Customize Button next to Preview Text */}
        <div className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <h2 className="text-[9px] font-bold text-gray-400 tracking-[0.2em] uppercase leading-none mb-1">Exclusive Preview</h2>
              <p className="text-xs font-black text-gray-900 tracking-tight leading-none uppercase">Video Invitation</p>
            </div>
            {/* Button placed immediately next to text */}
            <button 
              onClick={handleCustomizeClick}
              className="border border-pink-500 text-pink-500 px-5 ml-2 py-1 rounded-full text-[12px] font-bold hover:bg-pink-500 hover:text-white transition-all uppercase whitespace-nowrap"
            >
              Customize Now
            </button>
          </div>
          <button onClick={handleClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={18} className="text-gray-400" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-gradient-to-b from-gray-50 to-gray-200 flex items-center justify-center p-8">
          <div className="relative w-full h-full aspect-[9/16] perspective-2000">
            <AnimatePresence mode="wait">
              {!showVideo ? (
                <motion.div 
                  key="envelope"
                  className="relative w-full h-full cursor-pointer group"
                  onClick={handleStart}
                  animate={isOpening ? { y: '30%', scale: 0.95 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.6, ease: "backOut" }}
                >
                  <div className="absolute inset-0 bg-[#f3e3c3] rounded-2xl shadow-2xl flex flex-col items-center overflow-hidden border border-amber-900/10">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/gold-dust.png')]"></div>
                    
                    {/* Horizontal "Invitation" with accurate scroll borders */}
                    <AnimatePresence>
                      {!isOpening && (
                        <motion.div 
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="mt-[35px] flex flex-row items-center justify-center gap-4 z-10"
                        >
                           <div className="flex flex-col items-center opacity-40">
                              <div className="w-8 h-4 border-t-2 border-l-2 border-amber-950 rounded-tl-full"></div>
                              <div className="w-8 h-4 border-b-2 border-l-2 border-amber-950 rounded-bl-full"></div>
                           </div>
                           
                           <span className="text-3xl font-serif text-amber-950/90 tracking-[0.1em] font-light">
                              Invitation
                           </span>

                           <div className="flex flex-col items-center opacity-40">
                              <div className="w-8 h-4 border-t-2 border-r-2 border-amber-950 rounded-tr-full"></div>
                              <div className="w-8 h-4 border-b-2 border-r-2 border-amber-950 rounded-br-full"></div>
                           </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Pearl Seal centered */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                       <div className="w-14 h-14 bg-white rounded-full shadow-xl border-[4px] border-[#e8d5b5] flex items-center justify-center relative">
                          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white via-gray-50 to-gray-300 shadow-inner"></div>
                          <div className="w-2 h-2 rounded-full bg-white opacity-40 absolute top-2.5 left-2.5"></div>
                       </div>
                    </div>

                    {!isOpening && (
                      <motion.div 
                        className="absolute left-1/2 top-1/2 z-40 drop-shadow-2xl pointer-events-none"
                        style={{ marginLeft: '10px', marginTop: '20px' }}
                        animate={{ scale: [1, 1.2, 1], y: [0, 4, 0] }}
                        transition={{ repeat: Infinity, duration: 1.4 }}
                      >
                        <MousePointer2 size={48} className="text-gray-900 rotate-[105deg] fill-white/20" />
                      </motion.div>
                    )}
                  </div>

                  <motion.div 
                    className="absolute top-0 left-0 w-full h-1/2 bg-[#e8d5b5] origin-top z-30 shadow-2xl"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)', backfaceVisibility: 'hidden' }}
                    animate={isOpening ? { rotateX: -160, filter: 'brightness(0.8)' } : { rotateX: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="w-full h-full bg-black rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white"
                >
                  <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${videoData?.videoId || 'dQw4w9WgXcQ'}?autoplay=1&rel=0&modestbranding=1`} title="Preview" allow="autoplay"></iframe>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Action Footer CTA */}
        <div className="px-8 py-6 bg-white border-t border-gray-100 flex items-center justify-center">
          <button 
            onClick={handleCustomizeClick}
            className="w-full bg-gradient-to-r from-pink-500 to-pink-700 text-white py-4 rounded-2xl font-black tracking-widest text-[10px] uppercase shadow-lg shadow-pink-200 transition-all active:scale-[0.98]"
          >
            Customize Now
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoModal;