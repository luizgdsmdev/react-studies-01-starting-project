import styles from "./ConceptsUL.module.css";
import ConceptsLi from "../conceptsLI/ConceptsLi";
import { conceptsInfo } from "../../../../utils/data/conceptsData";

/**
 * @description UL component for rendering the core concepts UL list, uses component ConceptsLi
 * feeding data from /utils/data/conceptsData by conceptsInfo
 * @returns {JSX.Element} Rendered core concepts UL list
 */
function ConceptsUL() {
  return (
    <ul className={styles.coreConcepts__ul}>
      {conceptsInfo.map((concept) => (
        <ConceptsLi
          key={concept.title}
          title={concept.title}
          description={concept.description}
          image={concept.img}
        />
      ))}
    </ul>
  );
}

export default ConceptsUL;
