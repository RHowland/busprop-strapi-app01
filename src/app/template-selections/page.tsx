"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const TemplateSelections = () => {
  // section 1
  const [longVersions, setLongVersion] = useState([]);
  const [shortVersions, setShortVersion] = useState([]);

  const [selectedLongVersion, setSelectedLongVersion] = useState("");
  const [selectShortVersion, setSelectShortVersion] = useState("");

  const [selectLongData, setSelectedLongData] = useState({});
  const [selectShortData, setSelectedShortData] = useState({});

  // section 2
  const handleSelectLong = (e) => {
    const selectedName = e.target.value;
    setSelectedLongVersion(selectedName);
  };

  // section 3
  const handleSelectShort = (e) => {
    const selectedName = e.target.value;
    console.log(selectedName);
    setSelectShortVersion(selectedName);
  };

  useEffect(() => {
    // section 4
    (async () => {
      const longResult = await fetch(
        "http://localhost:3000/api/file-list?version=longVersion"
      );
      const shortResult = await fetch(
        "http://localhost:3000/api/file-list?version=shortVersion"
      );
      const longData = await longResult.json();
      const shortData = await shortResult.json();
      setLongVersion(longData.data);
      setSelectedLongVersion(longData.data[0]);
      setShortVersion(shortData.data);
      setSelectShortVersion(shortData.data[0]);
    })();
  }, []);

  useEffect(() => {
    // section 5
    (async () => {
      if (selectedLongVersion) {
        const result = await fetch(
          `http://localhost:3000/api/bus-data?version=longVersion&name=${selectedLongVersion}`
        );
        const data: any = await result.json();
        setSelectedLongData(data.data[0]);
      }
    })();
  }, [selectedLongVersion]);

  useEffect(() => {
    // section 6
    (async () => {
      if (selectShortVersion) {
        const result = await fetch(
          `http://localhost:3000/api/bus-data?version=shortVersion&name=${selectShortVersion}`
        );
        const data: any = await result.json();
        setSelectedShortData(data.data[0]);
      }
    })();
  }, [selectShortVersion]);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* section 7 */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Select Long Version</h1>

        <select
          onChange={handleSelectLong}
          className="border border-gray-300 rounded px-4 py-2"
        >
          {longVersions &&
            longVersions.map((v, index) => (
              <option key={index + "long"} value={v}>
                {v}
              </option>
            ))}
        </select>
        {selectedLongVersion && (
          <Link
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
            href={`/pdf-gen?version=longVersion&name=${selectedLongVersion}`}
          >
            Next
          </Link>
        )}
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          {Object.keys(selectLongData).map(
            (key, index) =>
              key !== "type" &&
              key !== "display-order" && ( // Ignore type and display-order
                <p key={index} className="text-gray-600 mb-2">
                  {key
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                  : {selectLongData[key]}
                </p>
              )
          )}
        </div>
      </div>
      {/* section 8  */}
      <div>
        <h1 className="text-2xl font-bold mb-4">Select Short Version</h1>
        <select
          onChange={handleSelectShort}
          className="border border-gray-300 rounded px-4 py-2"
        >
          {shortVersions &&
            shortVersions.map((v, index) => (
              <option key={index + "short"} value={v}>
                {v}
              </option>
            ))}
        </select>

        {selectShortVersion && (
          <Link
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
            href={`/pdf-gen?version=shortVersion&name=${selectShortVersion}`}
          >
            Next
          </Link>
        )}

        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
          {Object.keys(selectShortData).map(
            (key, index) =>
              key !== "type" &&
              key !== "display-order" && ( // Ignore type and display-order
                <p key={index} className="text-gray-600 mb-2">
                  {key
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                  : {selectShortData[key]}
                </p>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default TemplateSelections;

/**
 * ---------------------------------------------------------------------
 * File Name : TemplateSelections.tsx
 * Component Name : Proposal Template Selections
 * Component Type : Template Selections
 * Dev Initials : Elias Emon
 * Date Created : 2024-05-09
 * ------------------------------
  * Question: Why was it necessary to create this component?
 * Answer: This component was necessary to create because it provides functionality for selecting proposal templates (long and short versions) and navigating to the PDF generation page with the selected template data. It facilitates user interaction and decision-making in choosing the appropriate template for proposal generation.
 *
 * ------------------------------
 * Question: What does this component do?
 * Answer: This component allows users to select between long and short versions of proposal templates. It fetches data for both versions from the server, displays the available options, and enables users to choose a template. Upon selection, it retrieves detailed information about the selected template and provides a link to proceed to the PDF generation page with the selected template data.
 *
 * ------------------------------
 * Section Comments:
 *
 * Section 1: State Initialization
 * Initializes state variables for storing long and short versions of proposal templates, selected versions, and selected template data.
 * 
 * Section 2: Handle Long Version Selection
 * Handles the selection of the long version template and updates the state accordingly.
 * 
 * Section 3: Handle Short Version Selection
 * Handles the selection of the short version template and updates the state accordingly.
 * 
 * Section 4: Fetch Long and Short Version Data
 * Fetches data for long and short versions of proposal templates from the server upon component mount and updates state variables with the retrieved data.
 * 
 * Section 5: Fetch Selected Long Version Data
 * Fetches detailed information about the selected long version template from the server and updates the state with the retrieved data.
 * 
 * Section 6: Fetch Selected Short Version Data
 * Fetches detailed information about the selected short version template from the server and updates the state with the retrieved data.
 * 
 * Section 7: Render Long Version Selection
 * Renders the dropdown for selecting the long version template along with detailed information about the selected template.
 * 
 * Section 8: Render Short Version Selection
 * Renders the dropdown for selecting the short version template along with detailed information about the selected template.
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
 * Answer: No unusual code was required for this component. It follows standard React patterns for managing state, handling user events, and fetching data from a server.
 *
 */
