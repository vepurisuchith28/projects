import React from 'react';
import { Activity } from 'lucide-react';

export const Logo = () => (
  <div className="flex items-center justify-center mb-8">
    <div className="relative">
      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
        <Activity className="w-8 h-8 text-white" strokeWidth={2.5} />
      </div>
      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full border-4 border-white"></div>
    </div>
    <h1 className="ml-4 text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
      AuthFlow
    </h1>
  </div>
);