import styles from './ui.module.scss';

import Logo from '@ui/shared/ui/assets/images/logo.png';

import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
  <header className={styles.wrapper}>
    <Image className={styles.logo} src={Logo} alt='Petfinder logo' />
    <menu className={styles.menu}>
      <Link className={styles.link} href='/lost'>Зниклі</Link>
      <Link className={styles.link} href='/founded'>Знайдені</Link>
      <Link className={styles.link} href='/'>Приютити</Link>
      <Link className={styles.link} href='/'>Про проект</Link>
    </menu>
      <menu className={styles.menu}>
      <Link className={styles.link} href='/lost'>Увійти</Link>
      <Link className={styles.link} href='/founded'>Реєстрація</Link>
    </menu>
  </header>
);

export { Header };
