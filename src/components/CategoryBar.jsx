import { observer } from "mobx-react-lite";
import React, { useState, useContext } from "react";

import { Context } from "../index";

import "../styles/Category.css";

export const CategoryBar = observer(() => {
  const { Categories, BreadCrumbs } = useContext(Context);
  const [selectedCategory, setSelectedCategory] = useState(
    Categories.selectedCategory
  );

  return (
    <div>
      {Categories.categories.map((category) => {
        return (
          <div
            className={
              category.id === selectedCategory.id
                ? "CategoryListItem activeCategory"
                : "CategoryListItem"
            }
            key={category.id}
            onClick={() => {
              BreadCrumbs.setCrumb({ to: "/category", name: category.name }, 1);
              Categories.setSelectedCategory(category);
              setSelectedCategory(category);
            }}
          >
            {category.name}
          </div>
        );
      })}
    </div>
  );
});
