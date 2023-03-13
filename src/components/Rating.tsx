import styles from "./Rating.module.css";

export function Rating() {

  return (

    <div className={styles.panel}>

      <img src="/icon-star.svg"></img>

      <h1>How did we do?</h1>

      <p>
        Please let us know how we did with your support request. All feedback is 
        appreciated to help us improve our offering!
      </p>

      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>

      <button>Submit</button>
    </div>

  );

}