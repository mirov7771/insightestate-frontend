import { TextFieldProps } from '@mui/material';

export type TFieldProps = TextFieldProps & { onClearField?: () => void };
