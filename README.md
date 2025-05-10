# Coder Interview App

A web application designed to assist developers in preparing for coding interviews by providing a platform to practice and enhance their skills.

## Features

- **Interactive Coding Challenges**: Engage with a variety of coding problems to test and improve your problem-solving abilities.
- **Real-time Feedback**: Receive immediate feedback on your solutions to understand areas of improvement.
- **Progress Tracking**: Monitor your progress over time to identify strengths and weaknesses.
- **User Authentication**: Secure login and registration system to personalize your experience.

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) – A React framework for server-side rendering and generating static websites.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) – A utility-first CSS framework for rapid UI development.
- **TypeScript**: Provides static typing to enhance code quality and developer experience.
- **Convex**: Utilized for backend functionalities and data management.
- **Clerk**: The authentication service for the app.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/JAl-Hassani/coder-interview-app.git
   cd coder-interview-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the necessary environment variables:

   ```env
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   ```

   Replace `your_convex_url` with your actual Convex backend URL.

4. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
coder-interview-app/
├── convex/             # Convex backend functions
├── public/             # Static assets
├── src/                # Source code
│   ├── actions/        # Stream actions
│   ├── app/            # Next.js app directory
│   ├── components/     # Reusable UI components
│   ├── constants/      # Constants for the app
│   ├── hooks/          # Interact with Stream
│   └── lib/            # Convex utility functions
├── .env                # Environment variables
├── .env.local          # Environment variables
├── next.config.mjs     # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Project metadata and scripts
```
