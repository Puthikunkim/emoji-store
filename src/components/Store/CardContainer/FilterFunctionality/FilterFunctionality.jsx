import { useContext } from "react";
import ShopContext from "../../../../context";

function FilterFunctionality() {
    const { fruits, filters, favouritePage } = useContext(ShopContext);

    // Filter fruits based on whether the user is on the favourite page
    const fruitsToDisplay = favouritePage ? fruits.filter((fruit) => fruit.isFavourited) : fruits;

    // Get active family filters 
    const activeFamilyFilters = filters.Family.filter((family) => family.isChecked);

    // Get active color filters from filters.color (returning an array of names)
    const activeColorFilters = filters.colors.filter((color) => color.isChecked).map((color) => color.name);

    // Get active vitamin filters from filters.Vitamins (returning an array of names)
    const activeVitaminFilters = filters.Vitamins.filter((vitamin) => vitamin.isChecked).map((vitamin) => vitamin.name);

    // Combine all filter conditions
    const finalFilteredFruits = fruitsToDisplay.filter((fruit) => {
        // Check family: if no family filter is active, it's a match; otherwise, the fruit's family must equal one of the active filters.
        const familyMatch = activeFamilyFilters.length === 0 || activeFamilyFilters.some((filter) => filter.name === fruit.family);

        // Check color: if no color filter is active, it's a match; otherwise, the fruit's category array must include at least one active color.
        const colorMatch = activeColorFilters.length === 0 || fruit.category.some((cat) => activeColorFilters.includes(cat));

        // Check vitamin: if no vitamin filter is active, it's a match; otherwise, the fruit's category array must include at least one active vitamin.
        const vitaminMatch = activeVitaminFilters.length === 0 || fruit.category.some((cat) => activeVitaminFilters.includes(cat));

        // Only include the fruit if it passes all filters.
        return familyMatch && colorMatch && vitaminMatch;
    });

    return finalFilteredFruits;
}

export default FilterFunctionality;
