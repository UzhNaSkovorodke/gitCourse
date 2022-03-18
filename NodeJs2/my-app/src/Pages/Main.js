import React from "react";
import avatarPng from "../Images/avatar.png";

export const Main = () => {
  return (
    <div className="appMain">
      <div className="appAboutMe" id="appAboutMe">
        <div className="blockAbout">
          <h2 className="textAbout">About me</h2>
          <img className="pngAvatar" src={avatarPng}></img>
        </div>
        <div className="blockPhoto">
          <div className="containerPhoto">a</div>
          <div className="containerPhoto">a</div>
          <div className="containerPhoto">a</div>
        </div>
      </div>
      <div className="appProjects" id="appProjects"></div>
      <div className="appContacts" id="appContacts"></div>
    </div>
  );
};
