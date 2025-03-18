import React, { FC } from 'react';
import { IconButton, InputAdornment } from '@mui/material';
import { Field } from '../Field/Field';
import { TFieldProps } from '../Field/types';
import { Cross } from '../Icons/Cross';

export const BaseField: FC<Omit<TFieldProps, 'variant' | 'fullWidth'>> = (props) => {
  return (
    <Field
      {...props}
      InputProps={{
        ...props.InputProps,
        disableUnderline: true,
        endAdornment:
          props.value && props.onClearField ? (
            <InputAdornment position="end">
              <IconButton onClick={props.onClearField} size="small" disabled={props.disabled}>
                <Cross />
              </IconButton>
            </InputAdornment>
          ) : (
            <></>
          ),
      }}
    />
  );
};
