import _z from 'zod';

export interface IFormLogon {
    email: string;
    password: string;
    fullname: string;
    birthDate?: Date;
}

export const defaultValues: IFormLogon = {
    email: '',
    password: '',
    fullname: '',
};

export const logonSchema: _z.ZodType<IFormLogon> = _z.object({
    email: _z.string({ required_error: 'Campo obrigatório' }).email('E-mail inválido'),
    password: _z.string({ required_error: 'Campo obrigatório' }).min(6, 'No minimo 6 caracteres'),
    fullname: _z.string({ required_error: 'Campo obrigatório' }),
});
