import React from 'react'
import { orbitron } from '../fonts'
import classes from "./P.module.css"
import cn from 'classnames'

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

export const P = (props: Props) =>
  <p {...props} className={cn(orbitron.className, classes.default, props.className)} />