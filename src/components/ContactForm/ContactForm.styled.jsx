import styled from "styled-components";
import { ErrorMessage, Field } from "formik";



export const Form = styled.form`

display: flex;
flex-direction: column;
gap: 40px;
border: 1px solid #212121;

padding: 20px;
`

export const Label = styled.label`
display: flex;
flex-direction: column;
font-size: 20px;

`

export const Input = styled(Field)`
width: 200px
`;


export const Button = styled.button`
width: 100px;
padding: 3px 8px;
border-radius: 5px;
color: #000;
background-color: white;

:hover{
    background-color: green;
color: #fff;
}
`;

export const Messege = styled(ErrorMessage)`
/* position: relative; */
color: red;
font-size: 10px;
`