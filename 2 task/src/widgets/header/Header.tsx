import React from 'react'
import Image from 'next/image'
import { A, Span } from '@/shared/ui'
import classes from "./Header.module.css"
import cn from 'classnames'


const current = "/"

const menuLinks = [{
  href: "/",
  label: "Home",
}, {
  href: "/about",
  label: "About"
}, {
  href: "/blog",
  label: "Blog"
}, {
  href: "/team",
  label: "Team"
}, {
  href: "/shop",
  label: "Shop"
}, {
  href: "/pages",
  label: "Pages"
}]

export const Header = () =>
  <header className={classes.header}>
    <A href={"/"} className={classes.link}>
      <Image
        src={'/shared/logo.svg'}
        alt={'логотип'}
        width={170}
        height={48}
      />
    </A>

    <nav className={classes.nav}>
      {menuLinks.map(({ href, label }, id) =>
        <A key={id} href={href} active={current === href} className={classes.link}>
          {label}
        </A>)}
    </nav>

    {/* Корзина */}
    <A href={"/bucket"} className={cn(classes.link, classes.bucket)}>
      <Image
        src={'/shared/bucket.svg'}
        alt={'логотип'}
        width={33}
        height={32}
      />
      <Span className={classes.bucketItems}>0</Span>
    </A>

    {/* Контакты */}
    <A href={"/contact-us"} variant={'outline'}>
      Contact us
    </A>
  </header>
