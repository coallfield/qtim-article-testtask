import { useRoute } from "vue-router"
import type Article from '@/types/IArticle'
import { ref, onMounted } from "vue"
export default function useSingleArticle() {
    const route = useRoute()
    const url: string = `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${route.params.id}`
    const article = ref<Article>(<Article>{})


    function fetchSingleArticle(url: string): Promise<Article | void> {
       return fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error
            } 
            return response.json()
        })
        .then(response => {
            article.value = response
        })
    }

    onMounted(() => {
        fetchSingleArticle(url)
    })

    return article
}