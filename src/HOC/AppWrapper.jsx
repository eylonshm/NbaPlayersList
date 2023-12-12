import ReduxProvider from "../redux";
import { ThemeProvider } from "../contexts";

const AppWrapper = ({ children }) => {
  return (
    <ReduxProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ReduxProvider>
  );
};

export default AppWrapper;
