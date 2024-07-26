import React from "react";
import BlogPostItem from "@theme-original/BlogPostItem";
import Giscus from "@giscus/react";
export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
      <Giscus
        id="comments"
        repo="lookmori/my-website"
        repoId="R_kgDOMJTggg"
        mapping="pathname"
        category="Announcements"
        categoryId="DIC_kwDOMJTggs4CgOJP"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="zh-CN"
        loading="lazy"
        crossOrigin="anonymous"
      />
    </>
  );
}
