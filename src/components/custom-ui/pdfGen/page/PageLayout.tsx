"use client";
import React from "react";
import {
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingBottom: 40,
  },
  content : {
    marginLeft: 70,
    marginRight: 25
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: -100
  },
  headerImage: {
    width: "100%",
    height: "100%",
  },
  leftBar: {
    position: "absolute",
    left: 5,
    width: 60,
  },
  leftBarImage: {
    height: "100%",
    width: 60,
  },
  pageNumber: {
    position: "absolute",
    top: 10,
    right: 10,
    textAlign: "center",
    fontSize: 14,
    color: "rgba(0,0,0,0.8)",
  },
});

const PageLayout = ({
  children,
  isDownloadAble = true,
}: {
  children: React.ReactNode;
  isDownloadAble?: boolean;
}) => {
  return (
    <Page wrap={true} size="LETTER" style={styles.body}>
      {/* section 1  */}
      <View style={{marginBottom: "1vh"}} render={({ pageNumber })=>{
          if(pageNumber === 1){
            return (
              <>
                <View style={{width: "100vw", height: "12vh"}}>
                  <Image style={styles.headerImage} src={`/letterHead/header/Header1.png`} />
                </View>
                <View style={{...styles.leftBar, top: "13vh" , height: "84vh"}} >
                  <Image style={styles.leftBarImage} src={`/letterHead/leftBar/Left_Bar1.png`} />
                </View>
              </>
            )
          } else{
            return (
              <>
                <View style={{width: "100vw", height: "6vh"}} >
                  <Image  style={styles.headerImage} src={`/letterHead/header/Header2.png`} />
                </View>
                <View style={{...styles.leftBar, top: "7vh" , height: "90vh"}} >
                  <Image style={styles.leftBarImage} src={`/letterHead/leftBar/Left_Bar1.png`} />
                </View>
              </>
            )
          }
      }} fixed />
      
      {/* section 3 */}
      {isDownloadAble && (
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      )}
      <View style={{...styles.content , marginLeft: !isDownloadAble ? 0 : 70}}>{children}</View>
    </Page>
  );
};

export default PageLayout;

/**
 * ---------------------------------------------------------------------
 * File Name : PageLayout.tsx
 * Component Name : PageLayout
 * Component Type : Pdf Generation Component
 * Dev Initials : Elias Emon
 * Date Created : 2024-04-26
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer: This component was likely created to provide a standardized layout structure for generating PDF documents in a React application. It encapsulates common layout elements such as a header, a left bar, and page numbering, allowing for easy reuse and maintenance across different parts of the application.
 *
 * ------------------------------
 * Question: What does this component do?
 * Answer: This component serves as a layout template for PDF generation. It includes sections for a header, a left bar, and page numbering. Additionally, it accepts props such as leftBar and letterHead to customize the content of the header and left bar.
 *
 * ------------------------------
 * Section Comments:
 *
 * Section 1:
 * This section includes the header of the PDF document, which is positioned at the top of each page. It likely contains branding or other identifying information.
 *
 * Section 2:
 * This section represents a left bar that may contain additional content or navigation elements. It is positioned vertically along the left side of each page. 
 * 
 * Section 3:
 *This section includes the page numbering functionality, displaying the current page number and total number of pages. It is positioned at the top-right corner of each page.
 * 
 *
 *
 * ------------------------------
 * Input Comments:
 * The PageLayout component receives a prop named isDownloadAble. This prop determines whether the generated PDF document will be available for download or viewed online. The value of this prop influences the styling and layout of the document accordingly.
 *
 * ------------------------------
 * Output Comments:
 * The output of the component is a PDF proposal document containing structured information about the proposed website project. This includes detailed descriptions of features, benefits, pricing details, and any other relevant information necessary for the proposal.
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer: No unusual code was written. However, the usage of @react-pdf/renderer indicates that this component is designed specifically for generating PDF documents using React.
 *
 */

