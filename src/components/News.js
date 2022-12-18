import React from "react";
import { useGlobalContext } from "../context/context";

const News = () => {
  const { isLoading, news } = useGlobalContext();
  console.log(isLoading)
  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <section className="news">
      {news.map((item) => (
        <article key={item.objectID} className="new">
          <h4>{item.title}</h4>
          <p className="info">
            {item.points} points by <span>{item.author} |</span>{" "}
            {item.num_comments} comments
          </p>
          <div>
            <a
              href={item.url}
              className="read-link"
              target="_blank"
              rel="noreferrer"
            >
              read more
            </a>
            <button className="remove-btn">remove</button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default News;
