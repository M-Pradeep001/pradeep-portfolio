import React, { useState, useRef, useEffect } from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerClose,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from './ui/drawer';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { X } from 'lucide-react';
import axios from 'axios';

function ChatSidebar({ open, onOpenChange }) {
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hi! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const scrollAreaRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom when messages update
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('[data-slot="scroll-area-viewport"]');
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, open]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const currentQuestion = input;
    const userMsg = { sender: 'user', text: currentQuestion };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    setSending(true);
    if (inputRef.current) inputRef.current.focus();

    try {
      console.log('🔹 Sending data to backend:');
      console.log('🧠 Question:', currentQuestion);

      // ✅ Send only the question, no embedding
      const response = await axios.post(
        'https://deep001-portfolio-bakcend.hf.space/chat',
        {
          question: currentQuestion,
        }
      );

      const botMsg = {
        sender: 'ai',
        text: response.data.answer || 'Sorry, I could not find an answer.'
      };
      setMessages((msgs) => [...msgs, botMsg]);
    } catch (error) {
      console.error('❌ Error during chat:', error);

      setMessages((msgs) => [
        ...msgs,
        {
          sender: 'ai',
          text: 'Sorry, there was an error connecting to the server.'
        }
      ]);
    } finally {
      setSending(false);
      if (inputRef.current) inputRef.current.focus();
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <Drawer open={open} onOpenChange={onOpenChange} direction="right">
      <DrawerContent className="max-w-full w-full sm:w-[400px] p-0 flex flex-col h-full shadow-lg bg-white rounded-l-2xl overflow-hidden">
        <DrawerHeader className="relative border-b px-4 py-3 bg-white sticky top-0 z-10">
          <DrawerTitle className="text-lg font-semibold text-gray-800">Chat with Me</DrawerTitle>
          <DrawerDescription>Ask anything about the portfolio</DrawerDescription>
          <DrawerClose asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close chat"
              className="absolute top-3 right-3 bg-gray-800 hover:bg-gray-900 rounded-full"
            >
              <X className="w-5 h-5 text-white" />
            </Button>
          </DrawerClose>
        </DrawerHeader>

        <div className="flex-1 flex flex-col overflow-hidden">
          <ScrollArea
            ref={scrollAreaRef}
            className="flex-1 px-4 py-3 overflow-y-auto"
            style={{ maxHeight: 'calc(100vh - 120px)' }}
          >
            <div className="flex flex-col gap-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[80%] rounded-lg px-4 py-3 text-base whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'ml-auto bg-black text-white'
                      : 'mr-auto bg-gray-200 text-gray-900'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {sending && (
                <div className="mr-auto bg-gray-200 text-gray-900 rounded-lg px-4 py-2 text-base opacity-70 animate-pulse max-w-[80%]">
                  ...
                </div>
              )}
            </div>
          </ScrollArea>
          <form
            className="flex items-center gap-3 border-t px-4 py-3 bg-white"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <Input
              ref={inputRef}
              className="flex-1 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
              disabled={sending}
              autoFocus={open}
            />
            <Button type="submit" disabled={sending || !input.trim()}>
              Send
            </Button>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default ChatSidebar;
