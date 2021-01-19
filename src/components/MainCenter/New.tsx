import React from "react";

const New = () => {
  return (
    <div className="new">
      <div className="new__previous">
        <img src="https://dummyimage.com/500/fff/fff" alt="logo-empresa" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos beatae
          eveniet inventore nisi
        </p>
      </div>
      <div className="new__info">
        <p>9:00 a.m</p>
        <a href="/">
          Read
          <i className="fas fa-sort-up"></i>
        </a>
      </div>
    </div>
  );
};

export default New;
