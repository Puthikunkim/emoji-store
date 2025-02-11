import { useContext } from "react";
import ShopContext from "../../../../context";

function FilterFunctionality() {
  const { fruits, filters, favouritePage } = useContext(ShopContext);

  // Filter fruits based on whether the user is on the favourite page
  const fruitsToDisplay = favouritePage ? fruits.filter((fruit) => fruit.isFavourited) : fruits;

  // Get active Family filters (fruit.family is a string)
  const activeFamilyFilters = filters.Family.filter((family) => family.isChecked);
  
  // Get active color filters from filters.colors (returning an array of names)
  const activeColorFilters = filters.colors.filter((color) => color.isChecked).map((color) => color.name);

  // Get active vitamin filters from filters.Vitamins (returning an array of names)
  const activeVitaminFilters = filters.Vitamins.filter((vitamin) => vitamin.isChecked).map((vitamin) => vitamin.name);

  // Combine all filter conditions
  const finalFilteredFruits = fruitsToDisplay.filter((fruit) => {
    // Family match: if no family filter is active, it's a match; otherwise, the fruit's family must equal one of the active family filter names.
    const familyMatch = activeFamilyFilters.length === 0 || activeFamilyFilters.some((filter) => filter.name === fruit.family);

    // Color match: if no color filter is active, it's a match; otherwise, every active color filter must be present in fruit.category.
    const colorMatch = activeColorFilters.length === 0 || activeColorFilters.every((color) => fruit.category.includes(color));

    // Vitamin match: if no vitamin filter is active, it's a match; otherwise, every active vitamin filter must be present in fruit.category.
    const vitaminMatch = activeVitaminFilters.length === 0 || activeVitaminFilters.every((vitamin) => fruit.category.includes(vitamin));

    return familyMatch && colorMatch && vitaminMatch;
  });

  return finalFilteredFruits;
}

export default FilterFunctionality;
