"use client";

import ProposalGen from '@/components/custom-ui/pdfGen/ProposalGen'
import {useState , useEffect} from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from '@/components/ui/button';


const PdfGen = () => {
  // section 1 
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex justify-center mb-10">
        {/* section 2  */}
        {isClient && (
            <PDFDownloadLink  document={<ProposalGen isDownloadAble={true} />} fileName="BusinessProposal.pdf">
              {({ blob, url, loading, error }) => (<Button className='group' size="lg"> {loading ? 'Loading document...' : 'Download In Pdf!'}</Button>  )}
            </PDFDownloadLink>
        )}
        
      </div>
      {/* section 3 */}
      {isClient && (<ProposalGen /> )}
    </div>
  )
}

export default PdfGen
/**
 * ---------------------------------------------------------------------
 * File Name : page.tsx
 * Component Name : PdfGen
 * Component Type : Next Page
 * Dev Initials : Elias Emon
 * Date Created : 2024-04-18
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer: This component was necessary to serve as the entry point for generating PDF documents based on the proposal specifications.
 *  It provides a user interface for initiating PDF downloads and previewing the proposal content, enhancing user experience and accessibility.

 * ------------------------------
 * Question: What does this component do?
 * Answer: This component renders a page for initiating PDF document generation. It utilizes the `ProposalGen` component to generate and display the proposal
 * content. Additionally, it offers a button for downloading the proposal as a PDF document, enhancing user convenience.

 * ------------------------------
 * Section Comments:
 * Section 1: Initializes state to determine if the component is being rendered on the client side.
 *
 * Section 2: Renders a PDF download link utilizing the `PDFDownloadLink` component from `@react-pdf/renderer`, 
 * allowing users to download the proposal as a PDF document.
 *
 * Section 3: Renders the `ProposalGen` component to preview the proposal content directly on the page.
 *
 * ------------------------------
 * Input Comments:
 * Answer: No specific input comments are provided for this component, as it primarily serves as an interface for generating and previewing PDF documents.
 *
 * ------------------------------
 * Output Comments:
 * Answer: The output of this component is a page interface for generating and previewing PDF documents based on the proposal specifications.
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer: No unusual code was required for this component. However, it integrates the `PDFDownloadLink` component to enable PDF document downloads,
 *  which might be new for developers unfamiliar with this feature.
 * 
 */