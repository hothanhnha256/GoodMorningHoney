import Image from "next/image";
import Douloveme from "./components/Douloveme";
export default function Home() {
  return (
    <div className="flex  place-content-center place-items-center items-center h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="text-lg text-center sm:text-left text-black">
          Chúc chị yêu buổi tối vui vẻ nhóoooo
        </p>
        <div className="relative w-full pb-[56%]">
          <iframe
            src="https://giphy.com/embed/MDJ9IbxxvDUQM"
            className="absolute top-0 left-0 w-full h-full"
            allowFullScreen
          ></iframe>
        </div>

        <Douloveme />
      </main>
    </div>
  );
}
