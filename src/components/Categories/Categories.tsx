import { useEffect, useState } from "react";
import api from "../../services/api";
import { CategoryTypes } from "../../types/categoryTypes";

interface CategoryProps {
  handleCategoryButtonClick: (categoryTypes: CategoryTypes | null) => void;
}

export function Categories({ handleCategoryButtonClick }: CategoryProps) {
  const [categoriesItem, setCategoriesItem] = useState<CategoryTypes[]>([]);
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryTypes | null>(null);

  useEffect(() => {
    async function fetchApi() {
      const response = await api.get<CategoryTypes[]>("/categories");
      setCategoriesItem(response.data);
    }
    fetchApi();
  }, []);

  const handleCategoryClick = (category: CategoryTypes | null) => {
    setSelectedCategory(category);
    handleCategoryButtonClick(category);
  };

  return (
    <div className="flex w-full items-center mt-8 justify-center flex-wrap gap-5 lg:gap-20">
      <button
        className={`p-3 w-52 text-white rounded-lg ${
          selectedCategory === null ? "bg-yellow-700" : "bg-yellow-500"
        }`}
        onClick={() => handleCategoryClick(null)}>
        Todos
      </button>
      {categoriesItem.map((category) => (
        <button
          key={category.id}
          className={`p-3 w-52 text-white rounded-lg ${
            selectedCategory === category ? "bg-yellow-700" : "bg-yellow-500"
          }`}
          onClick={() => handleCategoryClick(category)}>
          {category.title}
        </button>
      ))}
    </div>
  );
}
