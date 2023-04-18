import React from "react";
import { postsData } from "../data/posts";

export const Posts = () => {
  return (
    <div>
      {postsData?.map((data) => (
        <div key={data.id}>
          <h2>
            {data.id}. {data.title}
          </h2>
        </div>
      ))}
    </div>
  );
};
