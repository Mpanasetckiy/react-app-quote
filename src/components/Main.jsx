import React, { useEffect, useState } from "react";

const Main = ({ page }) => {
  const [data, setData] = useState();
  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/${page}`
      );
      const data = await response.json();
      setData(data);
    } catch (error) {}
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className="container">
      {data &&
        data.length > 1 &&
        data.map(({ quote, author }, index) => {
          return (
            <div key={index} className="quote">
              <h2>"{quote}"</h2>
              <p>{author}</p>
            </div>
          );
        })}
      {data && (
        <div className="quote">
          <h2>"{data[0].quote}"</h2>
          <p>{data[0].author}</p>
          <div>
            <button onClick={handleClick}>NEXT</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
