import { ref, onMounted } from "vue"
import type Article from '@/types/IArticle'


export default function useArticles() {


    const url: string = 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/'
    const articles = ref<Article[]>([])


    function fetchArticles(url: string): Promise<Article[] | void> {
       return fetch(url)
        .then(response => {
          if(!response.ok) {
              throw new Error
          }
            return response.json()
        })
        .then(response => {
            articles.value = response
        })
    }

    
    onMounted(() => {
        fetchArticles(url)
    })

    return articles
}