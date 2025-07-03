import React from "react";

export default function About({ navStyle }) {
  return (
    <div
      className="container my-5"
      style={{
        color: navStyle.color,
      }}
    >
      <h1>About Casely</h1>
      <p>
        <strong>Casely</strong> is a modern, user-friendly text utility app
        designed to help you quickly format and manipulate text with ease.
        Whether you're working on documents, content creation, or just want a
        clean and efficient way to style your text, Casely has got you covered.
      </p>

      <h3>🚀 Features</h3>
      <ul>
        <li>
          Convert text to <strong>UPPERCASE</strong>, <strong>lowercase</strong>
          , and <strong>Capitalized Case</strong>.
        </li>
        <li>Remove extra spaces in a single click.</li>
        <li>Copy formatted text to clipboard instantly.</li>
        <li>Clear text field for a fresh start.</li>
      </ul>

      <h3>🎨 Theme Options</h3>
      <p>
        Customize your experience with multiple themes:
        <ul>
          <li>🌞 Light Mode</li>
          <li>🌙 Dark Mode</li>
          <li>🔵 Blue Theme</li>
          <li>🟢 Green Theme</li>
        </ul>
        Use the dropdown in the navigation bar to switch themes anytime!
      </p>

      <h3>💡 Why Choose Casely?</h3>
      <p>
        Casely helps writers, developers, students, and professionals save time
        and effort by providing instant text transformations without needing
        external tools or plugins.
      </p>
    </div>
  );
}
