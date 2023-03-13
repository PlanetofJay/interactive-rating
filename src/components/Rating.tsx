import styles from "./Rating.module.css";

export function Rating() {

  return (

    <div className={styles.panel}>

      <img className={styles.star} src="/icon-star.svg"></img>

      <h1 className={styles.title}>How did we do?</h1>

      <p className={styles.description}>
        Please let us know how we did with your support request. All feedback is 
        appreciated to help us improve our offering!
      </p>

      <div className={styles.group}>
        <button className={styles.rating}>1</button>
        <button className={styles.rating}>2</button>
        <button className={styles.rating}>3</button>
        <button className={styles.rating}>4</button>
        <button className={styles.rating}>5</button>
      </div>

      <button>Submit</button>
    </div>

  );

}