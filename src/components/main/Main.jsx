import styles from "./Main.module.css";

import CoreConceptList from "../coreConceptsList/CoreConceptList";

function Main() {
  return (
    <main className={styles.main}>
      <CoreConceptList />
    </main>
  );
}

export default Main;
