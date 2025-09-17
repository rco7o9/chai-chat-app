// libs
import { useRef, useState, useLayoutEffect } from "react";
import { Textarea } from "baseui/textarea";
import { Button } from "baseui/button";

// icons
import { FaArrowUp } from "react-icons/fa6";

// types
import type { JSX } from "react";
import type { OnAction } from "@/hooks/useLLMChat";

const TEXT_AREA_OVERRIDES = {
  Root: {
    style: () => ({
      border: "none",
    }),
  },
};

const MAX_INPUT_ROWS = 4;

const isOverflowing = (el: HTMLElement): boolean => {
  return el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;
};

export const ChatControls = ({
  loading,
  onAction,
}: {
  loading: boolean;
  onAction: OnAction;
}): JSX.Element => {
  const [value, setValue] = useState<string>("");
  const rowsCountRef = useRef<number>(1);

  const textareaRef = useRef<HTMLTextAreaElement>(
    null as unknown as HTMLTextAreaElement, // have to do this here to pass baseweb's type requirement
  );

  useLayoutEffect(() => {
    if (
      textareaRef.current &&
      isOverflowing(textareaRef.current) &&
      rowsCountRef.current < MAX_INPUT_ROWS
    ) {
      rowsCountRef.current += 1;
    }
  }, [value]);

  const handleAction = () => {
    if (!loading) {
      rowsCountRef.current = 1;
      setValue("");

      onAction({
        type: "POST_MESSAGE",
        payload: value,
      });
    }
  };

  return (
    <div className="relative w-full flex gap-2 items-center">
      <Textarea
        placeholder="Type a message .."
        overrides={TEXT_AREA_OVERRIDES}
        disabled={loading}
        inputRef={textareaRef}
        rows={rowsCountRef.current}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleAction();
          }
        }}
      />
      <div>
        <Button
          size="compact"
          shape="circle"
          disabled={loading}
          onClick={handleAction}
        >
          <FaArrowUp size={18} />
        </Button>
      </div>
    </div>
  );
};
