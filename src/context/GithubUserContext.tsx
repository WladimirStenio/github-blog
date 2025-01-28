import { createContext, useCallback, useEffect, useState } from "react";
import axios from "axios";

interface GithubUser {
  name: string;
  login: string;
  followers: string;
  posts: string;
  avatar_url: string;
  bio: string;
}

interface GithubUserContextProps {
  data: GithubUser | null;
}

const GithubUserContext = createContext<GithubUserContextProps>(
  {} as GithubUserContextProps
);

const GithubProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<GithubUser | null>(null);

  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://api.github.com/users/wladimirstenio"
      );
      const data = await response.data;
      console.log(data);
      setData(data);
    } catch (error) {
      console.error("API call failed:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <GithubUserContext.Provider value={{ data }}>
      {children}
    </GithubUserContext.Provider>
  );
};

export { GithubProvider, GithubUserContext };
