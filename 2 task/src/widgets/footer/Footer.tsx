import React from 'react'
import Image from 'next/image'
import { A, H, P } from '@/shared/ui'
import classes from "./Footer.module.css"

const menuLinks = [{
  href: "/about",
  label: "About"
}, {
  href: "/blog",
  label: "Blog"
}, {
  href: "/shop",
  label: "Shop"
}, {
  href: "/contact-us",
  label: "Contact us"
}]

const otherLinks = [{
  href: "/styleguide",
  label: "Styleguide"
}, {
  href: "/changelog",
  label: "Changelog"
}, {
  href: "/licenses",
  label: "Licenses"
}, {
  href: "/team",
  label: "Team"
}]

export const Footer = () =>
  <footer className={classes.footer}>
    <div className={classes.footer__info}>
      <Image
        className={classes.logo}
        src={'/shared/logo.svg'}
        alt={'логотип'}
        width={170}
        height={48}
      />
      <P className={classes.paragraph}>
        Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non.
      </P>
    </div>
    <div className={classes.footer__links}>
      <H order={2} className={classes.h2}>Menu Items</H>
      {menuLinks.map(({ href, label }, id) =>
        <A key={id} href={href} className={classes.link}>
          {label}
        </A>)}
    </div>
    <div className={classes.footer__links}>
      <H order={2} className={classes.h2}>Other Pages</H>
      {otherLinks.map(({ href, label }, id) =>
        <A key={id} href={href} className={classes.link}>
          {label}
        </A>)}
    </div>
  </footer>
