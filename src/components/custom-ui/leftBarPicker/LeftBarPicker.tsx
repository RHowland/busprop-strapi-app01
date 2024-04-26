import useStore from "@/store";
import Image from "next/image";
import React from "react";

// section 1 
const options = [
  { value: "Bar 1", image: "Left_Bar1.png" },
  { value: "Bar 2", image: "Left_Bar2.jpg" },
  { value: "Bar 3", image: "Left_Bar3.jpg" },
  { value: "Bar 4", image: "Left_Bar4.png" },
];

const LeftBarPicker = () => {
  // section 2 
  const selectedBar = useStore((state: any) => state.leftBar);
  const setLeftBar = useStore((state: any) => state.setLeftBar);

  const handleOptionChange = (option) => {
    setLeftBar(option);
  };

  return (
    <div>
      <div>
        <h1>Pick Your Pdf LeftBar</h1>
      </div>
      <div className="flex justify-start items-center gap-5">
        {/* section 3  */}
        {options.map((option, index) => (
          <label key={index}>
            <input
              type="radio"
              value={option.value}
              checked={selectedBar.value === option.value}
              onChange={() => handleOptionChange(option)}
            />
            <div className="h-56 box-border overflow-hidden">
              <Image
                src={`/letterhead/leftBar/${option.image}`}
                alt="Bar Image"
                width={60}
                height={50}
              />
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default LeftBarPicker;


/**
 * ---------------------------------------------------------------------
 * File Name : LeftBarPicker.tsx
 * Component Name : LeftBarPicker
 * Component Type : Letter graphic picker
 * Dev Initials : Elias Emon
 * Date Created : 2024-04-26
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer: This component was created to provide users with a graphical picker interface to select a left bar option for their PDF documents. It offers a visual way to choose from different left bar designs, enhancing customization options for the PDF layout.
 * ------------------------------
 * Question: What does this component do?
 * Answer: The LeftBarPicker component allows users to pick a left bar design for their PDF documents. It presents a set of options with graphical representations of different left bar designs, enabling users to select their preferred option.
 *
 * ------------------------------
 * Section Comments:
 *
 * Section 1:
 * This section defines an array of options representing different left bar designs, each containing a value and an image path.
 * 
 *
 * Section 2:
 * This section retrieves the currently selected left bar option from the store and provides a function to update the selected option.
 * 
 *Section 3
 * This section maps over the options array and renders radio inputs for each option along with its graphical representation using the Next.js Image component.
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

