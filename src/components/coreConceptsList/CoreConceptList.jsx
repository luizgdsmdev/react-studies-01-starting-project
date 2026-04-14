import styles from "./CoreConceptList.module.css";
import ConceptsUL from "./conceptsListing/conceptsUL/ConceptsUL";

function CoreConceptList() {
  return (
    <section className={styles.coreConcepts}>
      <ConceptsUL />
    </section>
  );
}

export default CoreConceptList;
