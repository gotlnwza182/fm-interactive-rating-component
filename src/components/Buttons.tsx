export const SubmitButton = ({
  submitText,
  score,
  setIsSubmit,
}: {
  submitText: string;
  score: number | null;
  setIsSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const handleSubmit = () => {
    if (score !== null) {
      setIsSubmit(true);
    }
  };
  return (
    <button
      onClick={handleSubmit}
      disabled={score === null}
      aria-label="Submit your rating"
      className=" uppercase text-grey-950 text-preset-5-bold bg-orange-500 rounded-[22.5px] w-full py-4 md:py-2.5 md:text-preset-5-semiBold hover:bg-white hover:cursor-pointer active:bg-white"
    >
      {submitText}
    </button>
  );
};
