'use client';

import Logo from '@ui/shared/assets/images/logo.png';

import Image from 'next/image';

import Link from 'next/link';

import { observer } from 'mobx-react-lite';

import { User }  from '@ui/entities/user/model';

import styles from './ui.module.scss';

const Header = observer(() => {

  return (
  <header className={styles.wrapper}>
    <div className={styles.content}>
      <Image className={styles.logo} src={Logo} alt='Petfinder logo' />
      <menu className={styles.menu}>
        <Link className={styles.link} href='/lost'>Зниклі</Link>
        <Link className={styles.link} href='/founded'>Знайдені</Link>
        <Link className={styles.link} href='/'>Приютити</Link>
        <Link className={styles.link} href='/'>Про проект</Link>
      </menu>
      <menu className={styles.menu}>
      {!User.isAuthorized && <>
        <Link className={styles.link} href='/auth/login'>Увійти</Link>
        <Link className={styles.link} href='/auth/signup'>Реєстрація</Link>
      </>}

      {User.isAuthorized && <>
        <Link className={styles.link} href='/profile'>Профіль</Link>
        <button className={styles.link} onClick={User.logout}>Вийти</button>
      </>}
      </menu>
    </div>
  </header>
)});

export { Header };
