import styles from "./CoreConceptList.module.css";
import ConceptsUL from "./conceptsListing/conceptsUL/ConceptsUL";

/**
 * @description Section component for rendering the core concepts list
 * @returns {JSX.Element} Rendered core concepts UL list
 */
function CoreConceptList() {
  return (
    <section className={styles.coreConcepts}>
      <ConceptsUL />
    </section>
  );
}

export default CoreConceptList;
