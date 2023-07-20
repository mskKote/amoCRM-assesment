import React from 'react'
import Link, { type LinkProps } from 'next/link'
import { orbitron } from '../fonts'
import cn from 'classnames'
import classes from "./A.module.css"

type Sizes = "sm" | "md" | "lg" | undefined

type Props = LinkProps & React.HTMLAttributes<HTMLAnchorElement> & {
  size?: Sizes,
  uppercase?: boolean,
  variant?: "filled" | "outline",
  isActive?: boolean
}

export const A = (props: Props) =>
  <Link {...props} className={cn(
    orbitron.className,
    classes.default,
    getClasses(props.size),
    getClasses(props.variant),
    {
      [classes.uppercase]: props.uppercase,
      [classes.active]: props.isActive
    },
    props.className)} />

function getClasses(size?: string): string | undefined {
  return size && classes[size]
}