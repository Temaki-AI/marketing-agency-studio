'use client';

import { useState, useRef, useEffect } from 'react';
import { Heart, Send, FileText, Sparkles } from 'lucide-react';

type Message = {
  role: 'user' | 'assistant' | 'system';
  content: string;
  agent?: string;
};

type ProgressItem = {
  level: string;
  status: 'complete' | 'in-progress' | 'locked';
  skills: string[];
};

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'system',
      content: 'Welcome to Marketing Agency AI Studio! Run /start to begin, or click a skill below.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [progress] = useState<ProgressItem[]>([
    {
      level: 'Brand Foundation',
      status: 'locked',
      skills: ['/brand-workshop'],
    },
    {
      level: 'Content & Social',
      status: 'locked',
      skills: ['/content-strategy', '/social-strategy'],
    },
    {
      level: 'Paid Campaigns',
      status: 'locked',
      skills: ['/campaign-brief', '/ad-copy-review'],
    },
  ]);

  const quickSkills = [
    { name: '/start', desc: 'Onboarding' },
    { name: '/brand-workshop', desc: 'Brand foundation' },
    { name: '/content-strategy', desc: 'Editorial planning' },
    { name: '/campaign-brief', desc: 'Campaign planning' },
    { name: '/ad-copy-review', desc: 'Review copy' },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function handleSend() {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: userMessage }],
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: data.response,
          agent: data.agent,
        },
      ]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'system',
          content: 'Error communicating with AI. Check console for details.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSkillClick(skill: string) {
    setInput(skill);
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-rose-50 to-pink-50 border-r border-rose-100 p-6 flex flex-col">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-6 h-6 text-rose-500" fill="currentColor" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Marketing Studio
            </h1>
          </div>
          <p className="text-sm text-gray-600">32 specialized agents</p>
        </div>

        <div className="flex-1 space-y-6">
          <div>
            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-3">Progress</h3>
            <div className="space-y-3">
              {progress.map((item, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2 mb-1">
                    {item.status === 'complete' && (
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                    )}
                    {item.status === 'in-progress' && (
                      <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                    )}
                    {item.status === 'locked' && (
                      <div className="w-2 h-2 rounded-full bg-gray-300" />
                    )}
                    <span className="text-sm font-medium text-gray-700">{item.level}</span>
                  </div>
                  <div className="ml-4 space-y-1">
                    {item.skills.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => handleSkillClick(skill)}
                        className="block text-xs text-gray-500 hover:text-rose-600 transition-colors"
                        disabled={item.status === 'locked'}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase text-gray-500 mb-3">Quick Skills</h3>
            <div className="space-y-2">
              {quickSkills.map((skill) => (
                <button
                  key={skill.name}
                  onClick={() => handleSkillClick(skill.name)}
                  className="w-full text-left px-3 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all text-sm"
                >
                  <div className="font-medium text-gray-700">{skill.name}</div>
                  <div className="text-xs text-gray-500">{skill.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-rose-100">
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-rose-600 transition-colors">
            <FileText className="w-4 h-4" />
            <span>View Generated Files</span>
          </button>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-2xl ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white'
                    : msg.role === 'system'
                    ? 'bg-gray-100 text-gray-700 border border-gray-200'
                    : 'bg-white text-gray-900 shadow-sm border border-gray-100'
                } rounded-2xl px-4 py-3`}
              >
                {msg.agent && (
                  <div className="text-xs font-semibold text-rose-600 mb-1">
                    [{msg.agent}]
                  </div>
                )}
                <div className="whitespace-pre-wrap">{msg.content}</div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-white rounded-2xl px-4 py-3 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 text-gray-500">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  <span className="text-sm">Thinking...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 p-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Type a message or skill (e.g., /start)..."
                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all"
                disabled={loading}
              />
              <button
                onClick={handleSend}
                disabled={loading || !input.trim()}
                className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Marketing Agency AI Studio • 32 Agents • Enforced workflow sequencing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
