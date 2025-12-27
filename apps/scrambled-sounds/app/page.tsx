//import { Button } from "@repo/ui";
import { Button } from "@repo/ui";
import styles from "./page.module.scss";


export default function Home() {
  return (
    <div className={styles.page}>
      <h1> scrambled sounds homepage</h1>
       <Button topText="Read" bottomText="Boot">
        Start Reading
      </Button>
    </div>
  );
}
