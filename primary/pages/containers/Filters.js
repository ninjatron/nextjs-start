import styled from 'styled-components'
// custom components
import BasicButton from '../components/basicButton';

const FiltersWrapper = styled.div`
  display: block;
  padding: 10px;
  height: 45px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  scrollbar-width: none;
`;

const Filters = props => {
  // following is just fake, we get tags from somewhere else normally
  const mock = ['Filters', 'All questions', 'bass', 'tesla'];

  return (
    <FiltersWrapper>
      { mock.map((tag, idx) =>
        <BasicButton 
          key={idx}
          fontColor="#080808" 
          primary="#fff" 
          radius={30}
          buttonText={tag}
        />
      )}
    </FiltersWrapper>
  )
}

export default Filters;