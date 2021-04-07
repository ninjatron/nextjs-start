import styled from 'styled-components'

const ButtonWrapper = styled.div`
  background-image: linear-gradient(to right, ${props => props.primary}, 
                                              ${props => props.secondary});
  color: ${props => props.fontColor};
  font-size: 1.1rem;
  font-weight: bold;
  padding-left: 1.5rem;
  border: 0;
  border-radius: 4px;
  width: 170px;
  height: 40px;
  line-height: 40px;

  span {
    border-left: 1px solid #d75b60;
    box-shadow: -1px 0 0 #b84a56;
    float: right;
    height: 100%;
    text-align: center;
    width: 25%;
  }

  &:hover {
    cursor: pointer;
  }
`;

const gradientButton = props => {
  return (
    <ButtonWrapper 
      fontColor={props.fontColor} 
      primary={props.primary} 
      secondary={props.secondary}>
      {props.buttonText}
      <span>
        +
      </span>
    </ButtonWrapper>
  )
}

export default gradientButton;