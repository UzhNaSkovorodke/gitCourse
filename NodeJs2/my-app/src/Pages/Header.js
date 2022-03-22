import React from "react";

export const Header = () => {
  return (
    <div className="listNav">
      <div id="buttonHeader" className="navParagraph">
        <a href="#appHeader">About me</a>
      </div>
      <div id="buttonParagraph" className="navParagraph">
        <a href="#appProjects">Projects</a>
      </div>
      <div id="buttonContacts" className="navParagraph">
        <a href="#appContacts">Contacts</a>
      </div>
    </div>
  );
};
