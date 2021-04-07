// we could create child folders to groups stuff but I think sufficient for this
import styled from 'styled-components'
import Link from 'next/link'
// custom components

const PostWrapper = styled.section`
  background: #fff;
  color: #201f1e;
  padding: 0 15px;
  width: calc(100% - 30px);
  margin-bottom: 15px;

  a {
    color: #69aad2;
    text-decoration: none;
  }
`;

const PostHeader = styled.header`
  padding-top: 15px; 

  h2 {
    color: #0a3148;
    font-size: 1.5rem;
    margin-top: 0;
    line-height: 1.8rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  ul {
    color: #8a8d94;
    display: block;
    font-size: .9rem;
    text-overflow: ellipsis;
    padding: 0;
    height: 1rem;
    width: 100%;
    whitespace: nowrap;

    li {
      float: left;
      margin: 0 12px 0 15px;
    }
  }
`;

const PostAnswer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  text-overflow: ellipsis;
  height: 100px;

  p {
    line-height: 1.5rem;
    width: 50%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  b {
    color: #666;
  }

  &:last-of-type {
    margin-bottom: 15px;
  }
`;

const FakeImage = styled.div`
  background: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  height: 100px;
  width: 45%;
`;

const Question = styled.div`
  font-size: 1.1rem;
`;

const UserRecommendation = styled.input`
  color: #333;
  height: 2.2rem;
  background: #f7f7f7;
  border: 1px solid #cacbce;
  border-radius: 4px;
  margin: 2rem 0 0 0;
  width: calc(100% - 6px);
  text-indent: 20px;

  &:focus {
    outline: none;
    background: #f3f3f3;
  }
`;

const PostFooter = styled.footer`
  border-top: 1px solid #ccc;
  margin-top: 15px;
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;
  width: 100%;
  margin-left: -15px;
`;

const Post = props => {
  return (
    <PostWrapper>
      <PostHeader>
        <h2>{props.post_title}</h2>
        <ul>
          <li>asked <Link href={`/user/${props.username}`}><a>{props.username}</a></Link></li> 
          {props.follower_count > 0 && (<li>{props.follower_count} followers </li>)}
          <li><Link href={`/user/${props.post_topic}`}><a>{props.post_topic}</a></Link></li>
        </ul>
      </PostHeader>
      { props.answers && props.answers.length > 0 ? 
        props.answers.filter((ans, idx) => idx < 3).map(ans => 
          <PostAnswer key={ans.answer_id}>
            <FakeImage>Image Here</FakeImage>
            <p>
              <b>{ans.username}: </b>
              {ans.answer_text}
            </p>
          </PostAnswer> 
        ) : (
          <Question>
            {props.post_text}
            <UserRecommendation 
              placeholder='Your recommendation' 
              type='text' 
            />
          </Question>    
        )
      }
      { props.answers && props.answers.length > 3 ?
        (<Link href={`/tofullanswers/`}>
          <a>+{props.answers.length - 3} More Suggestions</a>
        </Link>) : ('')
      }
      <PostFooter>
        <Link href="follow"><a>Follow</a></Link>
        <Link href="share"><a>Share</a></Link>
      </PostFooter>
    </PostWrapper>
  )
}

export default Post;