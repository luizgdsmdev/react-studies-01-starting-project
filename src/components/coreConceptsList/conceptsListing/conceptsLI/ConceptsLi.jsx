import styles from "./ConceptsLi.module.css";

/**
 * @description LI component for rendering a core concept LI list item
 * @param {string} image - Image source
 * @param {string} title - Title of the concept
 * @param {string} description - Description of the concept
 * @returns {JSX.Element} Rendered core concept list item
 */
function ConceptsLi({ image, title, description }) {
  return (
    <li className={styles.coreConcepts__li}>
      <img src={image} alt={title} className={styles.coreConcepts__li_img} />
      <h3 className={styles.coreConcepts__li_h3}>{title}</h3>
      <p className={styles.coreConcepts__li_p}>{description}</p>
    </li>
  );
}

export default ConceptsLi;
