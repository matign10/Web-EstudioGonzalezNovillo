'use client';

import React from 'react';
import styles from './BackgroundVideo.module.css';

export default function BackgroundImage() {
  return (
    <div className={styles.backgroundContainer} aria-hidden="true">
      {/* Animated gradient background */}
      <div className={styles.gradientLayer} />

      {/* Floating geometric shapes (reduced count for performance) */}
      <div className={styles.shapesContainer}>
        <div className={`${styles.shape} ${styles.shape1}`} />
        <div className={`${styles.shape} ${styles.shape3}`} />
        <div className={`${styles.shape} ${styles.shape5}`} />
      </div>

      {/* Glowing orbs */}
      <div className={styles.orbsContainer}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
      </div>

      {/* Dark overlay for text readability */}
      <div className={styles.overlay} />
    </div>
  );
}
