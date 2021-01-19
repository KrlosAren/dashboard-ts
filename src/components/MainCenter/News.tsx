import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { NewsProps } from "../../interfaces";
import New from "./New";
import moment from "moment";

const News = () => {
  const { hits } = useContext(AppContext);
  let news = hits.sort((a: NewsProps, b: NewsProps) =>
    moment(b.pubDate).diff(moment(a.pubDate).format("YYYY-MM-DD"))
  );

  return (
    <div className="news">
      <h3>
        <i className="far fa-newspaper"></i>
        News
      </h3>
      {news.map((notice: NewsProps) => (
        <New notice={notice} key={notice.url} />
      ))}
    </div>
  );
};

export default News;
