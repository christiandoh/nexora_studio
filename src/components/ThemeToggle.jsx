import { useTheme } from '../themeContext';

export default function ThemeToggle() {
  const { toggleTheme } = useTheme();

  return (
    <button className="theme-btn" onClick={toggleTheme} aria-label="Basculer le thème" title="Mode clair/sombre" />
  );
}
