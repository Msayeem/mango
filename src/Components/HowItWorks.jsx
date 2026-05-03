import styles from "./HowItWorks.module.css";

const steps = [
  {
    number: "01",
    title: "Browse & Pick",
    description:
      "Explore many titles across every genre. Filter by category to find your perfect read.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Borrow Instantly",
    description:
      "Reserve online in seconds. Choose home delivery or pick up from a nearby drop point — your call.",
    icon: "📦",
  },
  {
    number: "03",
    title: "Read & Return",
    description:
      "Take your time, enjoy every page. Return with ease when you're done. No late fees, ever.",
    icon: "📖",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div  className={styles.header}>
          <span className={styles.pill}>Simple as turning a page</span>
          <h2 className={styles.title}>
            How It <span>Works</span>
          </h2>
          <p className={styles.subtitle}>
            Getting your next book is easier than ever — three steps and you're
            reading.
          </p>
        </div>

        <div className={styles.grid}>
          {steps.map((step, i) => (
            <div className={styles.card} key={i}>
              <span className={styles.cardNumber}>{step.number}</span>
              <div className={styles.iconWrap}>{step.icon}</div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardDesc}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}