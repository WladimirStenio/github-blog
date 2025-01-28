import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";

export interface Issue {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
  user: {
    login: string;
  };
  comments: number;
}

interface IssuesContextProps {
  data: Issue[] | null;
  searchQuery: string;
  fetchIssues: (query: string) => void;
}

const IssuesContext = createContext<IssuesContextProps>(
  {} as IssuesContextProps
);

const IssuesProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<Issue[] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchIssues = useCallback(async (query: string) => {
    try {
      setSearchQuery(query);

      const response = await axios.get(
        `https://api.github.com/search/issues?q=${encodeURIComponent(
          query
        )}+repo:WladimirStenio/github-blog`
      );

      setData(response.data.items); // Retorna os itens diretamente
    } catch (error) {
      console.error("API call failed:", error);
    }
  }, []);

  useEffect(() => {
    fetchIssues("");
  }, [fetchIssues]);

  return (
    <IssuesContext.Provider value={{ data, fetchIssues, searchQuery }}>
      {children}
    </IssuesContext.Provider>
  );
};

export { IssuesProvider, IssuesContext };
