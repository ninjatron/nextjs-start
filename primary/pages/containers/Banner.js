import styled from 'styled-components'
// custom components
import GradientButton from '../components/gradientButton';

const BannerWrapper = styled.div`
  background: linear-gradient(180deg ,#bbdbe0, #f0f2f3);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 180px;

  h1 {
    color: #0a3148;
    font-size: 1.8rem;
    margin: 30px 0 0 0;
  }

  p {
    font-weight: 100;
  }
`;

const Banner = props => {
  return (
    <BannerWrapper>
      <h1>Find the best products</h1>
      <p>Real people, real experiences.</p>
      <GradientButton 
        fontColor="#fff" 
        primary="#e96566" 
        secondary="#b44855" 
        buttonText='Ask a friend'
      />
    </BannerWrapper>
  )
}

export default Banner;