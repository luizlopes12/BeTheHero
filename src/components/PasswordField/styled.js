import styled from  'styled-components'

export const FieldStyle = styled.input`
    background: #FFF;
    border: 1px solid #DCDCE5;
    width: ${props => props.width};
    height: ${props => props.height};
    font-size: .9em;    
    padding: 5px;
    border-radius: 8px;
    &::placeholder{
        color: #A8A8B3;
    }
`;