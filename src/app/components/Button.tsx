interface Props {
  name: string;
  onClick?: () => void;
  // CSS Module class
  styles: string;
}

export default function Button({ name, onClick, styles }: Props) {
  return (
    <button className={styles} onClick={onClick} type="button">
      {name}
    </button>
  );
}
