import React, { useState } from "react";
import { SubmitButton } from "./Buttons";
import RatingInput from "./RatingInput";

const Card: React.FC = () => {
  const [score, setScore] = useState<number | null>(null);
  // console.log(score);
  const [isSubmit, setIsSubmit] = useState(false);

  return (
    <main
      role="form"
      aria-labelledby="rating-card"
      className="max-w-81.75 max-h-90 bg-gradient-1 text-white p-6  rounded-[15px] md:max-w-103 md:max-h-104"
    >
      {!isSubmit ? (
        <>
          <div
            aria-hidden="true"
            className="w-10 h-10 bg-grey-900 flex items-center justify-center rounded-full md:w-12 md:h-12"
          >
            <img src="/images/icon-star.svg" alt="star icon" />
          </div>
          <div className="my-6 md:my-8">
            <h1 id="rating-title" className="text-preset-2 md:text-preset-1">
              How did we do?
            </h1>
            <p
              id="rating-description"
              className="text-preset-5 md:text-preset-4 text-grey-500 my-4"
            >
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
            <fieldset>
              <legend className="sr-only">Rate from 1 to 5</legend>
              <div className="flex items-center justify-around">
                {[1, 2, 3, 4, 5].map((num, index) => (
                  <RatingInput
                    key={index}
                    name="rating"
                    value={num}
                    index={index}
                    setScore={setScore}
                  />
                ))}
              </div>
            </fieldset>
          </div>
          <SubmitButton
            submitText="submit"
            score={score}
            setIsSubmit={setIsSubmit}
          />
        </>
      ) : (
        <>
          <div className="flex items-center justify-center">
            <img
              src="/images/illustration-thank-you.svg"
              alt="thank you for rating"
            />
          </div>
          <div
            role="status"
            aria-live="polite"
            className="bg-[#262E38] rounded-full px-4 h-8 flex items-center my-6 justify-center"
          >
            <p className="text-orange-500 text-preset-5 md:text-preset-4 ">
              You selected {score} out of 5
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-preset-2 md:text-preset-1">Thank you!</h1>
            <p className="text-grey-500 text-preset-5 md:text-preset-4">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </p>
          </div>
        </>
      )}
    </main>
  );
};
export default Card;
