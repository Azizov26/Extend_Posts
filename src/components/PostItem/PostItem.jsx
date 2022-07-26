import React from 'react';
import { MyButton } from '../UI/button/MyButton';
import '../css/App.css';
import styles from './PostItem.module.scss';
import { useHistory } from 'react-router-dom';

export const PostItem = (props) => {
  const router = useHistory();

  return (
    <div className={styles.post}>
      <div className={styles.post__content}>
        <strong>
          Id : {props.post.id}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className={styles.post__btns}>
        <MyButton onClick={() => router.push(`/posts/${props.post.id}`)}>Открыть</MyButton>
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  );
};
