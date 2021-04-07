import styled from 'styled-components'
// custom components

const FooterWrapper = styled.div`
  background: #f7f7f8;
  border-top: 1px solid #dad9d8;
  color: #777;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60px;
`;

const Icon = styled.span`
  border-radius: 1rem;
  font-size: .8rem;
`;

const Footer = props => {
  return (
    <FooterWrapper>
      <Icon>Ask</Icon>
      <Icon>PROFILE</Icon>
    </FooterWrapper>
  )
}

export default Footer;