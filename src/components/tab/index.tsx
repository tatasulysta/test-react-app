import React from 'react';
import Button from '../button';
import styles from './styles.module.css';

type TabItem = {
  label: string;
  content: React.ReactNode;
};
interface Props {
  defaultValue: string;
  items: TabItem[];
}

export default function Tab(props: Props) {
  const { defaultValue, items } = props;
  const [active, setActive] = React.useState<number>(
    items.findIndex((value) => value.label === defaultValue) || 0,
  );

  return (
    <div>
      <div className={styles['header_container--inner']}>
        {items.map((item, index) => (
          <Button
            key={item.label + 'button'}
            onClick={() => setActive(index)}
            variant={active === index ? 'primary' : 'secondary'}
          >
            {item.label}
          </Button>
        ))}
      </div>

      <div>{items[active].content}</div>
    </div>
  );
}
