import styles from "./FilterCheck.module.css";
import { X } from "@phosphor-icons/react";

function FilterCheck( {activeFamilyFilters, activeColorFilters, activeVitaminFilters, cleanedQuery, removeFamilyFilter, removeColorFilter, removeVitaminFilter, removeQuery} ) {
    
    return (
        <div>
            <div className={styles.filters}> 
              {activeFamilyFilters.map((filter, index) => (
                <div key={index} className={styles.filter} onClick={() => removeFamilyFilter(filter.name)}>
                  <p>{filter.name}</p>
                  <X weight="bold" />
                </div>
              ))}

              {activeColorFilters.map((filter, index) => (
                <div key={index} className={styles.filter} onClick={() => removeColorFilter(filter)}>
                  <p>{filter}</p>
                  <X weight="bold" />
                </div>
              ))}

              {activeVitaminFilters.map((filter, index) => (
                <div key={index} className={styles.filter} onClick={() => removeVitaminFilter(filter)}>
                  <p>{filter}</p>
                  <X weight="bold" />
                </div>
              ))}

              {cleanedQuery && (
                <div className={styles.filter} onClick={removeQuery}>
                  <p>{cleanedQuery}</p>
                  <X weight="bold" />
                </div>
              )}
            </div>
        </div>
    );
}

export default FilterCheck;