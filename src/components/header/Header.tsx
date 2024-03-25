import styles from './Header.module.css';
import byteLogo from '../../assets/byte-logo.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src={byteLogo} alt="Logo do Byte Feed" />
            <h1>Byte Feed</h1>
        </header>
    );
}