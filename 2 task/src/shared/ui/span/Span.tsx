import React from 'react'
import { orbitron } from '../fonts'
import classes from "./Span.module.css"
import cn from 'classnames'

export type SpanProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLParagraphElement> & {
  uppercase?: true
}

export const Span = (props: SpanProps) =>
  <span {...props} className={cn(orbitron.className, classes.default, props.className, {
    [classes.uppercase]: props.uppercase,
  })} />