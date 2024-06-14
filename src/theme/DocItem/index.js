import React from "react";
import { HtmlClassNameProvider } from "@docusaurus/theme-common";
import { DocProvider } from "@docusaurus/theme-common/internal";
import DocItemMetadata from "@theme/DocItem/Metadata";
import DocItemLayout from "@theme/DocItem/Layout";
import Giscus from "@giscus/react";
export default function DocItem(props) {
  const docHtmlClassName = `docs-doc-id-${props.content.metadata.id}`;
  const MDXComponent = props.content;
  return (
    <DocProvider content={props.content}>
      <HtmlClassNameProvider className={docHtmlClassName}>
        <DocItemMetadata />
        <DocItemLayout>
          <MDXComponent />
          <Giscus
            id="comments"
            repo="lookmori/blog"
            repoId="R_kgDOMG9pSA"
            category="Announcements"
            categoryId="DIC_kwDOF1L2fM4B-hVS"
            mapping="title"
            term=""
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            theme="preferred_color_scheme"
            lang="zh-CN"
            loading="lazy"
            crossOrigin="anonymous"
          />
        </DocItemLayout>
      </HtmlClassNameProvider>
    </DocProvider>
  );
}
