
const { default: styled } = require("styled-components");

export const Container = styled.div`
padding: 0 20px;
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
gap: 10px;
margin-bottom: 20px;
`


export const Input = styled.input`
width: 200px;
`;

export const List = styled.ul`
list-style: none;
margin: 0;
padding: 0;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

`;

export const PhoneNumber = styled.span`
margin-left: 5px;
`;

export const ButtonDelete = styled.button`
background-color: #fff;
color: #000;
border-radius: 10px;
padding: 1px 4px;
font-size: 12px;
margin-left: 20px;

:hover{
    background-color: #ff3333fd;
color: #fff;
}
`;