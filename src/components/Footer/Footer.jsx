import styles from './Footer.module.css';
import { FacebookLogo, InstagramLogo, TwitterLogo } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <h2>Emojis.</h2>
        <p>
          Emojis are ideograms and smileys used in electronic messages and web pages. They exist in various genres,
          including facial expressions, objects, weather, and animals. More than emoticons, emojis are actual pictures.
        </p>
      </div>
      <div className={styles.middle}>
        <h3>Links</h3>
        <Link to="/home">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/bag">Bag</Link>
      </div>
      <div className={styles.right}>
        <h3>Socials</h3>
        <div className={styles.socials}>
          <FacebookLogo size={32} weight="fill" />
          <InstagramLogo size={32} weight="fill" />
          <TwitterLogo size={32} weight="fill" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
