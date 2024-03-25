import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { useState } from 'react';
import { Avatar } from '../avatar/Avatar';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLinkCount] = useState(0);

    function handleLikeComment() {
        setLinkCount((state) => {
            return state + 1;
        });
    }

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    return (
        <>
            <div className={styles.comment}>
                <Avatar hasBorder={false} src="https://github.com/andressaaborges.png" alt="Foto do perfil" />
                <div className={styles.commentInfos}>
                    <header>
                        <div className={styles.commentAuthor}>
                            <h4>Andressa Borges <span>(você)</span></h4>
                            <time
                                title="13 de Outubro às 18:12hs"
                                dateTime="2022-10-13 18:12:56">
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={23} />
                        </button>
                    </header>
                    <div className={styles.commentText}>
                        <p>{content}</p>
                    </div>
                </div>
            </div>

            <footer className={styles.commentLike} onClick={handleLikeComment}>
                <button>
                    <ThumbsUp size={20} />
                    <strong>Aplaudir<span> {likeCount}</span></strong>
                </button>
            </footer>
        </>
    )
}