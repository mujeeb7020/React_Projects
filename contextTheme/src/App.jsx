import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/Theme";
import ThemeBtn from './components/ThemeBtn'
import Card from "./components/Card";
function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  

  useEffect(() => {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.remove('light', 'dark');
    htmlElement.classList.add(themeMode);
  }, [themeMode]);
  

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full border bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white text-black p-1.5 rounded-xl" >
          <div className="w-full max-w-sm mx-auto flex justify-end mb-3">
              <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
