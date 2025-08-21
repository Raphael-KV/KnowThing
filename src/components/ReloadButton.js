import React from "react";
import styles from "./ReloadButton.module.css";

const ReloadButton = ({ onClick, label = "NEW FACT" }) => {
  // Build the ring text. Repeat just enough so it goes around once.
  const ring = `${label.toUpperCase()} • `.repeat(2); // adjust repeats if you want denser text
  const chars = ring.split("");
  const angleStep = 360 / chars.length; // guarantees even spacing

  return (
    <button
      className={styles.button}
      onClick={onClick}
      aria-label="Get a new fact"
    >
      {/* Rotating ring text */}
      <p
        className={styles.button__text}
        style={{ "--angle-step": `${angleStep}deg` }}
      >
        {chars.map((ch, i) => (
          <span key={i} style={{ "--index": i }}>
            {ch}
          </span>
        ))}
      </p>

      {/* Inner circle with two swap icons */}
      <div className={styles.button__circle} aria-hidden="true">
        {/* main icon */}
        <svg
          viewBox="0 0 24 24"
          className={styles.button__icon}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.65 6.35A7.95 7.95 0 0012 4a8 8 0 100 16 8 8 0 007.75-6h-2.06A6 6 0 1112 6a5.9 5.9 0 013.54 1.15L13 10h7V3l-2.35 2.35z"
            fill="currentColor"
          />
        </svg>

        {/* copy that slides in on hover */}
        <svg
          viewBox="0 0 24 24"
          className={`${styles.button__icon} ${styles["button__icon--copy"]}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.65 6.35A7.95 7.95 0 0012 4a8 8 0 100 16 8 8 0 007.75-6h-2.06A6 6 0 1112 6a5.9 5.9 0 013.54 1.15L13 10h7V3l-2.35 2.35z"
            fill="currentColor"
          />
        </svg>
      </div>
    </button>
  );
};

export default ReloadButton;
