import { ReactNode, useId, useState } from 'react';
import cn from 'classnames';
import styles from './index.module.scss';
interface CheckboxProps {
  // extends DetailedHTMLProps<
  //   HTMLAttributes<HTMLInputElement>,
  //   HTMLInputElement
  // >
  children?: ReactNode;
  onClick?: (checked?: boolean) => void;
}
export const Checkbox = ({ children, onClick }: CheckboxProps) => {
  const id = useId();
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
    onClick && onClick(!checked);
  };
  return (
    <label className={cn(styles.label)} htmlFor={id}>
      <input onClick={handleClick} id={id} type={'checkbox'} />
      <div className={cn(styles.checkbox, { [styles.active]: checked })}>
        <svg viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.6216 0.456697L6.70047 7.69983L1.96051 3.36559C1.64716 3.09859 1.15885 3.10647 0.855984 3.38341C0.553123 3.66035 0.544507 4.10686 0.836496 4.39339L6.13846 9.24154C6.44897 9.52512 6.95198 9.52512 7.26248 9.24154L15.7456 1.4845C16.0557 1.20058 16.0557 0.740622 15.7456 0.456697C15.4351 0.173126 14.9321 0.173126 14.6216 0.456697Z"
            fill="white"
          />
        </svg>
      </div>
      {children}
    </label>
  );
};
