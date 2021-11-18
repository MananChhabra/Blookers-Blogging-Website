import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Sample Blog
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        This is a sample blog. Blog (a truncation of "weblog") is a discussion or
         informational website published on the World Wide Web consisting of discrete,
          often informal diary-style text entries (posts). Posts are typically displayed in
           reverse chronological order, so that the most recent post appears first, at the top
            of the web page.
      </p>
    </div>
  );
}
