"use client";
import { Button } from "@/components/Button";
import { Logo } from "@/components/Logo";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const HandleStart = () => {
    console.log("Navigating to /questions/1");
    router.push("/questions/1"); // Route to the desired path
  };

  return (
    <div className="h-screen flex flex-col items-center bg-gradient-to-b from-transparent via-[#AF9CF3]/50 to-[#AF9CF3] bg-blend-multiply">
      <div className="mt-8">
        <Logo />
      </div>

      <div className="flex-grow flex justify-center items-center">
        <div className="flex justify-center items-center h-[198px] w-[216px] sm:h-[396px] sm:w-[432px] bg-white rounded-full">
          <span className="text-[#FF3B3F] poppins-extrabold text-4xl sm:text-7xl">
            Quiz
          </span>
        </div>
      </div>

      <Button label="Start" onClick={HandleStart} />
    </div>
  );
}
