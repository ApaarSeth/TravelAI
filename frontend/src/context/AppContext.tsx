import { createContext, ReactNode, useState } from "react";

type loadingContextType = {
  loading: boolean;
  error: string | null;
  setLoader: (loaderState: boolean) => void;
  setErrors: (errorState: string) => void;
};

type Props = {
  children: ReactNode;
};

const LoaderContext = createContext<loadingContextType>({
  loading: false,
  error: "",
  setErrors: () => {},
  setLoader: () => {},
});

export const LoaderContextProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setLoader = (loaderState: boolean) => {
    if (loaderState) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  };

  const setErrors = (errorState: any) => {
    if (errorState) {
      setError(errorState.message);
    } else {
      setError("");
    }
  };
  return (
    <LoaderContext.Provider value={{ loading, error, setLoader, setErrors }}>
      {children}
    </LoaderContext.Provider>
  );
};

export default LoaderContext;
