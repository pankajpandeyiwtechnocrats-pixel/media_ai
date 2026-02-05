import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Play, PlayCircle, ChevronDown, Star } from 'lucide-react';

// Import Assets
import weddingImg from '../assets/wedding-invites-cat2.webp';
import bdayImg from '../assets/category-birthday1.webp';
import bkImg from '../assets/category-babykids1.webp';
import hwImg from '../assets/category-house-warming1.webp';
import anImg from '../assets/Anniversary (1).webp';
import enImg from '../assets/engagement-invite-cat.webp';
import saImg from '../assets/save-date-invites-cat.webp';
import biImg from '../assets/BirthDay (1).webp';
import weImg from '../assets/wedding-invites-cat.webp';
import chooseImg from '../assets/choose-an-invite.webp';
import cusImg from '../assets/customize-your-invite.webp';
import dowImg from '../assets/download-and-share.webp';


const Features = () => {
  const [activeTab, setActiveTab] = useState('VIDEO');

  const content = {
    VIDEO: {
      title: "Our Video Invites are perfect for those who prefer elegant simplicity.",
      buttonText: "Create Video Invitation",
      mainImg: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500", // Replace with your video preview asset
      secondaryImg: weddingImg,
    },
    CARD: {
      title: "Our Card Invites are perfect for those who prefer elegant simplicity.",
      buttonText: "Create Card Invitation",
      mainImg: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=500", // Replace with your card preview asset
      secondaryImg: bdayImg,
    }
  };

  const current = content[activeTab];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Toggle Switch */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-100 p-1.5 rounded-full flex items-center shadow-inner">
            <button 
              onClick={() => setActiveTab('VIDEO')}
              className={`px-10 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'VIDEO' ? 'bg-pink-500 text-white shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
            >
              VIDEO
            </button>
            <button 
              onClick={() => setActiveTab('CARD')}
              className={`px-10 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'CARD' ? 'bg-pink-500 text-white shadow-md' : 'text-gray-500 hover:text-gray-700'}`}
            >
              CARD
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Layered Images */}
          <div className="relative h-[550px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
                className="relative w-full max-w-[400px]"
              >
                {/* Background Card */}
                <div className="absolute top-10 left-10 w-[80%] h-[400px] bg-white rounded-3xl shadow-xl border border-gray-100 -rotate-12 overflow-hidden">
                   <img src={current.secondaryImg} className="w-full h-full object-cover opacity-50" alt="background effect" />
                </div>

                {/* Main Front Card (Phone/Vertical Style) */}
                <div className="relative z-10 w-[280px] mx-auto h-[500px] bg-white rounded-[3rem] shadow-2xl border-[10px] border-gray-900 overflow-hidden">
                  <img src={current.mainImg} className="w-full h-full object-cover" alt="main preview" />
                  {activeTab === 'VIDEO' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-pink-500/90 rounded-full flex items-center justify-center text-white shadow-lg backdrop-blur-sm">
                        <Play fill="currentColor" size={28} className="ml-1" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Features List */}
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              {current.title}
            </h3>

            <div className="space-y-5">
              {[
                "Wide range of templates",
                "Customizable fonts and colors",
                "Ready to download and share instantly",
                "Perfect for print or digital use"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="text-orange-400 bg-orange-50 p-1.5 rounded-full group-hover:bg-orange-100 transition-colors">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="text-lg text-gray-600 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 border-2 border-pink-500 text-pink-500 px-8 py-3.5 rounded-full font-bold hover:bg-pink-500 hover:text-white transition-all duration-300 group">
              <span className="group-hover:rotate-12 transition-transform inline-block">✎</span> {current.buttonText}
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};



const Testimonials = () => {
  const reviews = [
    {
      name: "Vijai Pidinti",
      initials: "VP",
      color: "bg-green-600",
      text: "Created a Birthday Invitation video from this website and all my invitees liked the invitation video. Unique templates at affordable cost. Very Supportive staff and so just say Love it!"
    },
    {
      name: "Bharath Kumar",
      initials: "BK",
      color: "bg-orange-500",
      text: "Very good service by 24Invites.. They deliver very good quality works for very less price.. And also very user friendly for a normal person also to customise the video.."
    },
    {
      name: "Srinivasa Mahant",
      initials: "SM",
      color: "bg-purple-700",
      text: "Really nice interface, ease to make an invitation card. Good templates and formats Thanks for quickly responding on a query. Great customer service even on holidays :"
    }
  ];

  return (
    <section className="py-24 bg-pink-50/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section matching image 6a2daa */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight uppercase">
            WHAT OUR <span className="text-pink-600">CUSTOMERS SAY</span>
          </h2>
          <p className="mt-4 text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Discover why our users love creating personalized invitations with us. See their experiences and the joy they've shared through our platform
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start gap-4 transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                {/* Profile Initial Circle */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${review.color}`}>
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{review.name}</h3>
                  {/* Star Rating */}
                  <div className="flex text-orange-400 gap-0.5 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed mt-2 italic">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Carousel Controls matching image 6a2daa */}
        <div className="flex justify-center gap-4">
          <button className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-pink-100 hover:text-pink-600 transition-colors">
            {"<"}
          </button>
          <button className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500 hover:bg-pink-100 hover:text-pink-600 transition-colors">
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
};


const Categories = () => {
  const categories = [
    { title: "Wedding", img: weddingImg },
    { title: "Birthday", img: bdayImg },
    { title: "Baby & Kids", img: bkImg },
    { title: "House Warming", img: hwImg },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Popular Invitation Categories
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }} 
              className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-lg border-8 border-white group cursor-pointer bg-pink-50"
            >
              <img 
                src={cat.img} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <div className="bg-[#8D766A] text-white px-8 py-2.5 rounded-full text-sm font-bold shadow-md whitespace-nowrap">
                  {cat.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const BrowseCategories = () => {
  const categoryList = [
    { 
      title: "Wedding Invite", 
      desc: "Elegant video & card invites for your big day", 
      img: weImg 
    },
    { 
      title: "Birthday Invite", 
      desc: "Fun and colorful invites for all ages", 
      img: biImg
    },
    { 
      title: "Save the Date", 
      desc: "Celebrate your engagement with charm.", 
      img: saImg
    },
    { 
      title: "Engagement Ceremony", 
      desc: "Celebrate your engagement with charm.", 
      img: enImg 
    },
    { 
      title: "Anniversary", 
      desc: "Personalized invites for your special milestone.", 
      img: anImg 
    },
    { 
      title: "Baby Shower", 
      desc: "Adorable invites to welcome your little one.", 
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300" 
    },
    { 
      title: "Half Saree Ceremony", 
      desc: "Graceful invites for her traditional milestone.", 
      img: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?w=300" 
    },
    { 
      title: "Baptism Ceremony", 
      desc: "Heartfelt invites for a blessed occasion.", 
      img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=300" 
    },
    { 
      title: "Naming Naamkaran", 
      desc: "Joyful invites to announce your baby’s name.", 
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300" 
    },
    { 
      title: "Mundan Ceremony", 
      desc: "Traditional invites for your child’s ceremony.", 
      img: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?w=300" 
    },
    { 
      title: "House Warming", 
      desc: "Warm invites to celebrate your new home.", 
      img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=300" 
    },
    { 
      title: "Pooja", 
      desc: "Sacred invites for your spiritual gathering.", 
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300" 
    },
    { 
      title: "Dhoti Ceremony", 
      desc: "Traditional invites for this special occasion.", 
      img: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?w=300" 
    },
    { 
      title: "Thread Ceremony", 
      desc: "Elegant invites for your child’s milestone.", 
      img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=300" 
    },
    { 
      title: "Annaprashan", 
      desc: "Sweet invites to mark your baby’s first meal.", 
      img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=300" 
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section matching image 6a13dd */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight">
            BROWSE INVITATION <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-800 uppercase">Categories</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Find the perfect invitation for every occasion – from birthdays to weddings and everything in between. Explore our diverse collections now!
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {categoryList.map((item, index) => (
            <div key={index} className="text-center group cursor-pointer mt-9">
              {/* Rounded Image Card */}
              <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-pink-50/50 mb-3 border border-transparent transition-all group-hover:border-pink-200 group-hover:shadow-lg group-hover:-translate-y-2">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>

              {/* Text Info */}
              <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-pink-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed px-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Choose an Invite",
      desc: "Select Card or Video template from 1000+ beautiful designs",
      img: chooseImg
    },
    {
      number: "2",
      title: "Customize Your Invite",
      desc: "Add your details, choose music, colors, and language preference",
      img: cusImg
    },
    {
      number: "3",
      title: "Download & Share",
      desc: "Get your invite and a sharable link. Ready to wow your guests!",
      img: dowImg
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            HOW <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-800 uppercase">It Works</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Learn how to personalize your invitations in just 3 simple steps. No Skill is required!
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              
              {/* LARGE BACKGROUND NUMBER */}
              {/* text-gray-100/50 gives it that faint 'deep background' look */}
              <span className="absolute -top-12 md:-top-16 left-1/2 -translate-x-1/2 text-[180px] md:text-[220px] font-black text-gray-100/60 select-none -z-10 group-hover:text-pink-50 transition-colors duration-500">
                {step.number}
              </span>

              {/* FOREGROUND IMAGE */}
              <div className="relative z-10 w-48 h-48 md:w-56 md:h-56 mb-8 flex items-center justify-center">
                {/* Optional: Soft circle glow behind the image */}
                <div className="absolute inset-0 bg-gradient-to-b from-pink-50/50 to-transparent rounded-full scale-90 group-hover:scale-110 transition-transform duration-500 -z-10"></div>
                
                <img 
                  src={step.img} 
                  alt={step.title} 
                  className="w-full h-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:rotate-3"
                />
              </div>

              {/* TEXT CONTENT */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-800 mb-2 tracking-tight">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Video Tutorial Button */}
        <div className="flex justify-center">
          <button className="flex items-center gap-2 border-2 border-pink-500 text-pink-600 px-8 py-3 rounded-full font-bold hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-lg shadow-pink-50">
            <PlayCircle size={20} /> Watch Video Tutorial
          </button>
        </div>

      </div>
    </section>
  );
};


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Set first item open by default

  const faqData = [
    {
      q: "How do I create my Video Invitation?",
      a: "Once you customize the Video and enter all your details we will instantly generate a preview video (With a watermark) for you to check and verify the details before you make a final payment for it. Once you made a payment, the Video will be available to download. Also, you can download it from 'My Video' at any preferred time."
    },
    {
      q: "Can I get a Preview Video?",
      a: "Yes! You can generate a free watermarked preview to check your customization before completing the final purchase."
    },
    {
      q: "Can I customize the video further?",
      a: "Our templates offer extensive customization options including text, photos, and music to ensure your invite is perfect."
    },
    {
      q: "How to download my video invitation?",
      a: "After successful payment, go to the 'My Videos' section in your profile to find and download your high-resolution files."
    },
    {
      q: "Can I get a copy of the Video File?",
      a: "Absolutely. Once purchased, the high-quality MP4 file is yours to download and share as many times as you like."
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section matching image 6a29c7 */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight uppercase">
            FREQUENTLY ASKED <span className="text-pink-600">QUESTIONS</span>
          </h2>
          <p className="mt-4 text-gray-500 font-medium">
            Everything you need to know about creating digital invitations
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-pink-600' : 'text-gray-800'}`}>
                  {item.q}
                </span>
                <ChevronDown 
                  size={20} 
                  className={`text-pink-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-gray-500 leading-relaxed text-[15px]">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const PopularSearches = () => {
  const searches = [
    "Wedding Invitation Video Maker Online", "Indian Wedding Invitation Video with Music", 
    "Digital Wedding Invitation Video Design", "Traditional Indian Wedding Video Invitation",
    "Modern Wedding Video Invitation Templates", "Save the Date Digital Video Invitation",
    "Engagement Party Video Invitation Template", "Ring Ceremony Video Invitation with Photos",
    "Mehndi Ceremony Video Invitation Designs", "Haldi Function Video Invitation with Songs",
    "Sangeet Night Video Invitation Ideas", "Tilak Ceremony Video Invitation Cards", 
        "Wedding Reception Video Invitation Template",
        "Bridal Shower Video Invitation for Friends",
        "Roka Ceremony Video Invitation Design",
        "Pre Wedding Invitation Video with Couple Photos",
        "Marathi Wedding Video Invitation Templates",
        "Traditional Marathi Theme Wedding Invitation Video",
        "Sakharpuda Video Invitation in Marathi",
        "Marathi Engagement Video Invitation Online",
        "Marathi Marriage Video Card Maker",
        "Free Marathi Wedding Video Invitation Templates",
        "Hindi Wedding Invitation Video with Music",
        "Hindi Marriage Video Invitation Maker",
        "Hindi Wedding Video Invitation Templates",
        "Punjabi Wedding Invitation Video Download",
        "Punjabi Wedding Video Invitation Templates Free",
        "Rajasthani Wedding Video Invitation Maker",
        "Marwari Theme Wedding Video Invitation",
        "South Indian Wedding Invitation Video with Traditional Music",
        "Jain Wedding Video Invitation Templates",
        "Muslim Wedding Video Invitation Templates",
        "Christian Wedding Video Invitation Templates",
        "Bengali Wedding Video Invitation Templates",
        "Housewarming Video Invitation Card Online",
        "Grah Pravesh Video Invitation in Hindi",
        "New Home Digital Invitation Video",
        "Baby Shower Video Invitation with Cute Animations",
        "Godh Bharai Ceremony Video Invitation Templates",
        "Birthday Video Invitation Maker Online Free",
        "Birthday Greeting Video with Name and Photo",
        "Superhero Theme Birthday Video Invitation",
        "Anniversary Video Invitation Template Online",
        "Happy Anniversary Video Card with Music",
        "Devotional Function Video Invitation Templates",
        "Thank You Video Greeting for Friends & Family",
        "Congratulations Video Greeting Templates",
        "Birthday Wishes Video Greeting for Whatsapp",
        "Free Greeting Video Templates Online",
        "Create Personalized Greeting Videos Online",
        "Wedding Video Invitation Maker Tool",
        "Custom Wedding Invitation Video Online",
        "Premium Wedding Video Invitation Designs",
        "Online Video Invitation Maker Free",
        "Free Video Invitation Templates for All Occasions",
        "Buy Premium Invitation Video Online",
        "Digital Invitation Card Maker Online",
        "Video Greeting Maker Online Free",
        "Marathi Wedding Invitation Video with Traditional Them",
        "Haldi Ceremony Video Invitation with Bollywood Songs",
        "Punjabi Wedding Invitation Video Download Free",
        "Free Engagement Video Invitation Template in Hindi",
        "Housewarming Invitation Video in Marathi Language",
        "Digital Save the Date Video Invitation for Wedding",
        "Baby Shower Video Invitation Maker Online Free",
        "Superhero Theme Birthday Invitation Video for Kids",
        "Buy Premium Wedding Invitation Video Online",
        "Diwali Video Invitation Card Online",
        "Half Saree Ceremony Video Invitation Templates",
        "Baptism Video Invitation Templates for Church Ceremony",
        "Naamkaran Ceremony Digital Invitation Video",
        "Mundan Ceremony Video Invitation Designs",
        "Christmas Party Video Invitation Maker",
        "Pooja Ceremony Video Invitation Templates",
        "Dhoti Ceremony Video Invitation Templates",
        "Thread Ceremony Digital Video Invitation",
        "Muslim Wedding Video Invitation Maker",
        "Annaprashan Ceremony Video Invitation Templates",
        "Kitty Party Digital Video Invitation",
        "Grand Opening Video Invitation for Business",
        "Adult Milestone Celebration Video Invitation"
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl font-bold text-gray-800 mb-8">POPULAR SEARCHES</h2>
        <div className="flex flex-wrap gap-x-2 gap-y-3 text-sm text-gray-500 leading-relaxed">
          {searches.map((item, index) => (
            <span key={index} className="flex items-center gap-2 group">
              <a href="#" className="hover:text-pink-600 transition-colors cursor-pointer">
                {item}
              </a>
              {index !== searches.length - 1 && <span className="text-gray-300">|</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        {/* Branding Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-pink-500 rounded-tr-xl rounded-bl-xl rotate-12 flex items-center justify-center">
               <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-gray-800">123 <span className="font-light">Website</span></span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Leading digital invitation platform for creating stunning video and card invites for every special occasion.
          </p>
        </div>

        {/* Home/Sitemap Column */}
        <div>
          <h4 className="font-bold text-gray-800 mb-6 uppercase text-sm tracking-wider">Home</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pink-600">Sitemap</a></li>
            <li><a href="#" className="hover:text-pink-600">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-pink-600">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Video Invitations Column */}
        <div>
          <h4 className="font-bold text-gray-800 mb-6 uppercase text-sm tracking-wider">Video Invitations</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-pink-600">Wedding Invitations</a></li>
            <li><a href="#" className="hover:text-pink-600">Birthday Invitations</a></li>
            <li><a href="#" className="hover:text-pink-600">Anniversary Invitations</a></li>
          </ul>
        </div>

        {/* Contact Us Column matching image 5f2a9b */}
        <div>
          <h4 className="font-bold text-gray-800 mb-6 uppercase text-sm tracking-wider">Contact Us</h4>
          <div className="text-sm text-gray-500 space-y-3">
            <p>Have questions? <br /> <a href="mailto:support@123logo.com" className="text-pink-600 hover:underline">support@247invites.com</a></p>
            <p className="font-bold text-gray-800">+91 9999999999</p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-200 text-center text-xs text-gray-400">
        <p>© 2026 123 Invites. All rights reserved.</p>
      </div>
    </footer>
  );
};


const Hero = () => {
  return (
    <>
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[600px] bg-[radial-gradient(circle_at_center,_#fff1f2_0%,_transparent_70%)] -z-10 opacity-80"></div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
              ONLINE <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-800">INVITATION</span>
              <br />MAKER
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl leading-relaxed mb-10"
          >
            Create online invitations in minutes by choosing from thousands of 
            customizable templates for weddings, birthdays, and every occasion.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-pink-200 mb-20 relative z-30 transition-all"
          >
            Get Started for Free
          </motion.button>

          <div className="relative mt-12 max-w-5xl mx-auto h-[400px] md:h-[500px] flex items-end justify-center">
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-0 bottom-10 md:bottom-20 w-44 md:w-64 z-10 hidden sm:block"
            >
              <div className="bg-white p-2 rounded-2xl shadow-2xl border border-pink-50 -rotate-6 overflow-hidden">
                <img src={weddingImg} alt="Wedding Invite" className="rounded-xl w-full h-auto object-cover" />
              </div>
            </motion.div>

            <div className="relative w-full max-w-[750px] z-20 px-4">
              <div className="bg-gray-900 rounded-t-3xl p-2 shadow-[0_-20px_50px_-12px_rgba(236,72,153,0.3)]">
                <div className="bg-white rounded-t-2xl overflow-hidden border-b-[12px] border-gray-900">
                  <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1000" alt="Editor Interface" className="w-full h-auto" />
                </div>
              </div>
              <div className="absolute -top-4 right-10 bg-pink-500 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg shadow-pink-200 flex items-center gap-2">
                <span>✎</span> Invitation Card
              </div>
            </div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 bottom-12 md:bottom-24 w-44 md:w-64 z-10 hidden sm:block"
            >
              <div className="bg-white p-2 rounded-2xl shadow-2xl border border-pink-50 rotate-6 overflow-hidden">
                <img src={bdayImg} alt="Birthday Invite" className="rounded-xl w-full h-auto object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Categories />
      <Features />
      <BrowseCategories />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <PopularSearches />
      <Footer />
    </>
  );
};

export default Hero;