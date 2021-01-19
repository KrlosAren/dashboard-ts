import React from "react";
import New from "./New";

const News = () => {
  return (
    <div className="news">
      <h3>
        <i className="far fa-newspaper"></i>
        News
      </h3>
      <New />
      <New />
      <New />
    </div>
  );
};

export default News;
