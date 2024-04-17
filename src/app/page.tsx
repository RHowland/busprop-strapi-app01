import { NextPage } from 'next'
import React from "react";
import { Hero } from "@/components/custom-ui/landing-page/hero/hero";

const Home: NextPage = () => {
  return (
    <>
      
      {/* Section 2: Hero */}
      <section aria-label="Hero">
        <Hero />
      </section>
    </>
  );
};

export default Home;

/**
 * ---------------------------------------------------------------------
 * File Name : page.tsx
 * Component Name : Home
 * Component Type : Home Component
 * Dev Initials : Aniket Raj
 * Date Created : 2024-04-04
 * ------------------------------
 * Question: Why was it necessary to create this component?
 * Answer: This component was created to serve as the main home page of the
 * website. It combines various sections and components to create a complete
 * and symmetrical landing page experience for users.
 *
 * ------------------------------
 * Question: What does this component do?
 * Answer: The Home component renders the main sections of the home page,
 * including the navigation bar (Navbar), hero section (Hero), and footer
 * (Footer). It imports and utilizes these separate components to create a
 * structured and visually appealing layout for the home page.
 *
 * ------------------------------
 * Section Comments:
 * Section 1: Navigation
 * This section contains the Navbar component, which represents the
 * navigation bar of the website. It is wrapped within a <section> tag and
 * labeled using the aria-label attribute for accessibility purposes.
 *
 * Section 2: Hero
 * This section contains the Hero component, which represents the main hero
 * section of the home page. It is wrapped within a <section> tag and
 * labeled using the aria-label attribute for accessibility purposes.
 *
 * Section 3: Footer
 * This section contains the Footer component, which represents the footer
 * of the website. It is wrapped within a <section> tag and labeled using
 * the aria-label attribute for accessibility purposes.
 *
 * ------------------------------
 * Input Comments:
 * The Home component does not receive any input props.
 *
 * ------------------------------
 * Output Comments:
 * The component outputs the main sections of the home page, including the
 * navigation bar, hero section, and footer. These sections are rendered
 * using separate components (Navbar, Hero, Footer) to promote code
 * modularity and reusability.
 *
 * ------------------------------
 * Additional Comments:
 * Question: Did you have to write any unusual code?
 * Answer: No, the code in this component follows a common pattern for
 * creating a home page using React components. The component imports and
 * utilizes separate components for each section, promoting code modularity
 * and reusability. The use of the aria-label attribute for section names
 * is a good practice for accessibility.
 *
 */

/**
* =====================================================================
*   COMPONENT  REVISION
* =====================================================================
* Date Revised : 2024-04-11          (last date you made a code change)
* Dev Initials : Elias Emon
* ------------------------------
* Question: Why was it necessary to revise this component?
* Answer  : The revision was necessary to add functionality or make improvements to the Home page component.
*
* ------------------------------
* Describe Your Change(s): 
* - The Navigation bar and the Footer are moved to the root layout because it the standrad coding style.
* The tina client is important and fetch data by tina client from gql server and provided to the Hero component as props.
* 
* ------------------------------
* Section Comments:    (Enter "none" if you have no comments)
* none
* ------------------------------
* Input Comments:      (Enter "none" if you have no comments)
* none
* ------------------------------
* Output Comments:     (Enter "none" if you have no comments)
* None
* ------------------------------
* Additional Comments:
* Question: Did you have to write any unusual code? 
* Answer  : NO
*
*/
