import React from "react";
import { Text, View , StyleSheet } from "@react-pdf/renderer";



// section 1 
const styles = StyleSheet.create({
    heading: {
      fontSize:  22,
      marginBottom: 20,
      fontWeight: "bold",
      textAlign: "justify",
    },
    text: {
      fontSize:  16,
      textAlign: "justify",
      color: "rgba(0,0,0,0.8)",
    },
    tableRow: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      marginBottom: 20
    },
    tableHeading: {
      fontSize:  22,
      fontWeight: 'bold',
      textAlign: "justify",
      color: "rgba(0,0,0,0.8)",
    }
  });


interface ITable {
    type: string;
    tableContent: any;
    tableColumn: number;
    sectionHeading?: string;
    columWidths: number[]
}

const Table = ({
    tableData,
}: { tableData: ITable }) => {

  return (
    <View wrap>
      {/* section 2  */}
    {
      tableData.sectionHeading && (
        <Text style={styles.heading}> 
        {
          tableData.sectionHeading
        }
        <br />
      </Text>
      )
    }
    <br />
    {/* section 3 */}
    {
        tableData && tableData.tableContent.map((row , rowIndex)=>{
          if(rowIndex === 0){
            return (
              <View wrap={true} style={styles.tableRow} key={rowIndex+"row" + tableData.sectionHeading }>
                {row.map((cell , cellIndex) => (
                  <View style={{width: `${(100 / tableData.tableColumn)-4}%`}} key={cellIndex + "cell"}>
                      {cell.split("\n").map((v , index)=>( 
                        <Text style={{...styles.tableHeading , textDecoration: "underline" , textDecorationStyle: "dashed"}} key={index+"row_extend"}>
                          {v}
                          <br />
                        </Text>
                      ))}
                  </View>
                ))}
              </View>
            )
          } else{
            return (
              <View wrap={true} style={styles.tableRow} key={rowIndex+"row" + tableData.sectionHeading }>
                {row.map((cell , cellIndex) => (
                  <View wrap style={{width: `${ (100 / tableData.tableColumn)-4}%`}} key={cellIndex + "cell"}>
                      {cell.split("\n").map((v , index)=>( 
                        <Text style={styles.text} key={index+"row_extend"}>
                          {v}
                          <br />
                        </Text>
                      ))}
                  </View>
                ))}
              </View>
            )
          }
        })
    }
    
  </View>)
};

export default Table;

/**
 * ---------------------------------------------------------------------
 * File Name : Table.tsx
 * Component Name : Table Content for Proposal
 * Component Type : Pdf Generation Component
 * Dev Initials : Elias Emon
 * Date Created : 2024-05-09
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer: This component was necessary to create because it facilitates the generation of tables within a PDF document. By encapsulating table rendering logic, it enhances code readability, maintainability, and reusability across the application.
 *
 * ------------------------------
 * Question: What does this component do?
 * Answer: This component renders tables within a PDF document based on the provided table data. It supports rendering section headings, customizable column widths, and text wrapping within cells. Additionally, it applies styling to the table elements for consistent presentation.
 *
 * ------------------------------
 * Section Comments:
 *
 * Section 1: Styles
 * Defines the styles used for rendering headings, text, table rows, and table headings within the PDF document.
 * 
 * Section 2: Section Heading
 * Renders the section heading if provided in the table data. It applies the heading style defined in Section 1.
 * 
 * Section 3: Table Content
 * Iterates over the table content provided in the table data. For the first row, it renders the table headings with underline styling, and for subsequent rows, it renders the table cells with regular text styling. It adjusts the width of each cell based on the number of columns and the specified column widths.
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
 * Answer: No unusual code was required for this component. However, it utilizes React PDF Renderer for PDF generation, which may be unfamiliar to developers primarily accustomed to web development with HTML and CSS.
 *
 */
