This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

# Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

# API Endpoints

## GET /api/quiz

Description: Fetches all the questions along with the options and correct answers.
Response: A JSON array of questions.

## POST /api/quiz

Description: Submits the user's answers and calculates their score.
Request Body: { "questionId": 1, "selectedChoices": ["User Feedback"], "timeTaken": 120 }
Response: Returns the updated score and the total number of questions.

# Docker Setup

You can also containerize the app using Docker. Here’s how:

1. Build the Docker image:
   In the root of the project, build the Docker image with:
   bash
   Copy code
   docker build -t quiz-app .

2. Run the Docker container:
   Run the container and expose port 3000:

bash
Copy code
docker run -p 3000:3000 quiz-app
Now you can visit the app at http://localhost:3000.

# Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Code Quality & Best Practices
Clean Code: The code is written with readability and maintainability in mind. Comments and documentation are provided where necessary.
Component-Based Design: The app is split into reusable components.
State Management: Uses React’s built-in state management with hooks (useState, useEffect).
RESTful API Design: The API follows REST principles for data fetching and submission.

# Acknowledgments
Next.js for providing the framework.
Tailwind CSS for styling.
Vercel for seamless deployment.