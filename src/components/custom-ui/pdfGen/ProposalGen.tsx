// Component Name : ProposalGen
"use client";

import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import featureDes from "./featureDescriptions.json";

const ProposalGen: React.FC<{ isDownloadAble?: boolean }> = ({
  isDownloadAble = false,
}) => {
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
      {/* section 2  */}
      <Page size="LETTER" style={styles.body}>
        {isDownloadAble && (
          <Text
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              textAlign: "center",
              fontSize: 14,
              color: "rgba(0,0,0,0.8)",
            }}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        )}

        {isDownloadAble && (
          <View
            render={({ subPageNumber }) =>
              subPageNumber > 1 && (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 20,
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <Text style={styles.subHeading}>Mr. James Cameron</Text>
                  <Text style={styles.subHeading}>April 15 , 2024</Text>
                  <Text style={styles.subHeading}>Page: {subPageNumber}</Text>
                </View>
              )
            }
            fixed
          />
        )}

        <View>
          <Text style={{ marginBottom: 20, ...styles.text }}>
            April 15, 2024
          </Text>
          {isDownloadAble ? (
            "\n"
          ) : (
            <>
              <br /> <br />
            </>
          )}
          <Text style={{ marginBottom: 20, ...styles.text }}>
            James Cameron {isDownloadAble ? "\n" : <br />}
            Acme Manufacturing, Inc.{isDownloadAble ? "\n" : <br />}
            1400 North Winston St{isDownloadAble ? "\n" : <br />}
            Raleigh, NC 28616
          </Text>
        </View>
        {isDownloadAble ? (
          "\n"
        ) : (
          <>
            <br /> <br />
          </>
        )}
        <Text style={{ marginBottom: 20, ...styles.text }}>
          Dear Mr. Cameron;
        </Text>
        {isDownloadAble ? (
          "\n"
        ) : (
          <>
            <br /> <br />
          </>
        )}
        <View>
          <Text style={{ marginBottom: 20, ...styles.text }}>
            Thank you for taking your time to discuss what you are looking for
            in a website for your company:
          </Text>
        </View>
        {isDownloadAble ? (
          "\n"
        ) : (
          <>
            <br /> <br />
          </>
        )}

        {/* section 3  */}

        {featureDes.propoalFeatures.map((propoalFeature, i) => {
          return (
            <View key={i + "propoalFeature"} style={styles.websiteFeature}>
              <Text style={styles.text}>-</Text>
              <Text style={styles.text}>{propoalFeature}</Text>
            </View>
          );
        })}

        {isDownloadAble ? (
          "\n"
        ) : (
          <>
            <br /> <br />
          </>
        )}

        <View>
          <Text style={{ ...styles.text, marginBottom: 20 }}>
            I am happy to tell you that your new website will have these
            important features and more.
          </Text>
          {isDownloadAble ? (
            "\n"
          ) : (
            <>
              <br /> <br />
            </>
          )}
          <Text style={{ ...styles.text, marginBottom: 20 }}>
            Please see the Benefits and Features section below for details and
            the Pricing details in the following section.
          </Text>
          {isDownloadAble ? (
            "\n"
          ) : (
            <>
              <br /> <br />
            </>
          )}
        </View>
        <View>
          <Text style={styles.text}>
            Best Regards;{isDownloadAble ? "\n" : <br />}
            Rich Howland {isDownloadAble ? "\n" : <br />}
          </Text>
        </View>
      </Page>

      {!isDownloadAble && (
        <>
          <br />
          <br />
          <br />
        </>
      )}
      {/* section 4 */}
      <Page size="LETTER" style={styles.body}>
      
      {isDownloadAble && (
          <Text
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              textAlign: "center",
              fontSize: 14,
              color: "rgba(0,0,0,0.8)",
            }}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        )}

        {isDownloadAble && (
          <View
            render={({ subPageNumber }) =>
              subPageNumber > 1 && (
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 20,
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <Text style={styles.subHeading}>Features and Benefits</Text>
                  <Text style={styles.subHeading}>April 15 , 2024</Text>
                  <Text style={styles.subHeading}>Page: {subPageNumber}</Text>
                </View>
              )
            }
            fixed
          />
        )}
        <View>
          <Text style={styles.header}>
            {`Features and Benefits that the "Pro-Super-Site" will give to you, your staff, and your customers:`}
          </Text>
        </View>
        {!isDownloadAble && (
          <>
            <br />
            <br />
          </>
        )}
        {/* section 5 */}
        <View style={styles.feature}>
          <View
            style={{
              ...styles.featureColTitle,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text style={styles.subHeading}>Feature Description</Text>
            <Text style={styles.text}>---------------------------</Text>
          </View>
          <View
            style={{
              ...styles.featureColDes,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Text style={styles.subHeading}>Benefit</Text>
            <Text style={styles.text}>---------------------------</Text>
          </View>
        </View>
        {/* section 6 */}
        {featureDes.featureBenifits.map((feature, i) => {
          return (
            <View
              style={{ ...styles.feature, paddingBottom: 25 }}
              key={i + "Feat"}
            >
              <View style={styles.featureColTitle}>
                <Text style={styles.text}>{feature.featureDescription}</Text>
              </View>
              <View style={styles.featureColDes}>
                {feature.benefits?.map((text, i) => {
                  return (
                    <Text style={{ ...styles.text }} key={i + "bene"}>
                      {text}
                      {isDownloadAble ? (
                        "\n"
                      ) : (
                        <>
                          <br />
                        </>
                      )}
                    </Text>
                  );
                })}
              </View>
            </View>
          );
        })}
      </Page>
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
 * Defines styles for various sections of the PDF document, adjusting font sizes and layouts based on whether the document will be downloaded or viewed online.
 *
 * Section 2:
 * Contains the header and introductory message section of the proposal, including recipient details and a thank-you note.
 *
 * Section 3:
 * Lists specific website features requested by the client, ensuring clarity on project requirements.
 *
 * Section 4:
 * Introduces the "Features and Benefits" section of the proposal, highlighting the advantages of the proposed "Pro-Super-Site".
 *
 * Section 5:
 * Sets up the layout for presenting feature descriptions and their corresponding benefits.
 *
 * Section 6:
 * Maps through feature descriptions and benefits, dynamically populating the content based on the provided data.
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
