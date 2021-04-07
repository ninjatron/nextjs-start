import styled from 'styled-components'
// custom components
import Post from './Post';

const PostsWrapper = styled.main`
`;

const Posts = props => {
  return (
    <PostsWrapper>
      { props.posts && 
        props.posts.map(p => 
          <Post key={p.post_id} {...p} />
        )
      }
    </PostsWrapper>
  )
}

export default Posts;