'use client';
import React from 'react'
import styles from './style.module.scss';

export default function Project({ index, title, description, manageModal, link }) {
  return (
    <div 
      onMouseEnter={(e) => { manageModal(true, index, e.clientX, e.clientY) }} 
      onMouseLeave={(e) => { manageModal(false, index, e.clientX, e.clientY) }} 
      onClick={() => window.open(link, "_blank")}
      className={styles.project}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
