import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../themeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-btn-icon" onClick={toggleTheme} aria-label="Basculer le thème" title="Mode clair/sombre">
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
