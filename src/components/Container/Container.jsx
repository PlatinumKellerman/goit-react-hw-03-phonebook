import s from './container.module.css';

export function Container(props) {
  return <div className={s.container}>{props.children}</div>;
}
