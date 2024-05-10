// Component Name : ProposalGen
"use client";

import React from "react";
import {Document, StyleSheet  } from "@react-pdf/renderer";
import PageLayout from "./page/PageLayout";
import BusLetter from "./bus-letter/BusLetter";
import Table from "./table/Table";

const ProposalGen = ({
  isDownloadAble = false,
  pdfData

}: { isDownloadAble?: boolean , pdfData : any}) => {


  return (
    <Document
      creator="Rich Howland"
      producer="Rich Howland"
      pageMode="useThumbs"
    >
      {/* section 1  */}
      {pdfData.map((v : any ,index) =>{

        if(v.type === "letter"){
          return (
            <PageLayout isDownloadAble={isDownloadAble} key={index} >
              <BusLetter businessLetter={v}  />
              <br />
              <br />
              <br />
            </PageLayout>
          )
        }

        // section 2 
        if(v.type === "table"){
          return (
            <PageLayout  isDownloadAble={isDownloadAble} key={index}>
              <Table tableData={v}  />
              <br />
              <br />
              <br />
            </PageLayout>
          )
        }

      })}
    </Document>
  );
};

export default ProposalGen;

/**
 * ---------------------------------------------------------------------
 * File Name : ProposalGen.tsx
 * Component Name : ProposalGen
 * Component Type : Pdf Generation Component
 * Dev Initials : Elias Emon
 * Date Created : 2024-04-18
 * ------------------------------
  * Question: Why was it necessary to create this component?
 * Answer: This component was necessary to create because it serves as the main component for generating PDF proposals. It orchestrates the rendering of different types of content, such as business letters and tables, within the PDF document based on the provided data.
 *
 * ------------------------------
 * Question: What does this component do?
 * Answer: This component generates PDF proposals by iterating over the provided data array. For each item in the array, it determines the type of content (letter or table) and renders it accordingly using appropriate sub-components (BusLetter or Table). It wraps each content section with PageLayout for consistent styling and layout.
 *
 * ------------------------------
 * Section Comments:
 *
 * Section 1: Render Business Letters
 * Iterates over the PDF data array and renders business letters using the BusLetter sub-component if the type is "letter".
 * 
 * Section 2: Render Tables
 * Iterates over the PDF data array and renders tables using the Table sub-component if the type is "table".
 * 
 * ------------------------------
 * Input Comments:
 * Answer: The component accepts props including whether the PDF is downloadable and the PDF data array containing information about business letters and tables to be included in the proposal.
 *
 * ------------------------------
 * Output Comments:
 * Answer: None
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer: No unusual code was required for this component. It follows standard patterns for iterating over data and rendering dynamic content in React components.
 */