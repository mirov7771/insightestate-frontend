import React, { FC } from 'react'
import { StyledField } from './styled'
import { TFieldProps } from './types'

export const Field: FC<TFieldProps> = ({ onClearField, ...props }) => {
    return <StyledField {...props} variant='filled' fullWidth />
}
