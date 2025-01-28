import {
  PostWrapper,
  PostInfo,
  IconWrapper,
  IconItem,
  IconImage,
  IconText,
  Link,
  LinkImage,
  LinksContainer,
  LinkButton,
  InfoWrapper,
} from "./style";
import gitIcon from "../../assets/git icon.svg";
import dateIcon from "../../assets/date.svg";
import commentIcon from "../../assets/comment.svg";
import linkIcon from "../../assets/link icon.svg";
import backIcon from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";
import { Issue } from "../../context/GithubIssuesContext";
import { formatDistanceToNow, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PostProfileProps {
  post: Issue;
}

export const PostProfile = ({ post }: PostProfileProps) => {
  const navigate = useNavigate();

  const timeAgo = formatDistanceToNow(parseISO(post.created_at), {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <PostWrapper>
      <PostInfo>
        <LinksContainer>
          <LinkButton onClick={() => navigate(-1)}>
            <LinkImage src={backIcon} />
            VOLTAR
          </LinkButton>
          <Link
            href={`https://github.com/WladimirStenio/github-blog/issues/${post.number}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            VER NO GITHUB
            <LinkImage src={linkIcon} />
          </Link>
        </LinksContainer>

        <InfoWrapper>
          <h2>{post.title}</h2>

          <IconWrapper>
            <IconItem>
              <IconImage src={gitIcon} />
              <IconText>{post.user.login}</IconText>
            </IconItem>
            <IconItem>
              <IconImage src={dateIcon} />
              <IconText>{timeAgo}</IconText>
            </IconItem>
            <IconItem>
              <IconImage src={commentIcon} />
              <IconText>{`${post.comments} comentários`}</IconText>
            </IconItem>
          </IconWrapper>
        </InfoWrapper>
      </PostInfo>
    </PostWrapper>
  );
};
