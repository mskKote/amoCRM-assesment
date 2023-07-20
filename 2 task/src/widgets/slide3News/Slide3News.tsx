import React from 'react'
import classes from "./Slide3News.module.css"
import { A, FireSpan, H, P, Span } from '@/shared/ui'
import bigPic from "@/../public/slide3/bigPic.png"
import smallPic1 from "@/../public/slide3/smallPic1.png"
import smallPic2 from "@/../public/slide3/smallPic2.png"
import smallPic3 from "@/../public/slide3/smallPic3.png"
import smallPic4 from "@/../public/slide3/smallPic4.png"
import Image from 'next/image'
import cn from 'classnames'


const articles = [{
  title: "Esports Group teams up with the Indianapolis Colts",
  image: bigPic,
  published: "April 2, 2021"
}, {
  title: "NAVI reveals s1mple fifth anniversary",
  image: smallPic1,
  published: "April 2, 2021"
}, {
  title: "A1esports Shares new picture",
  image: smallPic2,
  published: "April 2, 2021"
}, {
  title: "T1 unveil partnership with Razer",
  image: smallPic3,
  published: "April 2, 2021"
}, {
  title: "RX secures content partnership with",
  image: smallPic4,
  published: "April 2, 2021"
},]

export const Slide3News = () =>
  <section className={classes.news}>
    <FireSpan>Future of eSPORTS</FireSpan>
    <div className={classes.newsBlock}>
      <H order={1} className={classes.h1}>Latest News & <br /> Articles </H>
      <A variant='filled' href={"/news"}>Read More</A>
    </div>

    <div className={classes.articlesGrid}>
      {articles.map(({ title, published, image }, id) =>
        <div key={id} className={cn(classes.articleCard, { [classes.articleBig]: id === 0 })}>
          <Image src={image} alt={"иллюстрация к заголовку"} />
          <Span className={classes.articlePublished}>{published}</Span>
          <H order={2} className={classes.articleH}>{title}</H>
        </div>)}
    </div>
  </section>
