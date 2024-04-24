
import { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'>

const Input: React.FC<InputProps> =({...props}:InputProps) => {
  return (
    <input {...props} />
  )
}

export default Input