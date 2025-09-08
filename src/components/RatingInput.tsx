import React, { useRef } from "react";

const RatingInput = ({
  name,
  value,
  index,
  setScore,
}: {
  name: string;
  value: string | number;
  index: number;
  setScore: React.Dispatch<React.SetStateAction<number | null>>;
}) => {
  const radioRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (index + 1) % 5;
      radioRefs.current[nextIndex]?.focus();
      setScore(nextIndex + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (index - 1 + 5) % 5;
      radioRefs.current[prevIndex]?.focus();
      setScore(prevIndex + 1);
    }
  };
  return (
    <label className="w-10 h-10 rounded-full bg-grey-900 flex items-center justify-center text-preset-5-bold text-grey-500 md:w-[51px] md:h-[51px] md:text-preset-3 hover:bg-white hover:text-grey-900 hover:cursor-pointer has-[:checked]:bg-orange-500 has-[:checked]:text-grey-900">
      <input
        type="radio"
        name={name}
        value={value}
        // ref={(el) => (radioRefs.current[index] = el)}
        onChange={() => {
          setScore(Number(value));
        }}
        onKeyDown={(e) => handleKeyDown(e, index)}
        role="radio"
        aria-label={`Rate ${value} out of 5`}
        required
        className="sr-only"
      />
      {value}
    </label>
  );
};
export default RatingInput;
