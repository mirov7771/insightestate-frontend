import styled from '@emotion/styled'
import { Button, ButtonProps, CircularProgress } from '@mui/material'
import { theme } from '@/theme/theme'

export const StyledButton = styled(Button)<
    ButtonProps & { isLoading?: boolean }
>`
  &.MuiButton-root {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    letter-spacing: -0.2px;
    border-radius: 8px;
    box-shadow: none;
    text-transform: none;
  }

  &.MuiButton-sizeSmall {
    font-size: 14px;
    line-height: 20px;
    padding: 10px 16px;
  }
  &.MuiButton-sizeMedium {
    font-size: 16px;
    line-height: 24px;
    padding: 12px 24px;
  }
  &.MuiButton-sizeLarge {
    font-size: 16px;
    line-height: 24px;
    padding: 16px 32px;
  }

  &.MuiButton-containedPrimary {
    background-color: ${theme.colors.brand100};
    color: ${({ isLoading }) =>
    isLoading ? 'transparent' : theme.colors.white100};
  }
  &.MuiButton-containedSecondary {
    background-color: ${theme.colors.white200};
    color: ${({ isLoading }) =>
    isLoading ? 'transparent' : theme.colors.black200};
  }
  &.MuiButton-containedInfo {
    background-color: ${theme.colors.link};
    color: ${({ isLoading }) =>
    isLoading ? 'transparent' : theme.colors.white100};
  }

  &.Mui-disabled {
    background-color: ${theme.colors.white400};
    color: ${({ isLoading }) =>
    isLoading ? 'transparent' : theme.colors.black500};
  }
`

export const StyledCircularProgress = styled(CircularProgress)`
  position: absolute;
  visibility: visible;
  display: flex;
  color: ${theme.colors.white100};
`
