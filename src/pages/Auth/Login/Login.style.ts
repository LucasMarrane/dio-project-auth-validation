import styled from 'styled-components';
import { Row } from '../Auth.style';

export const ContainerFooter = styled(Row)`
justify-content: space-between;
`;

export const ForgotPassword = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    border: 1px solid #81259d;
    border-radius: 20px;
    padding: 10px;

    color: #81259d;
`;

export const NewAccount = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    border: 1px solid #23dd7a;
    border-radius: 20px;
    padding: 10px;

    color: #23dd7a;
`;
