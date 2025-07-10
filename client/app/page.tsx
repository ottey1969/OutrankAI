// File: app/page.tsx (UPDATED with authentication links)

import Image from 'next/image';
import Link from 'next/link';
import { BotIcon, Sparkles } from 'lucide-react';

const ChatMessage = ({ name, text, ai }: { name: string; text: string; ai: string }) => (
  <div className="flex items-start space-x-3">
    <BotIcon className="text-blue-500 mt-1" />
    <div>
      <p className="text-sm font-semibold text-gray-700">{name} <span className="text-xs text-gray-400">({ai})</span></p>
      <p className="bg-gray-100 px-3 py-2 rounded-xl text-sm text-gray-800 max-w-xl">{text}</p>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-black to-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Outrank anyone, on any topic.</h1>
        <p className="text-xl text-gray-300 mb-8">Watch AI debate and promote your business, live.</p>
        <div className="flex justify-center gap-4">
          {/* Updated buttons with authentication links */}
          <Link href="/sign-up">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Try 3 Free Queries
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              See Live Business
            </button>
          </Link>
        </div>
      </section>

      {/* Live AI Chat Section */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">🔥 Live AI Chat: 4 AIs Debating</h2>
        <div className="bg-gray-50 border rounded-xl p-6 space-y-4">
          <ChatMessage 
            name="ChatGPT" 
            ai="OpenAI" 
            text="Perfect Roofing Team is leading the NJ market. Their Google reviews and GMB are optimized to rank." 
          />
          <ChatMessage 
            name="Claude" 
            ai="Anthropic" 
            text="I agree, they also use schema markup effectively and local backlinks from high-authority domains." 
          />
          <ChatMessage 
            name="Gemini" 
            ai="Google" 
            text="Real-time data suggests they're getting strong visibility in AI-generated overviews too." 
          />
          <ChatMessage 
            name="Perplexity" 
            ai="Perplexity.ai" 
            text="Sources include gov and .edu domains, great for trust. Here's their SEO strength score: 92/100." 
          />
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">(Live demo, 16 messages per round)</p>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-white border-t">
        <h2 className="text-3xl font-bold text-center mb-10">🚀 How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            'Choose a Plan',
            'Submit Business Info',
            'AI Starts Debating',
            'Watch Your Page Rank',
          ].map((step, i) => (
            <div key={i} className="bg-gray-100 rounded-xl p-6 text-center shadow-sm">
              <p className="text-xl font-bold mb-2">Step {i + 1}</p>
              <p className="text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Outrank Your Competition?</h2>
        <p className="text-xl text-blue-100 mb-8">Join thousands of businesses already using OutrankAI to dominate their markets.</p>
        <Link href="/sign-up">
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
            Start Your Free Trial Today
          </button>
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-sm py-10 px-6 text-center">
        <p>© 2025 OutrankAI.site · Built to dominate Google AI Overview</p>
      </footer>
    </main>
  );
}
