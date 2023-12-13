import "./styles/_index.scss";
import "./App.scss";
import { useThemeContext } from "./contexts";
import { AppWrapper } from "./HOC";
import { Players } from "./pages";
import { mainPage as copies } from "./copies";
import { ThemeToggle } from "./components";

function App() {
  const { theme, themeSwitch } = useThemeContext();

  return (
    <div className={`App ${theme}`}>
      <header>
        <h2 className="title">{copies.title}</h2>
      </header>
      <ThemeToggle onClick={themeSwitch} />
      <Players className={"players"} />
    </div>
  );
}

const AppWithWrapper = () => (
  <AppWrapper>
    <App />
  </AppWrapper>
);
export default AppWithWrapper;
