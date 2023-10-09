import { Layout } from '@ui/widgets';

import { Button } from '@ui/shared/ui/atom/button/ui';

import styles from './page.module.scss';

function HomePage() {
  return (
    <Layout>
      <section className={styles.hero}>
        <div className={styles.titleAndDescription}>
          <h1 className={styles.title}>Pet Finder</h1>
          <p className={styles.description}>
            Pet Finder - це можливість розмістити оголошення
            <br />
            про зниклу тваринку і якнайшвидше знайти її!
          </p>
          <Button className={styles.addPostButton}>Створити оголошення</Button>
        </div>
        <div className={styles.form}>
          <div className={styles.fields}></div>
          <div className={styles.formButtons}>
            <Button variant='accent'>Скинути</Button>
            <Button>Скинути</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;
