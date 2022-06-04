import React from "react";
import Project from "./Project";

export default function ProjectsList() {
  return (
    <div className="projectsList">
      <a className="prev" id="prev">
        &#10094;
      </a>
      <div className="projects-container" id="projects-container">
        <div className="slide">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </div>
      <a className="next" id="next">
        &#10095;
      </a>
    </div>
  );
}
