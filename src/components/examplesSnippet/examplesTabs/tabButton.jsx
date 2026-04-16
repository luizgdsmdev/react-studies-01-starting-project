import styles from "./ExamplesTabs.module.css";

/**
 * Component for rendering a tab button option
 * @param {string} title - Title of the tab
 * @param {function} onSelect - Function to handle tab selection
 * @returns {JSX.Element} Rendered tab button
 */
function TabButton({ title, onSelect, selected }) {
  return (
    <li className={selected ? styles.active : ""}>
      <button onClick={() => onSelect(title)}>{title}</button>
    </li>
  );
}

export default TabButton;
