// libs
import { Heading, HeadingLevel } from "baseui/heading";

// types
import type { JSX } from "react";

export const Placeholder = (): JSX.Element => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <HeadingLevel>
        <Heading styleLevel={2}>Hello 👋 </Heading>
      </HeadingLevel>
    </div>
  );
};
