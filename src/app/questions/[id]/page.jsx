"use client";
import { Pop } from "@/components/pop";
import axios from "axios";
import { Track } from "@/components/Track";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function Questions() {
  const { id } = useParams(); // Get the current question ID from the URL
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState([]); // Store all quiz data
  const [currentQuestion, setCurrentQuestion] = useState(null); // Store current question data
  const [totalQuestion,setTotalQuestion] = useState(null);
  // Fetch quiz data
  const FetchQuiz = async () => {
    try {
      const response = await axios.get("/api/quiz");
      setQuiz(response.data);
      // Automatically set the current question based on the ID param
      const questionId = Number(id); // Convert `id` from string to number
      const question = response.data.find((q) => q.id === questionId);
      setCurrentQuestion(question);
        setTotalQuestion(response.data.length)
      } catch (error) {
      console.error("Error fetching quiz data:", error);
    } 
    finally{
      setLoading(false)
    }
  };
console.log(quiz)
console.log(totalQuestion);

  useEffect(() => {
    if(id === currentQuestion?.id){
      router.push("/result")
    }
    FetchQuiz();
  }, [id]); // Re-run when the `id` parameter changes

  // Handle "Next" button click
  const handleNext = () => {
    const nextQuestionId = Number(id) + 1; // Increment the ID
    router.push(`/questions/${nextQuestionId}`); // Update the URL
  };

  return (
    <div className="h-auto w-auto bg-[#AF9CF3]">
      <Pop />
      {currentQuestion ? (
        <Track currentQuestion={currentQuestion} onNext={handleNext} loading={loading} totalQuestion={totalQuestion}/>
      ) : null}
    </div>
  );
}
