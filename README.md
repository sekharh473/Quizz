# QuizMaster - Modern Quiz Web Application

A premium, responsive quiz application built with React.js, featuring real-time category fetching, dynamic question generation, and a sleek glassmorphism UI.

## Features

- **Dynamic Categories**: Fetches categories directly from Open Trivia Database.
- **Real-time Quiz**: 10 questions per quiz with a 15-second countdown timer per question.
- **Interactive UI**: Smooth animations using Framer Motion and a premium glassmorphism design.
- **Score Tracking**: Instant feedback on answers and a final result screen with performance stats.
- **Persistence**: Saves high scores per category and your last played category in LocalStorage.
- **Responsive**: Optimized for both mobile and desktop experiences.

## Tech Stack

- **Frontend**: React.js (Vite)
- **Styling**: Vanilla CSS with Design Tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Celebration**: Canvas Confetti
- **API**: Open Trivia Database

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

## Getting Started

1. **Clone or Download** the project.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run Development Server**:
   ```bash
   npm run dev
   ```
4. **Build for Production**:
   ```bash
   npm run build
   ```

## Folder Structure

- `src/components`: Reusable UI components (Timer, Progress, cards, etc.)
- `src/pages`: Main application screens (Home, Quiz)
- `src/utils`: API utilities and helper functions
- `src/assets`: Static assets and icons

## API Reference

This project uses the [Open Trivia DB API](https://opentdb.com/api_config.php).
- Categories: `https://opentdb.com/api_category.php`
- Questions: `https://opentdb.com/api.php?amount=10&category={ID}&difficulty=medium&type=multiple`


