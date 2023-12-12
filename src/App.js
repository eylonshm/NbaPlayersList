import "./App.scss";
import { useThemeContext } from "./contexts";
import { AppWrapper } from "./HOC";
import "./styles/_index.scss";

function App() {
  const { theme } = useThemeContext();
  return <div className={`App ${theme}`}>Content goes here</div>;
}

const AppWithWrapper = () => (
  <AppWrapper>
    <App />
  </AppWrapper>
);
export default AppWithWrapper;
