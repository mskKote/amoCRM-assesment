import React from 'react'
import { orbitron } from '../fonts'
import classes from "./H.module.css"
import cn from 'classnames'

type Props = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> & {
  order: 1 | 2 | 3 | 4 | 5 | 6
}

export const H = (props: Props) => {
  const classnames = cn(orbitron.className, classes.default, props.className)

  switch (props.order) {
    case 1: return <h1 {...props} className={classnames} />
    case 2: return <h2 {...props} className={classnames} />
    case 3: return <h3 {...props} className={classnames} />
    case 4: return <h4 {...props} className={classnames} />
    case 5: return <h5 {...props} className={classnames} />
    case 6: return <h6 {...props} className={classnames} />
  }
}