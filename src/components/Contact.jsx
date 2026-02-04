import { Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 py-10 border-b border-gray-50">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-12 p-8 md:p-16">
          
          {/* Left Side: Address Info */}
          <div className="text-left space-y-4">
            <h2 className="text-xl font-bold text-gray-800 uppercase tracking-wider">Address:</h2>
            <div className="text-gray-600 text-[15px] leading-relaxed">
              <p className="font-bold text-gray-800">247 Invites</p>
              <p>1765 Greensboro Station Place, Suite 900</p>
              <p>Mclean VA 22102</p>
              <a href="mailto:support@247invites.com" className="text-blue-500 hover:underline block mt-2">
                support@123website.com
              </a>
              <p className="mt-1">Phone: +91 9999999999</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <label className="w-32 text-gray-700 font-medium">Subject <span className="text-red-500">*</span>:</label>
              <select className="flex-1 border border-gray-300 rounded-md p-2.5 outline-none focus:ring-1 focus:ring-pink-500 bg-white">
                <option>Select Subject</option>
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Billing</option>
              </select>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <label className="w-32 text-gray-700 font-medium">Name <span className="text-red-500">*</span>:</label>
              <input type="text" placeholder="Enter your name" className="flex-1 border border-gray-300 rounded-md p-2.5 outline-none focus:ring-1 focus:ring-pink-500" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <label className="w-32 text-gray-700 font-medium">Email <span className="text-red-500">*</span>:</label>
              <input type="email" placeholder="example@example.com" className="flex-1 border border-gray-300 rounded-md p-2.5 outline-none focus:ring-1 focus:ring-pink-500" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <label className="w-32 text-gray-700 font-medium">Phone No. <span className="text-red-500">*</span>:</label>
              <input type="text" placeholder="Enter your phone number" className="flex-1 border border-gray-300 rounded-md p-2.5 outline-none focus:ring-1 focus:ring-pink-500" />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <label className="w-32 text-gray-700 font-medium pt-2">Message <span className="text-red-500">*</span>:</label>
              <textarea rows="4" placeholder="Enter your message" className="flex-1 border border-gray-300 rounded-md p-2.5 outline-none focus:ring-1 focus:ring-pink-500 resize-none"></textarea>
            </div>

            <div className="flex justify-end">
              <button type="submit" className="bg-pink-500 text-white px-10 py-3 rounded-md font-bold hover:bg-pink-600 transition shadow-lg shadow-pink-100">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;