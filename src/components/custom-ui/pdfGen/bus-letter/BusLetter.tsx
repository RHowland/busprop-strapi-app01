import React from "react";
import { Text, View ,StyleSheet } from "@react-pdf/renderer";


// section 1 
const styles = StyleSheet.create({
  heading: {
    fontSize:  24,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "justify",
  },
  text: {
    fontSize:  16,
    textAlign: "justify",
    color: "rgba(0,0,0,0.8)",
  },
});


export interface IBusLetter{
  type: string;
  letter: string;
  sectionHeading?: string;
}

const BusLetter = ({
  businessLetter
}: { businessLetter: IBusLetter }) => {
  
  // section 2 
  const finalBusLetter = businessLetter.letter.split("\n");

  return (
    <View>
      <View>
        {/* section 3  */}
      {
        businessLetter.sectionHeading && (
          <Text style={styles.heading}> 
          {
            businessLetter.sectionHeading
          }
          <br />
        </Text>
        )
      }
      </View>
      {/* section 4  */}
      <View>
        {finalBusLetter.map((v , index)=> (
          <Text style={styles.text} key={index+Math.random()}> 
            {
              v + " "
            }
            <br />
          </Text>
        ))}
      </View>
      
      
    </View>
  );
};

export default BusLetter;

/**
 * ---------------------------------------------------------------------
 * File Name : BusLetter.tsx
 * Component Name : BusLetter
 * Component Type : Pdf Generation Component
 * Dev Initials : Elias Emon
 * Date Created : 2024-05-09
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer: This component was necessary to create because it facilitates the generation of business letters within a PDF document. By encapsulating letter rendering logic, it enhances code readability, maintainability, and reusability across the application.
 *
 * ------------------------------
 * Question: What does this component do?
 * Answer: This component renders business letters within a PDF document based on the provided letter content. It supports rendering section headings and text content with customizable styles.
 *
 * ------------------------------
 * Section Comments:
 *
 * Section 1: Styles
 * Defines the styles used for rendering headings and text within the business letter.
 * 
 * Section 2: Split Letter
 * Splits the letter content into an array of paragraphs based on newline characters for rendering.
 * 
 * Section 3: Section Heading
 * Renders the section heading if provided in the business letter data. It applies the heading style defined in Section 1.
 * 
 * Section 4: Render Letter Content
 * Iterates over the split letter content and renders each paragraph as text with the specified text style.
 *
 *
 * ------------------------------
 * Input Comments:
 * Answer: None
 *
 * ------------------------------
 * Output Comments:
 * Answer: None
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer: No unusual code was required for this component. It follows typical patterns for rendering text content within a PDF document.
 *
 */