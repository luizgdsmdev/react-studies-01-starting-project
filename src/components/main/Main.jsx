import styles from "./Main.module.css";

import CoreConceptList from "../coreConceptsList/CoreConceptList";
import ExamplesSnippet from "../examplesSnippet/examplesSnippet";

/**
 * @description Main component for rendering the main section defined by core concepts list and examples snippet
 * @returns {JSX.Element} Rendered main section
 */
function Main() {
  return (
    <main className={styles.main}>
      <CoreConceptList />
      <ExamplesSnippet />
    </main>
  );
}

export default Main;
