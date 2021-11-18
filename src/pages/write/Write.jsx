import "./write.css";
import React, { useState } from "react";

export default function Write() {
  const [text, setText] = useState(null);

  function getData(val) {
    setText(val.target.value);
  }

  function getDataFromApi(val) {
    console.log("Loading Data...");
    console.log(text)
    const data = JSON.stringify({
      "text": text,
      "language": "en",
      "includeCitations": false,
      "scrapeSources": false
    });
  
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
  
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(JSON.parse(this.responseText));
        console.log(JSON.parse(this.responseText)["percentPlagiarism"]);
        alert("Plagiarism % is : " + JSON.parse(this.responseText)["percentPlagiarism"])
        console.log("Data Loaded")
      }
    });
  
    xhr.open("POST", "https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("x-rapidapi-host", "plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com");
    xhr.setRequestHeader("x-rapidapi-key", "dfde047140msh6a7ad1c767e7bf5p11179fjsnb8cab0c157a3");
  
    xhr.send(data);
  
  }


  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          {/* <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label> */}
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            id="blogtext"
            onChange={getData}
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />

        </div>
        <button type="button" className="writeSubmit plagButton" onClick={getDataFromApi} >
          Plagiarism
        </button>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}


