import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { UserProfile } from "../../components/UserProfile";
import { SearchBar } from "../../components/SearchBar";
import {
  Highlighted,
  PostBody,
  PostLabel,
  PostsContainer,
  PostsWrapper,
} from "./style";
import { IssuesContext } from "../../context/GithubIssuesContext";

export const Home = () => {
  const { data, fetchIssues, searchQuery } = useContext(IssuesContext);
  const navigate = useNavigate();

  const handlePostClick = (postNumber: number) => {
    navigate(`post/${postNumber}`);
  };

  const splitAndHighlight = (
    text: string,
    query: string,
    snippetLength = 150
  ) => {
    if (!query) return <>{text}</>;

    const regex = new RegExp(`(${query})`, "gi");
    const match = text.toLowerCase().match(regex);

    if (!match) return <>{text}</>;

    const start = Math.max(
      0,
      text.toLowerCase().indexOf(match[0]) - snippetLength / 2
    );
    const end = Math.min(text.length, start + snippetLength);

    const snippet = text.substring(start, end);
    const parts = snippet.split(regex).filter(Boolean);

    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <Highlighted key={index}>{part}</Highlighted>
          ) : (
            part
          )
        )}
      </>
    );
  };

  useEffect(() => {
    fetchIssues("");
  }, [fetchIssues]);

  return (
    <div>
      <Header />
      <UserProfile />
      <SearchBar />
      <PostsWrapper>
        {data?.map((issue) => (
          <PostsContainer
            key={issue.id}
            onClick={() => handlePostClick(issue.number)}
            style={{ cursor: "pointer" }}
          >
            <PostLabel>{splitAndHighlight(issue.title, searchQuery)}</PostLabel>
            <PostBody>{splitAndHighlight(issue.body, searchQuery)}</PostBody>
          </PostsContainer>
        ))}
      </PostsWrapper>
    </div>
  );
};
