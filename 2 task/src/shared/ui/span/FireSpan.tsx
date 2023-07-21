import React from 'react'
import { Span, SpanExtraProps, type SpanProps } from './Span'
import FireIcon from "@/../public/shared/fireIcon.svg"
import Image from 'next/image'
import cn from 'classnames'
import classes from "./FireSpan.module.css"

export const FireSpan = (props: SpanProps & { extra?: SpanExtraProps }) =>
  <div className={classes.fireblock}>
    <Image src={FireIcon} alt='иконка' />
    <Span {...props} extra={props.extra} className={cn(props.className, classes.span)}>
      {props.children}
    </Span>
  </div>
