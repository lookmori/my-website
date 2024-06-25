import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";


const FeatureList = [
  {
    title: "Mixly",
    Svg: require("@site/static/img/Mixly.svg").default,
    description: <>关于Mixly考级实操真题的解析和我的一下想法实验💡！</>,
  },
  {
    title: "积木搭建",
    Svg: require("@site/static/img/lego.svg").default,
    description: <>积木这里还没完成，暂时留着后续写吧.</>,
  },
  {
    title: "博客",
    Svg: require("@site/static/img/blog.svg").default,
    description: (
      <>
        这里记录其他事情🐶<Link to="/blog">博客</Link>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center" id="svg">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {

  return (
    <section className={styles.features}>
      {/* <div className={styles.ani}>
        <DocusaurusSvg />
      </div> */}
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>

    </section>
  );
}
