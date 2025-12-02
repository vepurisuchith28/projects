# AuthFlow - Authentication System

A modern authentication system built with React and Supabase.

## Features

- ✨ User Registration (Sign Up)
- 🔐 User Login
- 📊 User Dashboard
- 🎨 Beautiful UI with Tailwind CSS
- 🔒 Secure authentication with Supabase

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Supabase account

## Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/auth-project.git
cd auth-project
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Configure Supabase:
   - Update `src/config/supabase.config.js` with your Supabase credentials
   - Or use environment variables (recommended)

4. Start the development server:
\`\`\`bash
npm start
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Supabase Setup

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Create a new project or use existing one
3. Navigate to Settings → API
4. Copy your Project URL and anon/public key
5. Enable Email authentication in Authentication → Providers
6. (Optional) Disable email confirmation for testing

## Project Structure

- `src/components/` - React components
- `src/services/` - API and service files
- `src/config/` - Configuration files
- `public/` - Static files

## Technologies Used

- React 18
- Supabase
- Tailwind CSS
- Lucide React Icons

## License

MIT License

## Contributing

Pull requests are welcome!