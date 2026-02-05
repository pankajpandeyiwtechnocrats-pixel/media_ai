import { motion, AnimatePresence } from 'framer-motion';
import { X, MousePointer2 } from 'lucide-react'; 
import { useState } from 'react';

const VideoModal = ({ isOpen, onClose, videoData }) => {
  const [isOpening, setIsOpening] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleClose = () => {
    setIsOpening(false);
    setShowVideo(false);
    onClose();
  };

  if (!isOpen) return null;

  const handleStart = () => {
    setIsOpening(true);
    // The video appears after the flap completes its rotation
    setTimeout(() => setShowVideo(true), 1100); 
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" onClick={handleClose}></div>

      <motion.div 
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative bg-[#fafaf9] w-full max-w-[440px] h-[85vh] rounded-[3rem] overflow-hidden shadow-2xl z-10 flex flex-col border border-white/20"
      >
        {/* Header Section */}
        <div className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-100 shrink-0">
          <div className="flex flex-col">
            <h2 className="text-[10px] font-bold text-pink-600 tracking-[0.3em] uppercase">Exclusive Preview</h2>
            <p className="text-sm font-black text-gray-800 tracking-tight">VIDEO INVITATION</p>
          </div>
          <button onClick={handleClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} className="text-gray-400" />
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
                  // ENVELOPE DROP ANIMATION: Moves down 30% of its height when opening
                  animate={isOpening ? { y: '30%', scale: 0.95 } : { y: 0, scale: 1 }}
                  transition={{ duration: 0.6, ease: "backOut" }}
                  exit={{ scale: 1.1, opacity: 0, transition: { duration: 0.4 } }}
                >
                  {/* Textured Envelope Body */}
                  <div className="absolute inset-0 bg-[#f3e3c3] rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden border border-amber-900/10">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/gold-dust.png')]"></div>
                    
                    {/* Ornamental Borders */}
                    <div className="absolute right-12 top-1/2 -translate-y-1/2 flex flex-col items-center select-none opacity-80">
                       <div className="w-10 h-14 border-t-[3px] border-x-[1.5px] border-amber-950/20 rounded-t-full mb-3"></div>
                       <span className="[writing-mode:vertical-rl] text-4xl font-serif text-amber-950/90 tracking-[0.25em] font-light">
                          Invitation
                       </span>
                       <div className="w-10 h-14 border-t-[3px] border-x-[1.5px] border-amber-950/20 rounded-t-full mt-3 rotate-180"></div>
                    </div>

                    {/* Infinite Finger */}
                    {!isOpening && (
                      <motion.div 
                        className="absolute top-[55%] left-1/2 z-40 drop-shadow-2xl"
                        animate={{ scale: [1, 1.1, 1], y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <MousePointer2 size={48} className="text-gray-900 rotate-[105deg] fill-white/20" />
                      </motion.div>
                    )}
                  </div>

                  {/* 3D OPENING FLAP */}
                  <motion.div 
                    className="absolute top-0 left-0 w-full h-1/2 bg-[#e8d5b5] origin-top z-30 shadow-2xl"
                    style={{ 
                      clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                      backfaceVisibility: 'hidden' 
                    }}
                    animate={isOpening ? { rotateX: -160, filter: 'brightness(0.8)' } : { rotateX: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                  />

                  {/* Pearl Seal */}
                  <motion.div 
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                    animate={isOpening ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="w-16 h-16 bg-white rounded-full shadow-xl border-[5px] border-[#e8d5b5] flex items-center justify-center">
                       <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white via-gray-50 to-gray-300 shadow-inner"></div>
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                /* Video Player */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="w-full h-full bg-black rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white"
                >
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${videoData?.videoId || 'dQw4w9WgXcQ'}?autoplay=1&rel=0&modestbranding=1`}
                    title="Invitation"
                    allow="autoplay"
                  ></iframe>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-8 py-6 bg-white border-t border-gray-100 flex items-center justify-center">
          <button className="w-full bg-gradient-to-r from-pink-500 to-pink-700 text-white py-4 rounded-2xl font-black tracking-widest text-[10px] uppercase shadow-lg shadow-pink-200 transition-all active:scale-[0.98]">
            Customize this design
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoModal;