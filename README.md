# Mase Performance Blog

Welcome to **Mase Performance**, a web application dedicated to bringing users sports articles and live news updates across various categories like general sports, basketball, and NFL football. This app is built with Vite, React, Firebase Authentication, Firestore, and leverages several RapidAPI sports news APIs.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [License](#license)

## Demo

Check out the live application: [Mase Performance](https://simple-blog-1c09d.web.app/)

## Features

- **Firebase Authentication**: Users can sign in and sign out using Firebase Authentication.
- **Dynamic Content**: Articles and live sports news updates across general sports, basketball, and NFL.
- **Tabs and Navigation**: Switch between different sports categories.
- **CRUD Operations**: Users can add, view, and edit articles when signed in.

## Tech Stack

- **Frontend**: Vite, React, CSS
- **Backend**: Firebase Firestore, Firebase Authentication
- **APIs**: RapidAPI for sports news and live scores

## Installation

To install and run the application locally, follow these steps:

1. Clone the repository:

   \`\`\`bash
   git clone https://github.com/yourusername/mase-performance.git
   cd mase-performance
   \`\`\`

2. Install dependencies:

   \`\`\`bash
   npm install
   \`\`\`

3. Run the application:

   \`\`\`bash
   npm run dev
   \`\`\`

4. To build for production:

   \`\`\`bash
   npm run build
   \`\`\`

## Environment Variables

To run this project, you need to set up environment variables. Create a \`.env\` file in the root directory and add the following:

\`\`\`plaintext
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_RAPIDAPI_KEY=your_rapidapi_key
\`\`\`

## Usage

1. **Sign In/Sign Out**: Access the application’s full functionality by signing in with Firebase Authentication.
2. **Add Articles**: Authenticated users can add new articles by clicking "New Article" in the sidebar.
3. **Switch Tabs**: Explore different news categories by switching between General News, Basketball News, and NFL Football.

## License

This project is licensed under the MIT License. See the \`LICENSE\` file for details.

