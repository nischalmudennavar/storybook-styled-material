import { ComponentProps } from "react"


type ButtonProps = ComponentProps<'button'>
const Button = ({ ...props }: ButtonProps) => {
  return (
    <button {...props}>{props.children}</button>
  )
}

export default Button