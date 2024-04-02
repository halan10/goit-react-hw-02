import css from './Options.module.css';

export default function Options({ onUpdate, onReset, totalFeedback }) {
  return (
    <div>
      <button onClick={() => onUpdate('good')} className={css.button}>
        Good
      </button>
      <button onClick={() => onUpdate('neutral')} className={css.button}>
        Neutral
      </button>
      <button onClick={() => onUpdate('bad')} className={css.button}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={onReset} className={css.button}>
          Reset
        </button>
      )}
    </div>
  );
}
