import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import featureDes from "@/data/featureDescriptions.json";



const BusLetter = ({
  isDownloadAble = false,
}: { isDownloadAble?: boolean }) => {
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
    <View>

      <View>
        {isDownloadAble ? (
          "\n"
        ) : (
          <>
            <br /> <br />
          </>
        )}
        <Text style={{ marginBottom: 20, ...styles.text }}>
          April 15, 2024 {isDownloadAble ? "\n \n" : <><br /> <br /></>}
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
          Thank you for taking your time to discuss what you are looking for in
          a website for your company:
        </Text>
      </View>
      {isDownloadAble ? (
        "\n"
      ) : (
        <>
          <br /> <br />
        </>
      )}

      {/* section 1  */}

      {featureDes.propoalFeatures.map((propoalFeature, i) => {
        return (
          <View wrap={false} key={i + "propoalFeature"} style={styles.websiteFeature}>
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
        <Text style={{ ...styles.text, marginTop: 30, marginBottom: 20 }}>
          I am happy to tell you that your new website will have these important
          features and more.
        </Text>
        {isDownloadAble ? (
          "\n \n"
        ) : (
          <>
            <br /> <br />
          </>
        )}
        <Text style={{ ...styles.text, marginBottom: 20 }}>
          Please see the Benefits and Features section below for details and the
          Pricing details in the following section.
        </Text>
        {isDownloadAble ? (
          "\n \n"
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
 * Date Created : 2024-04-18
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer: This component was likely created to generate a business letter document for communicating with clients or partners. It structures and formats the letter content according to the specified requirements, such as date, recipient information, salutation, and message body. 
 *
 * ------------------------------
 * Question: What does this component do?
 * Answer: The BusLetter component generates a business letter document containing a message addressed to the recipient, thanking them for discussing their website requirements and highlighting the important features of the proposed website project. It formats the letter content and applies styling based on whether the document is intended for download or online viewing.
 *
 * ------------------------------
 * Section Comments:
 *
 * Section 1:
 * 
 *This section includes the date, recipient information, and salutation of the business letter. It formats the letter header with appropriate spacing and line breaks.
 *
 *
 * ------------------------------
 * Input Comments:
 * Answer: None
 *
 * ------------------------------
 * Output Comments:
 * Anser: None
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer: The code appears to be standard React code for generating a business letter document. No unusual code patterns or implementations are evident in the component.
 *
 */