import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DocusaurusSvg from "/static/img/home_arduino.svg";
import { useEffect } from "react";
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
  gsap.registerPlugin(useGSAP,ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo('.container', {
      scrollTrigger: '.hero',
      x:-500,
      duration: 2,
    },{
      scrollTrigger: '.hero', // start the animation when ".box" enters the viewport (once)
      x: 0,
      ease: "bounce.out",
  });

    // t1.to('#svg',{
    //   opacity:1,
    //   x:700,
    //   duration:2000,
    //   delay:1000,
    //   rotation: 360
    // })

  })
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
