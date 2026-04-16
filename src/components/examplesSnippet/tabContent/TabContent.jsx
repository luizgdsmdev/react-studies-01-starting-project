import styles from "./TabContent.module.css";

/**
 * @description Div component for rendering the tab content
 * @param {string} title - Title of the tab
 * @param {string} description - Description of the tab
 * @param {string} code - Code of the tab
 * @returns {JSX.Element} Rendered tab content
 */
function TabContent({ title, description, code }) {
  return (
    <div className={styles.tabContent}>
      <h3>{title}</h3>
      <p>{description}</p>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default TabContent;
