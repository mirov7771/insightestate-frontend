import React, { FC } from 'react'
import { StyledSpacer } from '@/widgets/Spacer/styled'
import { TSpacerProps } from '@/widgets/Spacer/types'

export const Spacer: FC<TSpacerProps> = ({ width, height }) => {
    return <StyledSpacer width={width} height={height} />
}
