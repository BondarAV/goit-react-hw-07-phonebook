import styled from 'styled-components';

export const Contact = styled.li`
  height: 40px;
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const ContactTitle = styled.p`
  ::first-letter {
    text-transform: uppercase;
  }
`;

export const ContactListUl = styled.ul`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  width: max-content;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  gap: 10px;
`;

export const ContactBtn = styled.button`
  height: 30px;
  text-align: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 4px;
  margin-left: 7px;
  :hover {
    background-color: lightgray;
  }
`;
