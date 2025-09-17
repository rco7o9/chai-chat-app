// libs
import { useRef, useState, useLayoutEffect } from "react";
import { Textarea } from "baseui/textarea";
import { Button } from "baseui/button";

// icons
import { FaArrowUp } from "react-icons/fa6";

const TEXT_AREA_OVERRIDES = {
  Root: {
    style: () => ({
      border: "none",
    }),
  },
};

const isOverflowing = (el: HTMLElement): boolean => {
  return el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;
};

export const ChatControls = () => {
  const [value, setValue] = useState<string>("");
  const rowsCountRef = useRef<number>(1);

  const textareaRef = useRef<HTMLTextAreaElement>(
    null as unknown as HTMLTextAreaElement, // have to do this here to pass baseweb's type requirement
  );

  useLayoutEffect(() => {
    if (
      textareaRef.current &&
      isOverflowing(textareaRef.current) &&
      rowsCountRef.current < 4
    ) {
      rowsCountRef.current += 1;
    }
  }, [value]);

  return (
    <div className="relative w-full flex gap-2 items-center">
      <Textarea
        inputRef={textareaRef}
        rows={rowsCountRef.current}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Type a message .."
        overrides={TEXT_AREA_OVERRIDES}
      />
      <div>
        <Button size="compact" shape="circle">
          <FaArrowUp size={18} />
        </Button>
      </div>
    </div>
  );
};
