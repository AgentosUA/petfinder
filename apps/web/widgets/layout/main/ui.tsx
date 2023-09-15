import { FC, PropsWithChildren } from 'react';

import { Header } from './header';

type LayoutProps = PropsWithChildren<{}>;

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export { Layout };
