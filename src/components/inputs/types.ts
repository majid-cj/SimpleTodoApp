import {ReactElement} from 'react';
import SVG from 'react-native-svg';

export interface InputFieldProps {
  initialValue?: string;
  editable?: boolean;
  onValue: (value: string) => void;
  code?: string;
  icon?: ReactElement<SVG>;
  reset?: number;
  maxLength?: number;
  validationRequired?: boolean;
}

export interface TextAreaProps {
  initialValue?: string;
  editable?: boolean;
  onValue: (value: string) => void;
  code?: string;
  icon?: ReactElement<SVG>;
  placeholder?: string;
  helper?: string;
  maxLength?: number;
  validationRequired?: boolean;
}
