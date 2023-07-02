import React from "react";

const Header = (props) => {
  return (
    <nav>
      <div>
        <ul>
          <li onClick={() => props.change("quotes")}>HOME</li>
          <li onClick={() => props.change("quotes")}>QUOTES</li>
          <li onClick={() => props.change("quotes/random")}>RANDOM QUOTE</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
