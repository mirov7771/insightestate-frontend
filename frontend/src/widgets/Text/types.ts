import { MouseEventHandler, ElementType, ReactNode, CSSProperties } from 'react'
import { theme } from '@/theme/theme'

export type TTextProps = {
    size: 'xxxl'|'xxl' | 'xl' | 'l' | 'm' | 's'
    colorTheme?: keyof typeof theme['colors']
    isBold?: boolean
    align?: 'left' | 'right' | 'center'
    opacity?: number
    className?: string
    href?: string
    as?: ElementType
    onClick?: MouseEventHandler
    style?: CSSProperties
    children?: ReactNode
}

