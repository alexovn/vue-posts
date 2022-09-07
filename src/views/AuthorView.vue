<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthorStore } from '@/stores/authorStore';
import { usePostsStore } from '@/stores/postsStore'

import Author from '@/components/Author.vue'

const route = useRoute()
const { authors } = storeToRefs(useAuthorStore())
const { getPostsPerAuthor } = storeToRefs(usePostsStore())
const { fetchPosts } = usePostsStore()

const getAuthorByUserName = computed(() => {
  return authors.value.find((author) => author.username === route.params.username)
})

fetchPosts()
</script>


<template>
  <div>
    <Author :author="getAuthorByUserName" :posts="getPostsPerAuthor(getAuthorByUserName.id)" />
  </div>
</template>

<style scoped>

</style>