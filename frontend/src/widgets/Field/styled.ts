import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { theme } from '@/theme/theme';

export const StyledField = styled(TextField)`
  & .MuiInputLabel-root {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    &.Mui-focused {
      color: ${theme.colors.black500};
    }
    &.Mui-error {
      color: ${theme.colors.error};
    }
  }
  &.MuiTextField-root {
    border-radius: 10px;
    &:focus,
    &:focus-within,
    &:focus-visible {
    }
  }
  & .MuiFilledInput-root {
    background: ${theme.colors.white100};
    border: 2px solid ${theme.colors.white300};
    border-radius: 10px;
    &.MuiInputBase-adornedEnd {
      padding-right: 16px;
    }
    &.Mui-focused,
    &.Mui-disabled {
      background: ${theme.colors.white100};
    }
    &:hover {
      background-color: ${theme.colors.white100};
    }
  }
  & .MuiFilledInput-input {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.2px;
    color: ${theme.colors.black200};
    background: ${theme.colors.white100};
    border-radius: 10px;
  }
  & .MuiFormHelperText-root {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.1px;
    color: ${theme.colors.black500};
    &.Mui-error {
      color: ${theme.colors.error};
    }
  }
`;
