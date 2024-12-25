import { useState } from "react";

const useToggleSummary = () => {
  const [showSummary, setShowSummary] = useState(false);

  const toggleSummary = () => {
    setShowSummary((prev) => !prev);
  };

  return { showSummary, toggleSummary };
};

export default useToggleSummary;