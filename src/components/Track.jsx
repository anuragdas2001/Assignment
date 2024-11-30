"use client";
import { Button } from "./Button";
import { useState, useEffect } from "react";
import { Bar } from "./Bar";
import axios from "axios";
import { useRouter } from "next/navigation";
export function Track({ currentQuestion, onNext, totalQuestion }) {
  const [selectedOptions, setSelectedOptions] = useState([]); // Store multiple selected options
  const [correctAnswerStatus, setCorrectAnswerStatus] = useState({}); // Track correct/incorrect status for each selected option
  const [startTime, setStartTime] = useState(Date.now()); // Start time for tracking time taken
  const router = useRouter();
  // Handle option click (toggle selection)
  const handleOptionClick = (option) => {
    setSelectedOptions((prevSelectedOptions) => {
      if (prevSelectedOptions.includes(option)) {
        // Deselect option if already selected
        const updatedOptions = prevSelectedOptions.filter(
          (item) => item !== option
        );
        const updatedStatus = { ...correctAnswerStatus };
        delete updatedStatus[option]; // Remove its correct/incorrect status
        setCorrectAnswerStatus(updatedStatus);
        return updatedOptions;
      } else {
        // Select new option
        const updatedOptions = [...prevSelectedOptions, option];
        const updatedStatus = {
          ...correctAnswerStatus,
          [option]: currentQuestion.correctAnswer.includes(option),
        };
        setCorrectAnswerStatus(updatedStatus);
        return updatedOptions;
      }
    });
  };


  // Handle "Next" button click
  const handleNext = async () => {
    const timeTaken = (Date.now() - startTime) / 1000; // Calculate time taken in seconds

    // Prepare payload
    const payload = {
      questionId: currentQuestion.id,
      selectedChoices: selectedOptions,
      timeTaken,
    };

    try {
      const response = await axios.post("/api/quiz", payload);
      console.log("Answer submitted successfully", response.data);
      console.log("response", response);
      localStorage.setItem("score", response.data.score);
      localStorage.setItem("totalquestion", response.data.totalQuestion);
    } catch (error) {
      console.error(
        "Error submitting answer:",
        error.response?.data || error.message
      );
      alert("Failed to submit the answer. Please try again.");
      return;
    }

    // Proceed to the next question
    if (currentQuestion.id === totalQuestion) {
      router.push("/result");
      return;
    }
    onNext();
  };

  // Reset start time when the question changes
  useEffect(() => {
    setStartTime(Date.now());
    setSelectedOptions([]); // Clear selected options
    setCorrectAnswerStatus({}); // Reset correct/incorrect status
  }, [currentQuestion]);

  return (
    <div className="relative">
      <div className="bg-[#FFFFFF] h-32 w-32 sm:h-64 sm:w-64 flex justify-center items-center rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <Bar id={currentQuestion.id} totalQuestion={totalQuestion} />
      </div>
      <div className="bg-[#FFFFFF] rounded-t-3xl relative mt-20 w-auto h-screen">
        <div className="flex flex-col justify-center items-center">
          {/* Display question */}
          <div className="text-center p-5 mt-40 font-semibold text-xl">
            {currentQuestion.question}
          </div>

          {/* Display options */}
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedOptions.includes(option);
            const isCorrectAnswer = correctAnswerStatus[option]; // true if correct, false if incorrect

            return (
              <div
                key={index}
                className={`flex justify-start items-center m-5 px-2 h-20 w-10/12 rounded-2xl bg-[#F3F4FA] ${
                  isSelected
                    ? isCorrectAnswer
                      ? "border-2 border-[#44B77B]" // Green border for correct selection
                      : "border-2 border-red-500" // Red border for incorrect selection
                    : "border-slate-500" // Default border
                }`}
                onClick={() => handleOptionClick(option)} // Handle option selection
              >
                <div
                  className={`mx-5 h-6 w-6 md:h-8 md:w-8 rounded-full ${
                    isSelected
                      ? isCorrectAnswer
                        ? "bg-[#44B77B] flex justify-center items-center" // Green background and center the checkmark
                        : "bg-red-500 flex justify-center items-center"
                      : "border-2 border-slate-500 bg-[#F3F4FA]" // Default circle
                  }`}
                >
                  {isSelected && isCorrectAnswer ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-white" // White checkmark
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  ) : isSelected && !isCorrectAnswer ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 text-white" // White cross
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <div className="rounded-full border-slate-500"></div> // Default circle
                  )}
                </div>
                <div className="text-xl">{option}</div>
              </div>
            );
          })}

          {/* "Next" button */}
          <Button label="Next" onClick={handleNext} />
        </div>
      </div>
    </div>
  );
}
