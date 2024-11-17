import { Control, Controller } from 'react-hook-form';
import { ErrorMessage, InputContainer } from './Input.styles';

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    control: Control<any, any>;
    name:string;
}

export function Input({ control, name, ...rest }: IInputProps) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
                <>
                    <InputContainer>
                        <input {...rest} onChange={onChange} onBlur={onBlur} value={value} ref={ref} />
                    </InputContainer>
                    {error?.message ? <ErrorMessage>{error?.message}</ErrorMessage> : null}
                </>
            )}
        />
    );
}
