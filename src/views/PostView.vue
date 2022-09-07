<script setup>
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePostsStore } from '@/stores/postsStore'
import { useAuthorStore } from '@/stores/authorStore'
import Loader from '@/components/Loader.vue'
import Post from '@/components/Post.vue'

const route = useRoute()
const { getPostAuthor } = storeToRefs(useAuthorStore())
const { post, isLoading, error } = storeToRefs(usePostsStore())
const { fetchAuthors } = useAuthorStore()
const { fetchCurrentPost } = usePostsStore()

fetchAuthors()
fetchCurrentPost(route.params.id)
</script>

<template>
  <div>
    <component :is="isLoading ? Loader : false" />
    <p v-if="error">
      {{ error.message }}
    </p>
    <p v-if="post">
      <Post :post="post" :author="getPostAuthor" />
    </p>
  </div>
</template>

<style scoped>

</style>