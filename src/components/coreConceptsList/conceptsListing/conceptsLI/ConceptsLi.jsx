import styles from "./ConceptsLi.module.css";

function ConceptsLi(props) {
  return (
    <li className={styles.coreConcepts__li}>
      <img
        src={props.image}
        alt={props.title}
        className={styles.coreConcepts__li_img}
      />
      <h3 className={styles.coreConcepts__li_h3}>{props.title}</h3>
      <p className={styles.coreConcepts__li_p}>{props.description}</p>
    </li>
  );
}

export default ConceptsLi;
