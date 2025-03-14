import React from 'react'
import { ButtonProps } from '@mui/material'

export type TButtonProps = <C extends React.ElementType>(
    props: ButtonProps<
        C,
        { component?: C; isLoading?: boolean; className?: string }
    >
) => React.ReactElement | null
