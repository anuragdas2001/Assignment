import { NextRequest, NextResponse } from "next/server";
const questions = [
  {
    id: 1,
    question:
      "How do you judge what should be added in the next version of the app?",
    options: [
      "Data Analysis",
      "User Feedback",
      "Copy from a similar product",
      "Make a questionnaire",
      "Personal feeling",
    ],
    image: undefined,
    correctAnswer: "User Feedback",
  },
  {
    id: 2,
    question:
      "Which phase of the Software Development Life Cycle (SDLC) involves writing code to implement the design?",
    options: [
      "Testing",
      "Design",
      "Implementation",
      "Maintenance",
      "Requirement Gathering",
    ],
    image: "https://res.cloudinary.com/dgz1duuwu/image/upload/v1733063546/assignment/nuhot4ebqzc84cgujof7.png",
    correctAnswer: "Implementation",
  },
  {
    id: 3,
    question: "What is the primary goal of the Testing phase in the SDLC?",
    options: [
      "To define project goals",
      "To write the code",
      "To ensure the software works as expected",
      "To fix the user interface",
      "To deploy the app to production",
    ],
    image: undefined,
    correctAnswer: [
      "To ensure the software works as expected",
      "To fix the user interface",
    ],
  },
];
export async function GET() {
  return NextResponse.json(questions);
}
let score = 0;

export async function POST(req) {
  try {
    const body = await req.json(); // Parse incoming JSON data
    const { questionId, selectedChoices, timeTaken } = body;

    // Validate the incoming payload
    if (
      !questionId ||
      !Array.isArray(selectedChoices) ||
      typeof timeTaken !== "number"
    ) {
      return NextResponse.json(
        {
          error:
            "Invalid payload. Please provide questionId, selectedChoices, and timeTaken.",
        },
        { status: 400 }
      );
    }

    // Find the question by questionId
    const question = questions.find((q) => q.id === questionId);
    if (!question) {
      return NextResponse.json(
        { error: `Question with ID ${questionId} not found.` },
        { status: 404 }
      );
    }

    // Check if the selected choices are correct
    const correctAnswer = question.correctAnswer;
    let isCorrect = false;

    if (Array.isArray(correctAnswer)) {
      // If multiple correct answers, compare both arrays
      isCorrect =
        selectedChoices.length === correctAnswer.length &&
        selectedChoices.every((choice) => correctAnswer.includes(choice));
    } else {
      // If a single correct answer
      isCorrect =
        selectedChoices.length === 1 && selectedChoices[0] === correctAnswer;
    }
    if(score<0){
      score =0 ;
    }
    // If the answer is correct, increment the score
    if (isCorrect) {
      score++;
    } 
    else{
      if(score<0){
        score=0;
      }
      score--;
    }

    if(score<0){
      score=0;
    }

    const totalQuestion = questions.length;

    console.log("Received Data:", {
      questionId,
      selectedChoices,
      timeTaken,
      score,
    });

    // Response back to the client
    return NextResponse.json(
      { score, totalQuestion, message: "Submission successful!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
