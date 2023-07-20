import React from 'react'
import classes from "./Slide1Main.module.css"
import Image from 'next/image'
import mainPic from "@/../public/slide1/mainPic.png"
import { A, FireSpan, H, P, Span } from '@/shared/ui'

export const Slide1Main = () =>
  <section className={classes.section}>
    <div>
      <FireSpan>FUTURE OF eSPORTS</FireSpan>
      <H order={1} className={classes.h1}>Unleash the <br /> Next <span className={classes.underline}>Generation</span> <br /> Of Gaming</H>

      <div>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.
        </P>
        <div className={classes.verticalList}>
          <Span uppercase className={classes.span}>Twitch</Span>
          <Span uppercase className={classes.span}>Instagram</Span>
          <Span uppercase className={classes.span}>Facebook</Span>
        </div>
      </div>

      <div className={classes.mainLinks}>
        <A href={"/about"} variant='filled'>Explore More</A>
        <A href={"/team"}>View our team</A>
      </div>

    </div>

    <div className={classes.blue}>
      <Image src={mainPic} alt='Главная картинка' />
    </div>
  </section>
