// Component Name : ProposalGen
"use client";

import React from "react";
import { Page, Text, View, Document, StyleSheet  } from "@react-pdf/renderer";
import PageLayout from "./page/PageLayout";
import BusLetter from "./bus-letter/BusLetter";
import Proposal from "./proposal/Proposal";
import useStore from "@/store";

const ProposalGen = ({
  isDownloadAble = false,
  leftBar,
  letterHead
}: { isDownloadAble?: boolean  , leftBar : string , letterHead : string}) => {
  // section 1
  const styles = StyleSheet.create({
    header: {
      fontSize: isDownloadAble ? 18 : 24,
      marginBottom: 20,
      textAlign: "justify",
    },

    subHeading: {
      fontSize: isDownloadAble ? 16 : 22,
      textAlign: "justify",
    },

    body: {
      paddingTop: 50,
      paddingBottom: 30,
      paddingHorizontal: 45,
    },
    text: {
      fontSize: isDownloadAble ? 14 : 18,
      textAlign: "justify",
      width: "100%",
      color: "rgba(0,0,0,0.8)",
    },
    websiteFeature: {
      display: "flex",
      marginBottom: 10,
      flexDirection: "row",
      gap: 10,
    },
    feature: {
      display: "flex",
      flexDirection: "row",
      gap: 20,
    },
    featureColTitle: {
      flexBasis: isDownloadAble ? "40%" : "25%",
    },
    featureColDes: {
      flexBasis: isDownloadAble ? "60%" : "45%",
    },
  });

  return (
    <Document
      creator="Rich Howland"
      producer="Rich Howland"
      pageMode="useThumbs"
    >
      {/* section 1  */}
      <PageLayout leftBar={leftBar} letterHead={letterHead}>
        <BusLetter isDownloadAble={isDownloadAble} />
      </PageLayout>

      {!isDownloadAble && (
        <>
          <br />
          <br />
          <br />
        </>
      )}
      {/* section 2 */}
      <PageLayout leftBar={leftBar} letterHead={letterHead}>
        <Proposal isDownloadAble={isDownloadAble} />
      </PageLayout>
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
 * Answer:  This component was necessary to generate a PDF proposal document dynamically based on given feature descriptions and their benefits.
 * It facilitates the creation of professional-looking proposals tailored to the client's needs, enhancing communication and documentation of project details.
 *
 * ------------------------------
 * Question: What does this component do?
 * Answer: This component generates a PDF proposal document containing sections such as date, recipient details, introductory message, website features,
 * benefits, and pricing details. It dynamically populates feature descriptions and benefits from a JSON file, providing a structured and informative
 * overview of the proposed project.
 *
 * ------------------------------
 * Section Comments:
 *
 * Section 1:
 * This section contains the first page layout of the proposal document, including the business letter addressing the recipient.
 * 
 * Section 2:
 * This section contains the second page layout of the proposal document, including the detailed features, benefits, and pricing information of the proposed project.
 *
 *
 *
 * ------------------------------
 * Input Comments:
 * Answer: The component receives a prop `isDownloadAble` which determines whether the PDF document will be downloadable or viewed online.
 * This prop influences the styling and layout of the document.
 *
 *
 * ------------------------------
 * Output Comments:
 * Anser:  The output is a PDF proposal document containing structured information about the proposed website project, including feature descriptions,
 * benefits, and pricing details.
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer: No unusual code was required for this component. However, it utilizes React PDF Renderer to generate PDF documents,
 * which might be new for some developers not familiar with this library.
 *
 */
