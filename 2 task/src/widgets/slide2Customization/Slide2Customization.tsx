"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import classes from "./Slide2Customization.module.css"
import { FireSpan, H, P } from '@/shared/ui'
import BigPic from "@/../public/slide2/bigPic.png"
import SmallPic1 from "@/../public/slide2/smallPic1.png"
import SmallPic2 from "@/../public/slide2/smallPic2.png"
import SmallPic3 from "@/../public/slide2/smallPic3.png"
import cn from 'classnames'

const pictures = [
  { full: BigPic, mini: SmallPic1 },
  { full: BigPic, mini: SmallPic2 },
  { full: BigPic, mini: SmallPic3 }
]

export const Slide2Customization = () => {
  const [activePicture, setActive] = useState(0)

  return <section className={classes.section}>

    <Image
      alt='Активный персонаж'
      src={pictures[activePicture].full}
    />

    <div>
      <FireSpan uppercase>Future of esport</FireSpan>

      <H order={1} className={classes.h1}>
        Customize your <br /> Own Character
      </H>

      <P className={classes.paragraph}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.
      </P>

      <div>
        {pictures.map(({ mini }, id) =>
          <Image
            key={id}
            src={mini}
            draggable={'false'}
            className={cn(classes.miniPic, { [classes.miniPicActive]: id === activePicture })}
            onClick={() => setActive(id)}
            alt={id === activePicture ? "Активный персонаж" : "Персонаж"}
          />)}
      </div>
    </div>
  </section>
}