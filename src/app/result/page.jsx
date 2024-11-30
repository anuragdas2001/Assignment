"use client";
import { useEffect ,useState} from "react";
import { Pop } from "@/components/pop";
import { Button } from "@/components/Button";
import { ScoreMeter } from "@/components/scoremeter";
import { useRouter } from "next/navigation";
export default function Result() {
    const [score, setScore] = useState(null);
    const [totalQuestion, setTotalQuestion] = useState(null);
    const [incorrect, setIncorrect] = useState(null);
  const router = useRouter();
  const handleFinish = () => {
    router.push("/");
  };
  useEffect(() => {
    // Check if we're on the client side (in the browser)
    const correctAnswer = localStorage.getItem("score");
    const total = localStorage.getItem("totalquestion");

    if (correctAnswer && total) {
      setScore(correctAnswer);
      setTotalQuestion(total);
      setIncorrect(total - correctAnswer);
    }
  }, []); // Empty dependency array ensures this runs only once, after the component mounts

  return (
    <div className="h-auto w-screen bg-[#AF9CF3]">
      <Pop />
      <div className="relative">
        <div className="bg-[#FFFFFF] rounded-t-3xl relative mt-10 w-auto h-screen">
          <div className="flex flex-col justify-center items-center">
            <div className="text-center h-14 p-10 font-semibold text-4xl nunito-normal-800">
              Your result
            </div>
            <div className="">
              <ScoreMeter />
            </div>
            <div className="h-16 md:h-32 w-10/12 source-code-pro-600 bg-green-100 rounded-3xl m-4 px-10 flex justify-start items-center">
              <div className="bg-green-500 h-6 w-6 md:h-8 md:w-8 rounded-full mx-5"></div>
              <span className="source-code-pro-700 me-4">{score}</span>
              <span className="source-code-pro-600">Correct</span>
            </div>
            <div className="h-16 md:h-32 w-10/12 source-code-pro-600 bg-red-100 rounded-3xl m-4 px-10 flex justify-start items-center">
              <div className="bg-red-500 h-6 w-6 md:h-8 md:w-8 rounded-full mx-5"></div>
              <span className="source-code-pro-700 me-4">{incorrect}</span>
              <span className="source-code-pro-600">InCorrect</span>
            </div>
            <Button label="Start Again" onClick={handleFinish} />
          </div>
        </div>
      </div>
    </div>
  );
}
