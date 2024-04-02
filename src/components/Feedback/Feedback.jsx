import css from './Feedback.module.css';

export default function Feedback({ reviews, totalFeedback, positive }) {
  return (
    <div className={css.container}>
      <p className={css.field}>Good: {reviews.good}</p>
      <p className={css.field}>Neutral: {reviews.neutral} </p>
      <p className={css.field}>Bad: {reviews.bad}</p>
      <p className={css.field}>Total: {totalFeedback}</p>
      <p className={css.field}>Positive: {positive} %</p>
    </div>
  );
}
