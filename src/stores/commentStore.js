import { defineStore } from 'pinia'
import { usePostsStore } from './postsStore'

export const useCommentStore = defineStore('commentStore', {
  state: () => ({
    comments: []
  }),
  getters: {
    getPostsComments: (state) => {
      const postStore = usePostsStore()
      return state.comments.filter((post) => post.postId === postStore.post.id)
    }
  },
  actions: {
    async fetchComments() {
      this.comments = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(resp => resp.json())
    }
  }
})