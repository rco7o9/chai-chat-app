// types
import { JSX } from "react";

// images
import background from "@/assets/space.png";

export const ChatWidget = (): JSX.Element => {
  return (
    <div
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundSize: "cover",
        boxShadow: "1px 1px 24px #343333",
      }}
      className="relative h-full w-lg m-auto p-4 rounded-xl flex flex-col justify-between gap-10"
    >
      <div>chat body</div>
      <div>chat controls</div>
    </div>
  );
};
