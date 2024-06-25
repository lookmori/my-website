import clsx from 'clsx';
import Link from '@docusaurus/Link';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Arduino from '/static/img/animation.svg'
import Heading from '@theme/Heading';
import styles from './index.module.css';
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  gsap.registerPlugin(useGSAP,ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);
  useGSAP(() => {
    gsap.fromTo('#signature', {
      scrollTrigger: '.container',
      x:-500,
      duration: 2,
    },{
      scrollTrigger: '.container', // start the animation when ".box" enters the viewport (once)
      x: 0,
      ease: "bounce.out",
  });
  gsap.to("#rect", {
    duration: 5, 
    repeat: -1,
    repeatDelay: 3,
    yoyo: true,
    ease: "power1.inOut",
    motionPath:{
      path: "#black",
      align: "#black",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }
  });
  gsap.to("#red_blur", {
    duration: 5, 
    repeat: -1,
    repeatDelay: 2,
    yoyo: true,
    ease: "power1.inOut",
    motionPath:{
      path: "#red_line",
      align: "#red_line",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }
  });

gsap.to("#red_led", { 
duration: 10,
fill: '#E7211A',
repeat:-1,
delay:2
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
    <header className={clsx('hero hero--primary', styles.heroBanner)} >
      <Arduino className='arduino'/>
      <div className="container" id="signature">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons} >
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            lookmori ⏱️
          </Link>
        </div>

      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
 
    </Layout>
  );
}
