# Mango 📚

**A modern book borrowing platform with smart discovery and secure authentication.**

Mango is a full-stack book borrowing web app where users can browse a curated library, search for titles, and filter by category to find exactly what they want to read. Backed by MongoDB for persistent data storage and BetterAuth for secure login, it combines a smooth reading discovery experience with a reliable, production-ready foundation.

🔗 **Live Site:** [mango-swart-five.vercel.app](https://mango-swart-five.vercel.app)

---

## Features

**Book Search & Category Filtering :**
Users can search for any book by name and narrow results by category, making it easy to find a specific title or explore a genre without scrolling through the entire library.

**Book Borrowing System :**
Browse the full collection and borrow books directly through the platform. Borrowed books are tracked per user and stored in MongoDB, keeping the library state accurate and up to date.

**Secure Authentication with Google Login :**
Users can sign up with an email and password or log in instantly with their Google account — both powered by BetterAuth for a secure, seamless auth experience.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | Full-stack React framework |
| MongoDB | Database for books and user data |
| BetterAuth | Authentication and session management |
| Tailwind CSS + DaisyUI | Styling and components |
| JavaScript (ES6+) | Application logic |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm (included with Node.js)
- A MongoDB connection string
- BetterAuth credentials (and Google OAuth credentials if using Google login)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Msayeem/mango.git

# 2. Navigate into the project folder
cd mango

# 3. Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root of the project and add the following:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=your_betterauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.
