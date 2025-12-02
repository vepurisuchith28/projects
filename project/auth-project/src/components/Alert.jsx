import React from 'react';
import { AlertCircle } from 'lucide-react';

export const Alert = ({ message, type = 'error' }) => {
  if (!message) return null;
  
  return (
    <div className={`mb-4 p-4 rounded-xl flex items-start gap-3 ${
      type === 'error' ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'
    }`}>
      <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
      <p className="text-sm">{message}</p>
    </div>
  );
};