import _z from 'zod';

export interface IFormLogin {
    email: string;
    password: string;
}

export const defaultValues: IFormLogin = {
    email: '',
    password: '',
};

export const loginSchema: _z.ZodType<IFormLogin> = _z.object({
    email: _z.string({ required_error: 'Campo obrigatório' }).email('E-mail inválido'),
    password: _z.string({ required_error: 'Campo obrigatório' }).min(6, 'No minimo 6 caracteres'),
});
