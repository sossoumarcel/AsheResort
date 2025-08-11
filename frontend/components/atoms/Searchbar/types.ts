export interface SearchBarProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  className?: string; // ✅ Ajoute cette ligne
}