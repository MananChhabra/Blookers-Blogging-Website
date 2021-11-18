console.log("get Data funcn");
function getData() {
  fetch("https://plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com/plagiarism", {
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "x-rapidapi-host": "plagiarism-checker-and-auto-citation-generator-multi-lingual.p.rapidapi.com",
      "x-rapidapi-key": "dfde047140msh6a7ad1c767e7bf5p11179fjsnb8cab0c157a3"
    },
    "body": {
      "text": "This is a test with a minimum of 40 characters to check plagiarism for.",
      "language": "en",
      "includeCitations": false,
      "scrapeSources": false
    }
  })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.error(err);
    });
}