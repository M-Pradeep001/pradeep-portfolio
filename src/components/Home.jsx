import React, { useState } from 'react';
import { Button } from './ui/button';
import ChatSidebar from './ChatSidebar';

function Home() {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <div className="flex-1 flex flex-col overflow-x-hidden">
      {/* Hero Text */}
      <div className="flex-1 flex items-center justify-start px-6 md:px-20 relative z-10">
        <div className="relative text-left leading-none font-[Arial] animate-slide-in w-full">
          <div className="relative z-10 max-w-full break-words">
            <h1 className="text-[48px] sm:text-[80px] md:text-[110px] lg:text-[140px] font-extrabold text-black leading-tight">
              Hi <span className="inline-block animate-wave ml-2">👋</span>
            </h1>
            <h1 className="text-[48px] sm:text-[80px] md:text-[110px] lg:text-[140px] font-extrabold text-black mt-2 leading-tight break-words">
              I'm Pradeep
            </h1>
          </div>
        </div>
      </div>

      {/* Floating Links (Email, Resume, LinkedIn, Chat) */}
      <div className="absolute bottom-8 right-8 flex flex-col items-end space-y-4 z-20">
        <a
          href="https://mail.google.com/mail/?view=cm&to=maddojupradeep002@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition-all duration-300 text-lg hover:scale-110 transform relative group"
        >
          E-mail
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </a>

        <a
          href="/Pradeeps%20Resume.pdf"
          download="Pradeep_Resume.pdf"
          className="text-gray-700 hover:text-black transition-all duration-300 text-lg hover:scale-110 transform relative group"
        >
          Resume
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </a>

        <a
          href=" https://www.linkedin.com/in/pradeep-m-076463272/ "
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition-all duration-300 text-lg hover:scale-110 transform relative group"
        >
          LinkedIn
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* New "Chat with Me" Button */}
        <Button
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300 text-lg relative group"
          onClick={() => setChatOpen(true)}
        >
          Chat with Me
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
        </Button>
        <ChatSidebar open={chatOpen} onOpenChange={setChatOpen} />
      </div>
    </div>
  );
}

export default Home;