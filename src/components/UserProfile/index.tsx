import { useContext } from "react";
import {
  ProfileWrapper,
  ProfilePicture,
  ProfileImage,
  ProfileInfo,
  IconWrapper,
  IconItem,
  IconImage,
  IconText,
} from "./style";

import { GithubUserContext } from "../../context/GithubUserContext";
import gitIcon from "../../assets/git icon.svg";
import jobIcon from "../../assets/job icon.svg";
import followerIcon from "../../assets/follower icon.svg";

export const UserProfile = () => {
  const { data } = useContext(GithubUserContext);

  if (!data) {
    return <p>Carregando...</p>;
  }

  return (
    <ProfileWrapper>
      <ProfilePicture>
        <ProfileImage src={data.avatar_url} alt={data.name} />
      </ProfilePicture>
      <ProfileInfo>
        <h2>{data.name}</h2>
        <p>{data.bio || "Sem descrição disponível."}</p>
        <IconWrapper>
          <IconItem>
            <IconImage src={gitIcon} alt="GitHub Icon" />
            <IconText>{data.login}</IconText>
          </IconItem>
          <IconItem>
            <IconImage src={jobIcon} alt="Job Icon" />
            <IconText>Front-End</IconText>
          </IconItem>
          <IconItem>
            <IconImage src={followerIcon} alt="Followers Icon" />
            <IconText>{data.followers} Seguidores</IconText>
          </IconItem>
        </IconWrapper>
      </ProfileInfo>
    </ProfileWrapper>
  );
};
