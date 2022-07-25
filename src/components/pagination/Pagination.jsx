import React from 'react';
import { getPagesArray } from '../utils/pages';

import styles from './Pagination.module.scss';

export const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);

  return (
    <div className={styles.page__wrapper}>
      {pagesArray.map((p) => (
        <span onClick={() => changePage(p)} key={p} className={page === p ? styles.__current : styles.page}>
          {p}
        </span>
      ))}
    </div>
  );
};
