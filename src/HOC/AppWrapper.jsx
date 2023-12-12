import ReduxProvider from "../redux";

const AppWrapper = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default AppWrapper;
