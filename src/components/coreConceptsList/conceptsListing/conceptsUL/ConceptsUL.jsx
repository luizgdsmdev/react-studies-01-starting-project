import styles from "./ConceptsUL.module.css";
import ConceptsLi from "../conceptsLI/ConceptsLi";
import { conceptsInfo } from "../../../../utils/data/conceptsData";

function ConceptsUL() {
  return (
    <ul className={styles.coreConcepts__ul}>
      {conceptsInfo.map((concept, index) => (
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
