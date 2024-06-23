import React from "react";
import "./CourseMap.css";
import coursemap from "../assets/coursemap.png";
const CourseMap = () => {
    return (
        <div>
            <h2>Course Map</h2>
            <div className="group_selection">
                {/* ... (existing group selection checkboxes) */}
            </div>

            <h3 style={{ textAlign: "left" }}>
                Get a description of each EECS Academic Area here:{" "}
                <a href="https://www2.eecs.berkeley.edu/Research/Areas/">
                    EECS Research Areas
                </a>
            </h3>

            {/* Add the image div */}
            <div className="image-container">
                <div className="container">
                    <img src={coursemap} alt="Course Map" />
                </div>
            </div>

            {/* Add the input box for subfield interest */}
            <div className="subfield-interest">
                <label htmlFor="subfield">
                    Interested in a specific subfield?
                </label>
                <input
                    type="text"
                    id="subfield"
                    name="subfield"
                    placeholder="Enter subfield"
                />
            </div>
        </div>
    );
};
export default CourseMap;
