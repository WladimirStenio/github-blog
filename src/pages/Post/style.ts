import styled from "styled-components";

export const PostBodyWrapper = styled.div`
  display: flex;
  flex-direction: column; // Para garantir que o conteúdo fique alinhado verticalmente
  width: 100%;
  max-width: 864px;
  margin-top: 4rem; // Espaçamento para ficar alinhado com o PostProfile
  transform: translateX(38%);

  p {
    color: ${(props) => props.theme["base-text"]};
    text-align: justify;
    margin-bottom: 0.625rem;
    line-height: 1.6;
  }

  img {
    max-width: 100%;
  }

  h1,
  h2,
  h3,
  h4 {
    color: ${(props) => props.theme["base-title"]};
    margin-bottom: 1rem;
    font-weight: bold;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }

  ul {
    list-style-type: disc;
    padding-left: 1.25rem;
    margin-bottom: 1rem;
  }

  li {
    margin-top: 0.7rem;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme["base-text"]};
  }

  code {
    color: ${(props) => props.theme["base-span"]};
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.875rem;
    margin-bottom: 0.625rem;
  }

  pre {
    background-color: ${(props) => props.theme["base-background-code"]};
    color: ${(props) => props.theme["base-text"]};
    margin-bottom: 0.625rem;
    padding: 1rem;
    border-radius: 0.25rem;
    overflow-x: auto;
    font-size: 0.875rem;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  blockquote {
    background-color: ${(props) => props.theme["base-background"]};
    padding: 1rem;
    margin: 1.25rem 0;
    border-left: 5px solid ${(props) => props.theme["blue"]};
    font-style: italic;
    color: ${(props) => props.theme["base-text"]};
  }

  a {
    color: ${(props) => props.theme["blue"]};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
