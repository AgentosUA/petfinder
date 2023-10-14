import { FC, PropsWithChildren } from 'react';

import { Header } from './header';

type LayoutProps = PropsWithChildren<{
  withBackground?: boolean;
}>;

import styles from './ui.module.scss';
import classNames from 'classnames';

const Layout: FC<LayoutProps> = ({ withBackground = true, children }) => {
  return (
    <>
      <Header />
      <main className={classNames(styles.main, {
        [styles.background]: withBackground,
      })}>
      {children}
      </main>
    </>
  );
};

export { Layout };
