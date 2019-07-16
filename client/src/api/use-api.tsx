import React, { createContext, useContext, useEffect, useState } from "react";

type ApiContextType = {
  value?: string[] | null;
  setValue: (value: string[] | null) => void;
};

const ApiContext = createContext<ApiContextType>({
  setValue: () => {
    console.warn("ApiContext was not initialized");
  },
});

export const ApiProvider: React.FC<{}> = ({ ...props }) => {
  const [value, setValue] = useState<string[] | null | undefined>();

  return <ApiContext.Provider value={{ value, setValue }} {...props} />;
};

export const useApi = () => {
  const { value, setValue } = useContext(ApiContext);

  useEffect(() => {
    if (!value && value !== null) {
      fetch(
        "https://raw.githubusercontent.com/hvgeertruy/frontend-exercise/master/assets/items.json",
        { method: "GET" }
      )
        .then(async response => {
          if (response.ok) {
            const body = await response.json();

            if (!body.data) {
              throw new Error("Response body was not expected");
            }

            setValue(body.data);
          }
        })
        .catch(err => {
          setValue(null);
        });
    }
  }, [value, setValue]);

  return { items: value };
};
