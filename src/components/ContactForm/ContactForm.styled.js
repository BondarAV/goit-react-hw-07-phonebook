import styled from 'styled-components';

export const ContactsForms = styled.form`
  width: 200px;
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

export const Span = styled.span`
  text-align: start;
`;

export const ContactsLabel = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContactsBtn = styled.button`
  height: 30px;
  padding: 8px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  :hover {
    background-color: lightgray;
  }
  margin-bottom: 10px;
`;

export const ContactsInput = styled.input`
  width: 100%;
  height: 25px;
  padding: 5px;
  outline: none;
  border: 1px solid black;
  border-radius: 10px;
`;
