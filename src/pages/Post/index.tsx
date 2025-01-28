import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { PostProfile } from "../../components/PostProfile";
import ReactMarkdown from "react-markdown";
import { PostBodyWrapper } from "./style";
import { Issue } from "../../context/GithubIssuesContext";
import axios from "axios";

export const Post = () => {
  const { number } = useParams();
  const [data, setData] = useState<Issue | null>(null);

  useEffect(() => {
    const fetchGithubPost = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/repos/WladimirStenio/github-blog/issues/${number}`
        );
        setData(response.data);
      } catch (error) {
        console.error("API call failed:", error);
      }
    };

    if (number) {
      fetchGithubPost();
    }
  }, [number]);

  if (!data) return <p>Carregando...</p>;

  return (
    <div>
      <Header />
      <PostProfile post={data} />
      <PostBodyWrapper>
        <ReactMarkdown>{data.body}</ReactMarkdown>
      </PostBodyWrapper>
    </div>
  );
};
