import styled from 'styled-components'

const ButtonWrapper = styled.div`
  background: ${props => props.primary};
  display: inline-block;
  font-size: .9rem;
  font-weight: light;
  padding: 0 1.5rem;
  border: 0;
  border-radius: ${props => props.radius}px;
  width: auto;
  height: 40px;
  line-height: 40px;
  margin-right: 10px;

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

const basicButton = props => {
  return (
    <ButtonWrapper 
      fontColor={props.fontColor} 
      primary={props.primary} 
      radius={props.radius}>
      {props.buttonText}
    </ButtonWrapper>
  )
}

export default basicButton;