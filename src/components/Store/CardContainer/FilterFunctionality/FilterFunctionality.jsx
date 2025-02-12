import { useContext } from "react";
import ShopContext from "../../../../context";

function FilterFunctionality() {
  const { fruits, filters, favouritePage, query } = useContext(ShopContext);

  // 1. Filter fruits based on whether the user is on the favourite page
  const fruitsToDisplay = favouritePage ? fruits.filter((fruit) => fruit.isFavourited) : fruits;

  // 2. Get active filters (fruit.family is a string)
  const activeFamilyFilters = filters.Family.filter((family) => family.isChecked);
  const activeColorFilters = filters.colors.filter((color) => color.isChecked).map((color) => color.name);
  const activeVitaminFilters = filters.Vitamins.filter((vitamin) => vitamin.isChecked).map((vitamin) => vitamin.name);

  // 3. Apply filter conditions for family, color, and vitamins
  let finalFilteredFruits = fruitsToDisplay.filter((fruit) => {
    // Family: If no family filter is active, it passes. Otherwise, fruit.family must match one active filter.
    const familyMatchFilter = activeFamilyFilters.length === 0 || activeFamilyFilters.some((filter) => filter.name === fruit.family);

    // Color: If no color filter is active, it passes. Otherwise, every active color must be in fruit.category.
    const colorMatchFilter = activeColorFilters.length === 0 || activeColorFilters.every((color) => fruit.category.includes(color));

    // Vitamin: If no vitamin filter is active, it passes. Otherwise, every active vitamin must be in fruit.category.
    const vitaminMatchFilter = activeVitaminFilters.length === 0 || activeVitaminFilters.every((vitamin) => fruit.category.includes(vitamin));

    return familyMatchFilter && colorMatchFilter && vitaminMatchFilter;
  });

  // 4. Define a helper to clean strings (only letters in lowercase)
  const cleanString = (str) => str.replace(/[^a-zA-Z]/g, "").toLowerCase();

  // Clean the query string
  const cleanedQuery = cleanString(query);

  // 5. If a search query exists, further filter the fruits
  if (cleanedQuery) {
    finalFilteredFruits = finalFilteredFruits.filter((fruit) => {
      // Check if the cleaned fruit name includes the query
      const nameMatch = cleanString(fruit.name).includes(cleanedQuery);

      // Check if the cleaned fruit family includes the query
      const familyMatchSearch = cleanString(fruit.family).includes(cleanedQuery);

      // Check if any vitamin in fruit.category (i.e. any element containing "vitamin")
      // includes the query.
      const vitaminMatchSearch = fruit.category.filter((cat) => cat.toLowerCase().includes("vitamin")).some((vit) => cleanString(vit).includes(cleanedQuery));

      return nameMatch || familyMatchSearch || vitaminMatchSearch;
    });
  }

  return finalFilteredFruits;
}

export default FilterFunctionality;
