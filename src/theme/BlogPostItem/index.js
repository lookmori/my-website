import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import Giscus from '@giscus/react';
export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
      <Giscus
      id="comments"
      repo="lookmori/blog"
      repoId="R_kgDOMG9pSA"
      category="Announcements"
      categoryId="DIC_kwDOF1L2fM4B-hVS"
      mapping="title"
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
