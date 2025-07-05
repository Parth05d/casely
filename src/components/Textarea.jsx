import { useState } from "react";

function Textarea({ showAlert, heading, mode, navStyle }) {
  const [text, setText] = useState("");

  const uppercase = () => {
    setText(text.toUpperCase());
    showAlert("Converted to upper case", "success");
  };

  const lowercase = () => {
    setText(text.toLowerCase());
    showAlert("Converted to lower case", "success");
  };

  const removeExtraSpaces = () => {
    setText(text.split(/\s+/).join(" "));
    showAlert("Extra spaces removed", "success");
  };

  const capitalizedCase = () => {
    const newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(newText);
    showAlert("Converted to capitalized case", "success");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    showAlert("Copied to clipboard!", "success");
  };

  const empty = () => {
    setText("");
    showAlert("Text box cleared", "success");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="container" style={{ color: navStyle.color }}>
      <h1 className="mb-4">{heading}</h1>
      <div className="mb-3">
        <textarea
          className={`form-control placeholder-${mode}`}
          value={text}
          onChange={handleChange}
          style={{
            backgroundColor: navStyle.backgroundColor,
            color: navStyle.color,
          }}
          id="Textbox"
          rows="10"
          placeholder="Enter your text"
        ></textarea>
      </div>
      <div className="d-flex flex-wrap gap-2">
        <button
          className="btn btn-outline-secondary"
          onClick={uppercase}
          style={{
            backgroundColor: navStyle.backgroundColor,
            color: navStyle.color,
          }}
          disabled={text.length === 0}
        >
          Upper Case
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={lowercase}
          style={{
            backgroundColor: navStyle.backgroundColor,
            color: navStyle.color,
          }}
          disabled={text.length === 0}
        >
          Lower Case
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={capitalizedCase}
          style={{
            backgroundColor: navStyle.backgroundColor,
            color: navStyle.color,
          }}
          disabled={text.length === 0}
        >
          Capitalized Case
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={removeExtraSpaces}
          style={{
            backgroundColor: navStyle.backgroundColor,
            color: navStyle.color,
          }}
          disabled={text.length === 0}
        >
          Remove Spaces
        </button>
        <button
          className="btn btn-outline-secondary"
          onClick={copyToClipboard}
          style={{
            backgroundColor: navStyle.backgroundColor,
            color: navStyle.color,
          }}
          disabled={text.length === 0}
        >
          Copy
        </button>

        <button
          className="btn btn-outline-secondary"
          onClick={empty}
          style={{
            backgroundColor: navStyle.backgroundColor,
            color: navStyle.color,
          }}
          disabled={text.length === 0}
        >
          Clear
        </button>
      </div>

      <div className="container my-4">
        <h2>Text Summary</h2>
        <p>
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and{" "}
          {text.length} characters
        </p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview yet."}</p>
      </div>
    </div>
  );
}

export default Textarea;
