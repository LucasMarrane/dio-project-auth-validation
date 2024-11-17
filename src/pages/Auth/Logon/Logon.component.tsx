import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { defaultValues, IFormLogon, logonSchema } from './Logon.schema';
import { Button } from '../../../components/Button/Button.component';
import { Input } from '../../../components/Input/Input.component';
import { AuthContainer, Column, Container, ContainerFooter, Spacing, Title } from '../Auth.style';
import { HasAccount } from './Logon.style';
import { useNavigate } from 'react-router-dom';

export function Logon() {
    const navigate = useNavigate();
    const {
        control,
        formState: { isValid },
    } = useForm<IFormLogon>({
        resolver: zodResolver(logonSchema),
        mode: 'onBlur',
        defaultValues,
        reValidateMode: 'onChange',
    });

    return (
        <Container>
            <AuthContainer>
                <Column>
                    <Title>Criar conta</Title>
                    <Spacing />
                    <Input name='fullname' placeholder='Nome completo' control={control} />
                    <Spacing />
                    <Input name='birthDate' type='date' placeholder='Data de nascimento' control={control} />
                    <Spacing />
                    <Input name='email' placeholder='Email' control={control} />
                    <Spacing />
                    <Input name='password' type='password' placeholder='Senha' control={control} />
                    <Spacing />
                    <Button title='Criar' disabled={!isValid} />
                    <Spacing />
                    <hr />
                    <Spacing />
                    <ContainerFooter>
                        <HasAccount onClick={()=> navigate('/')}>
                            Já tenho uma conta <b>cadastrada</b>
                        </HasAccount>
                    </ContainerFooter>
                </Column>
            </AuthContainer>
        </Container>
    );
}
