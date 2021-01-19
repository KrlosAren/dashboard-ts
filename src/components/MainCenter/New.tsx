import { NewsType } from "../../interfaces";
import moment from "moment";

const New = ({ notice }: NewsType) => {
  const { url, pubDate, imageUrl, description, content } = notice;

  const date = moment(pubDate).fromNow();

  return (
    <div className="new">
      <div className="new__previous">
        <img src={imageUrl} alt={content} />
        <p>{description}</p>
      </div>
      <div className="new__info">
        <p>{date}</p>
        <a href={url}>
          Read
          <i className="fas fa-sort-up"></i>
        </a>
      </div>
    </div>
  );
};

export default New;
