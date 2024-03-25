import { PencilSimpleLine } from 'phosphor-react';
import { Avatar } from '../avatar/Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
    const imgCover = "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg";

    return (
        <aside className={styles.sidebar}>
            <section>
                <div className={styles.profileCover}>
                    <img src={imgCover} alt="Capa do Perfil" />
                </div>
                <div className={styles.profilePhoto}>
                    <Avatar src="https://github.com/andressaaborges.png" />
                </div>

                <h3>Andressa Borges</h3>
                <p>Web Developer & UI Designer</p>
            </section>

            <footer>
                <button className={styles.buttonEdit}>
                    <PencilSimpleLine size={20} />
                    Editar seu perfil
                </button>
            </footer>
        </aside>
    );
}