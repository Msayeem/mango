import styles from "./Testimonials.module.css";

const reviews = [
  {
    quote:
      "I've read more books in the last three months than in the past two years. The selection is incredible and delivery is always on time.",
    name: "Anika Rahman",
    role: "University Student",
    initials: "AR",
    stars: 5,
  },
  {
    quote:
      "My kids look forward to every new batch of books. No stress about late fees, and the variety keeps them excited about reading.",
    name: "Tariq Hassan",
    role: "Parent of Two",
    initials: "TH",
    stars: 5,
  },
  {
    quote:
      "No late fees, a huge library, and a friendly team. I recommended it to my entire book club and we all love it.",
    name: "Sadia Islam",
    role: "Book Club Host",
    initials: "SI",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.pill}>What readers say</span>
          <h2 className={styles.title}>
            Loved by <span>Book Lovers</span>
          </h2>
          <p className={styles.subtitle}>
            Thousands of readers trust us to keep their shelves full and their
            minds inspired.
          </p>
        </div>

        <div className={styles.grid}>
          {reviews.map((r, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.stars}>
                {"★".repeat(r.stars)}
              </div>
              <div className={styles.quoteIcon}>"</div>
              <p className={styles.quote}>{r.quote}</p>
              <div className={styles.divider} />
              <div className={styles.author}>
                <div className={styles.avatar}>{r.initials}</div>
                <div className={styles.authorInfo}>
                  <span className={styles.name}>{r.name}</span>
                  <span className={styles.role}>{r.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}