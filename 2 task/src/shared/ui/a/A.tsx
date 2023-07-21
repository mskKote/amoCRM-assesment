import React from 'react'
import Link, { type LinkProps } from 'next/link'
import { orbitron } from '../fonts'
import cn from 'classnames'
import classes from "./A.module.css"

type Sizes = "sm" | "md" | "lg" | undefined

type ExtraProps = {
  size?: Sizes,
  uppercase?: boolean,
  variant?: "filled" | "outline" | "none",
  isActive?: boolean
}

type Props = LinkProps & React.HTMLAttributes<HTMLAnchorElement>

export const A = (props: Props & { extra?: ExtraProps }) => {

  let linkProps = { ...props }
  delete linkProps.extra

  return <Link {...linkProps} className={cn(
    orbitron.className,
    classes.default,
    getClasses(props.extra?.size),
    getClasses(props.extra?.variant),
    {
      [classes.uppercase]: props.extra?.uppercase,
      [classes.active]: props.extra?.isActive
    },
    props.className)} />
}


function getClasses(size?: string): string | undefined {
  return size && classes[size]
}