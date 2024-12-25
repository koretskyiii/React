import { useStore } from "effector-react";
import { $filter, setFilter } from "../store";

const useFilter = () => {
  const filter = useStore($filter);

  const updateFilter = (value) => {
    setFilter(value);
  };

  return { filter, updateFilter };
};

export default useFilter;