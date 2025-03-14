import React, { FC } from 'react'
import { TextUI } from './styled'
import { TTextProps } from './types'

export const Text: FC<TTextProps> = ({
  size,
  isBold = false,
  as = 'p',
  colorTheme = 'black100',
  align = 'left',
  className,
  href,
  opacity,
  onClick,
  style,
  children
}) => (
    <TextUI
        isBold={isBold}
        size={size}
        as={as}
        colorTheme={colorTheme}
        align={align}
        className={className}
        href={href}
        onClick={onClick}
        opacity={opacity}
        style={style}
    >
        {children}
    </TextUI>
)
