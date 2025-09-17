// libs
import { Heading, HeadingLevel } from "baseui/heading";

// types
import type { JSX } from "react";

export const Error = ({ error }: { error: string }): JSX.Element => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <HeadingLevel>
        <Heading styleLevel={6}>{error}</Heading>
      </HeadingLevel>
    </div>
  );
};
