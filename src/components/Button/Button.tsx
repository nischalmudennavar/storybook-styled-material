import {ComponentProps} from "react";

type Props = {
    text:string,
}

type ButtonProps = ComponentProps<'button'> & Props

 const Button:React.FC<ButtonProps> = ({text, ...props}) => {
    return <button {...props}>{text}</button>
}
 export default Button
