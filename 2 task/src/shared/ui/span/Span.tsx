import React from 'react'
import { orbitron } from '../fonts'
import classes from "./Span.module.css"
import cn from 'classnames'

export type SpanExtraProps = {
  uppercase?: true,
}

export type SpanProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLParagraphElement>

export const Span = (props: SpanProps & { extra?: SpanExtraProps }) =>
  <span {...props} className={cn(orbitron.className, classes.default, props.className, {
    [classes.uppercase]: props.extra?.uppercase,
  })} />