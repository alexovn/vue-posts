import { defineStore } from 'pinia';

export const usePostsStore = defineStore('postsStore', {
  state: () => ({
    posts: [],
    post: {},
    isLoading: false,
    error: null
  }),
  getters: {
    getPostsPerAuthor: (state) => {
      return (authorId) => state.posts.filter((post) => post.userId === authorId)
    }
  },
  actions: {
    async fetchPosts() {
      this.posts = []
      this.isLoading = true
      try {
        this.posts = await fetch('https://jsonplaceholder.typicode.com/posts')
          .then(resp => resp.json())
      } catch (error) {
        this.error = error
      } finally {
        this.isLoading = false
      }
    },
    async fetchCurrentPost(id) {
      this.post = {}
      this.isLoading = true
      try {
        this.post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(resp => resp.json())
      } catch (error) {
        this.error = error
      } finally {
        this.isLoading = false
      }
    }
  }
});