import { ButtonContainer } from './Button.styles';

export interface IButtonProps extends Omit<Partial<HTMLButtonElement>, 'onClick' | 'title'> {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({ title, onClick, ...props}: IButtonProps) {
    return <ButtonContainer onClick={onClick} {...props as any}>{title}</ButtonContainer>;
}
