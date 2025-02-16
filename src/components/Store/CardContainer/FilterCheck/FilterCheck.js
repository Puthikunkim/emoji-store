import styles from "./CardContainer.module.css";

function FilterCheck( {activeFamilyFilters, activeColorFilters, activeVitaminFilters, cleanedQuery, removeFamilyFilter, removeColorFilter, removeVitaminFilter, removeQuery} ) {
    
    return (
        <div>
            <div className={styles.filters}> 
              {activeFamilyFilters.map((filter, index) => (
                <div key={index} className={styles.filter}>
                  <p>{filter.name}</p>
                  <button onClick={() => removeFamilyFilter(filter.name)}>X</button>
                </div>
              ))}

              {activeColorFilters.map((filter, index) => (
                <div key={index} className={styles.filter}>
                  <p>{filter.name}</p>
                  <button onClick={() => removeColorFilter(filter.name)}>X</button>
                </div>
              ))}

              {activeVitaminFilters.map((filter, index) => (
                <div key={index} className={styles.filter}>
                  <p>{filter.name}</p>
                  <button onClick={() => removeVitaminFilter(filter.name)}>X</button>
                </div>
              ))}

              {cleanedQuery && (
                <div className={styles.filter}>
                  <p>{cleanedQuery}</p>
                  <button onClick={removeQuery}>X</button>
                </div>
              )}
            </div>
        </div>
    );
}

export default FilterCheck;