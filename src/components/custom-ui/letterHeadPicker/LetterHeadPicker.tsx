import useStore from "@/store";
import Image from "next/image";
import React from "react";

const options = [
  { value: "Header 1", image: "Header1.png" },
  { value: "Header 2", image: "Header2.png" },
];

const LetterHeadPicker = () => {
  const selectedLetterHead = useStore((state: any) => state.letterHead);
  const setLetterHead = useStore((state: any) => state.setLetterHead);

  const handleOptionChange = (option) => {
    setLetterHead(option);
  };

  return (
    <div>
      <div>
        <h1>Pick Your Pdf Letter Head</h1>
      </div>
      <div>
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              value={option.value}
              checked={selectedLetterHead.value === option.value}
              onChange={() => handleOptionChange(option)}
            />
            <div>
              <Image
                src={`/letterhead/header/${option.image}`}
                alt="Header Image"
                width={900}
                height={400}
              />
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default LetterHeadPicker;

/**
 * ---------------------------------------------------------------------
 * File Name : LetterHeadPicker.tsx
 * Component Name : LetterHeadPicker
 * Component Type : Letter graphic picker
 * Dev Initials : Elias Emon
 * Date Created : 2024-04-26
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer: This component was created to provide users with a graphical picker interface to select a letterhead option for their PDF documents. It offers a visual way to choose from different letterhead designs, enhancing customization options for the PDF layout.
 * ------------------------------
 * Question: What does this component do?
 * Answer: The LetterHeadPicker component allows users to pick a letterhead design for their PDF documents. It presents a set of options with graphical representations of different letterhead designs, enabling users to select their preferred option.
 *
 * ------------------------------
 * Section Comments:
 *
 * Section 1:
 * This section defines an array of options representing different letterhead designs, each containing a value and an image path.
 * 
 *
 * Section 2:
 * This section retrieves the currently selected letterhead option from the store and provides a function to update the selected option.
 * 
 * Section 3
 * This section maps over the options array and renders radio inputs for each option along with its graphical representation using the Next.js Image component.
 * 
 * ------------------------------
 * Input Comments:
 * None
 * ------------------------------
 * Output Comments:
 * None
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer: No unusual code was written for this component. It follows standard React patterns for handling state and rendering components.
 *
 */