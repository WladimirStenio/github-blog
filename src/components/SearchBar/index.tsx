import { ChangeEvent, useContext, useState } from "react";
import {
  SearchBarWrapper,
  SearchInput,
  SearchLabel,
  SearchSpan,
} from "./style";
import { IssuesContext } from "../../context/GithubIssuesContext";

export const SearchBar = () => {
  const [placeholder, setPlaceholder] = useState("Buscar conteúdo");
  const [debounceTimeout, setDebounceTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const { data, fetchIssues } = useContext(IssuesContext);

  const handleFocus = () => {
    setPlaceholder("Texto da busca");
  };

  const handleBlur = () => {
    setPlaceholder("Buscar conteúdo");
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (debounceTimeout !== null) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(() => {
      fetchIssues(value);
    }, 300);

    setDebounceTimeout(timeout);
  };

  console.log("Issues:", data);
  return (
    <SearchBarWrapper>
      <SearchLabel>Publicações</SearchLabel>
      <SearchSpan>{`${data?.length} publicações`}</SearchSpan>
      <SearchInput
        type="text"
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleSearchChange}
      />
    </SearchBarWrapper>
  );
};
