// Supabase Configuration
// For production, use environment variables instead

export const SUPABASE_CONFIG = {
  url: process.env.REACT_APP_SUPABASE_URL || 'https://nffjvjulrnqxwnibyfhe.supabase.co',
  anonKey: process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mZmp2anVscm5xeHduaWJ5ZmhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1NDUxODQsImV4cCI6MjA4MDEyMTE4NH0.6pdy1oKFKIL8VU60B-nrR50f5hA1NN8WUQ4z9FIbLRE'
};

// Note: For production deployment, create a .env file with:
// REACT_APP_SUPABASE_URL=your_supabase_url
// REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key