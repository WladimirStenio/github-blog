import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { GithubProvider } from "./context/GithubUserContext";
import { IssuesProvider } from "./context/GithubIssuesContext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <GithubProvider>
        <IssuesProvider>
          <Outlet />
        </IssuesProvider>
      </GithubProvider>
    </ThemeProvider>
  );
}

export default App;
