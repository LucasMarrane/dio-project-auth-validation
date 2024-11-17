import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { defaultValues, IFormLogin, loginSchema } from './Login.schema';
import { Button } from '../../../components/Button/Button.component';
import { Input } from '../../../components/Input/Input.component';
import { AuthContainer, Column, Container, ContainerFooter, Spacing, Title } from '../Auth.style';
import { ForgotPassword, NewAccount } from './Login.style';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function Login() {
    const navigate = useNavigate();
    const {
        control,
        formState: { isValid },
    } = useForm<IFormLogin>({
        resolver: zodResolver(loginSchema),
        mode: 'onBlur',
        defaultValues,
        reValidateMode: 'onChange',
    });

    return (
        <Container>
            <AuthContainer>
                <Column>
                    <Title>Login</Title>
                    <Spacing />
                    <Input name='email' placeholder='Email' control={control} />
                    <Spacing />
                    <Input name='password' type='password' placeholder='Senha' control={control} />
                    <Spacing />
                    <Button title='Entrar' disabled={!isValid} />
                    <Spacing />
                    <hr />
                    <Spacing />
                    <ContainerFooter>
                        <ForgotPassword onClick={() => toast.success('As instruções para troca de senha foram encaminhadas para o email informado.')}>Esqueci minha senha</ForgotPassword>
                        <NewAccount onClick={() => navigate('/cadastro')}>Criar Conta</NewAccount>
                    </ContainerFooter>
                </Column>
            </AuthContainer>
        </Container>
    );
}
