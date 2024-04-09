/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Paws for Cause",
    description:
      "A platform facilitating animal welfare by enabling individuals to upload pictures of injured or abandoned animals, connecting them with the nearest registered NGO for assistance, and providing transportation services to save lives with a click.",
    url: "https://github.com/RIDDHIOZA25",
  },
  {
    title: "Fake Profile Detection on Matrimonial Sites",
    description:
      "Utilized machine learning to detect and eliminate fake profiles on matrimonial sites by analyzing inconsistencies in profile information, comparing Random Forest, SVM, and ANN models, with Random Forest achieving 98.968% accuracy.",
    url: "https://github.com/RIDDHIOZA25",
  },
  {
    title: "My Resume Site",
    description:
      "A comprehensive showcase of my professional journey, highlighting my expertise in computer science, including projects in web development, machine learning, and document processing, alongside certifications and published research, demonstrating a passion for innovation and societal impact.",
    url: "https://riddhidineshoza.netlify.app/",
  },
  {
    title: "Safe Taste Tracker",
    description:
      "Blockchain solution enhancing food safety regulation, streamlining data collection, testing, and reporting for transparency and brand accountability, leveraging ReactJs, Tailwindcss, Ethereum, IPFS, Pinata, Remix IDE, and Solidity.",
    url: "https://lnkd.in/gE3dDu9z",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
