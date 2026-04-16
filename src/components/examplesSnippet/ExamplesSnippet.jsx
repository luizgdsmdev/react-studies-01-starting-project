import styles from "./ExamplesSnippet.module.css";
import ExamplesTabs from "./examplesTabs/ExamplesTabs";
import { useTabSelection } from "../../hooks/useTabSelection";
import TabContent from "./tabContent/TabContent";
import EXAMPLES from "../../utils/data/examplesSnippet";

/**
 * @description Section component for rendering the examples snippet, tab options and handling the tab selection,
 * Consume ExamplesTabs feeding the onSelect and selectedTab props
 * and TabContent components feeding /utils/data/examplesSnippet data for tab content
 * @returns {JSX.Element} Rendered examples snippet section with tabs
 */
function examplesSnippet() {
  // Get the selected tab and setter function from the hook
  const { selectedTab, setSelectedTab } = useTabSelection();

  return (
    <section className={styles.examples}>
      <ExamplesTabs onSelect={setSelectedTab} selectedTab={selectedTab} />
      <TabContent
        title={EXAMPLES[selectedTab].title}
        description={EXAMPLES[selectedTab].description}
        code={EXAMPLES[selectedTab].code}
      />
    </section>
  );
}

export default examplesSnippet;
