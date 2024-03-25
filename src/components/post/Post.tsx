import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Comment } from '../comment/Comment';
import { Avatar } from '../avatar/Avatar';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
    avatarUrl: string;
    name: string;
    role: string;
}

interface Content {
    type: 'paragraph' | 'link' | 'hashtag';
    content: string | string[];
}

interface PostProps {
    author: Author;
    content: Content[];
    publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
    const [comments, setComments] = useState(['Post massa esse!']);

    const [newCommentText, setNewCommentText] = useState('');

    const isNewCommentEmpty = newCommentText.length == 0;

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    });

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Campo obrigatório!');
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentToDelete;
        });
        setComments(commentsWithoutDeleteOne);
    }

    return (
        <section className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div>
                        <h3>{author.name}</h3>
                        <p>{author.role}</p>
                    </div>
                </div>
                <div>
                    <time
                        title={publishedDateFormatted}
                        dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}
                    </time>
                </div>
            </header>
            <article className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return (
                            <p key={line.content.toString()}>{line.content}</p>
                        )
                    } else if (line.type == 'link') {
                        return (
                            <strong key={line.content.toString()}>
                                <a href="#">{line.content}</a>
                            </strong>
                        )
                    } else if (line.type == 'hashtag') {
                        return (
                            <strong key={line.content.toString()}>
                                {
                                    Array.isArray(line.content) ? line.content.map((wordWithHashtag: string) => (
                                        <a key={wordWithHashtag} href="#">{wordWithHashtag}</a>
                                    )) : null
                                }
                            </strong>
                        )
                    }
                })}
            </article>
            <form
                onSubmit={handleCreateNewComment}
                className={styles.commentForm}>
                <h3>Deixe seu feedback</h3>
                <textarea
                    name="comment"
                    placeholder="Escreva um comentário..."
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button
                        type="submit"
                        disabled={isNewCommentEmpty}
                        className={styles.buttonSubmit}>
                        Publicar
                    </button>
                </footer>
            </form>

            <article>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </article>
        </section>
    )
}
