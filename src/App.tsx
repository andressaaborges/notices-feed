import styles from './App.module.css';
import './global.css';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';
import { Post } from './components/post/Post';

//author: { AVATAR_URL: "", name: "", role: ""}
//publishedAt: Date
//content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/andressaaborges.png',
      name: 'Andressa Borges',
      role: 'Web Developer & UI Designer | Frontend Specialist'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 jane.design/doctorcare' },
      { type: 'hashtag', content: ['#novoprojeto', '#nlw', '#rocketseat'] }
    ],
    publishedAt: new Date('2024-02-01 15:54:45'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/andressaaborges.png',
      name: 'Devon Lane',
      role: 'Dev Front-End'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋🏿' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 🤌🏿' },
      { type: 'paragraph', content: 'Acesse e deixe seu feedback.' },
      { type: 'link', content: '👉🏿 devonlane.design' },
      { type: 'hashtag', content: ['#uiux', '#userexperience'] }
    ],
    publishedAt: new Date('2024-01-12 11:48:56'),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}