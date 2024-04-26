import React from "react";
import { Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import featureDes from "@/data/featureDescriptions.json";

const Proposal = ({
  isDownloadAble = false,
}: { isDownloadAble?: boolean }) => {
  
  const styles = StyleSheet.create({
    header: {
      display: "flex",
      flexDirection: "row",
      fontSize: isDownloadAble ? 18 : 24,
      marginBottom: 20,
      textAlign: "justify",
    },

    subHeading: {
      fontSize: isDownloadAble ? 16 : 22,
      textAlign: "justify",
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
    <View>
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
      {/* section 1 */}
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
      {/* section 2 */}
      {featureDes.featureBenifits.map((feature, i) => {
        return (
          <View
            wrap={false}
            style={{ ...styles.feature, paddingTop: 15, paddingBottom: 15 }}
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
    </View>
  );
};

export default Proposal;

/**
 * ---------------------------------------------------------------------
 * File Name : Proposal.tsx
 * Component Name : Proposal
 * Component Type : Pdf Generation Component
 * Dev Initials : Elias Emon
 * Date Created : 2024-04-26
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer: This component was likely created to generate a proposal document for the "Pro-Super-Site" project. It organizes and presents features and benefits information in a structured format suitable for proposal purposes.
 *
 * ------------------------------
 * Question: What does this component do?
 * Answer: The Proposal component generates a proposal document containing detailed descriptions of features and their corresponding benefits for the "Pro-Super-Site" project. It structures the content into sections and applies appropriate styling based on whether the document is intended for download or online viewing.
 *
 * ------------------------------
 * Section Comments:
 *
 * Section 1:
 * This section includes the header of the proposal document, providing an introduction to the features and benefits of the "Pro-Super-Site" project.
 * 
 *
 * Section 2:
 * This section organizes the feature descriptions and their benefits into a structured layout. It iterates over the feature descriptions and renders them along with their corresponding benefits.
 * 
 *
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
 * Answer: The code appears to be standard React code for generating a PDF proposal document. No unusual code patterns or implementations are evident in the component.
 *
 */
