import { ApiProvider } from "api/use-api";
import { css } from "emotion";
import { HomePage } from "pages/home-page";
import React from "react";

export const App: React.FC = () => {
  return (
    <ApiProvider>
      <div
        className={css`
          @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap");
          * {
            font-family: "Open Sans", sans-serif;
            font-weight: 300;
          }
        `}
      >
        <HomePage />
      </div>
    </ApiProvider>
  );
};

export default App;
