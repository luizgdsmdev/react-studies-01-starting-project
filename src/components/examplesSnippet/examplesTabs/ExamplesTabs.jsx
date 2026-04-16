import styles from "./ExamplesTabs.module.css";
import TabButton from "./tabButton";
import { buttomTabTitles } from "../../../utils/data/buttomTabTitles";

/**
 * @description Menu component for rendering the examples tabs options, consume TabButton component, feeding data from /utils/data/buttomTabTitles
 * @param {function} onSelect - Function to handle tab selection
 * @returns {JSX.Element} Rendered examples tabs
 */
function ExamplesTabs({ onSelect, selectedTab }) {
  return (
    <menu className={styles.menu}>
      {buttomTabTitles.map((title) => (
        <TabButton
          key={title}
          title={title}
          onSelect={onSelect}
          selected={selectedTab.toLowerCase() === title.toLowerCase()}
        />
      ))}
    </menu>
  );
}

export default ExamplesTabs;
