import styles from './page.module.scss'
import '../assets/index.scss'
import 'react-toastify/dist/ReactToastify.css';
import HomeView from '@/views/HomePage/HomeView';
import {useApiFetch} from '../composable/useApiFetch.js'


export default async function Home() {
  const data = await useApiFetch('api/home-page?&populate[videoArticles][populate]=*&populate[swiperTop][populate]=*&populate[article][populate]=*&populate[ribbon][populate]=*&populate[articles][populate]=*&populate[article_populars][populate]=*&populate[selfSustainableHeritage][populate]=*&populate[map][populate]=*&populate[ribbon2][populate]=*&populate[videoArticlesPoster][populate]=*')

  return (
    <main className={styles.main}>
      <HomeView data={data}></HomeView>
    </main>
  )
}
