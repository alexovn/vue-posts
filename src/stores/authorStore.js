import { defineStore } from 'pinia'
import { usePostsStore } from './postsStore'

export const useAuthorStore = defineStore('authorStore', {
  state: () => ({
    authors: [],
    isLoading: false,
    error: null
  }),
  getters: {
    getPostAuthor: (state) => {
      const postStore = usePostsStore()
      return state.authors.find((author) => author.id === postStore.post.id)
    }
  },
  actions: {
    async fetchAuthors() {
      this.isLoading = true
      try {
        this.authors = await fetch('https://jsonplaceholder.typicode.com/users')
          .then(resp => resp.json())
      } catch (error) {
        this.error = error
      } finally {
        this.isLoading = false
      }
    }
  }
})