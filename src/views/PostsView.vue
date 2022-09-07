<script setup>
import { storeToRefs } from 'pinia';
import { usePostsStore } from "@/stores/postsStore";
import { RouterLink } from 'vue-router';

import Loader from '@/components/Loader.vue'

const { posts, isLoading, error } = storeToRefs(usePostsStore())
const { fetchPosts } = usePostsStore();
fetchPosts()
</script>

<template>
  <div class="posts">
    <h1 class="posts__title">
      This is a posts page
    </h1>
    <component :is="isLoading ? Loader : false" />
    <div class="error" v-if="error">
      {{ error.message }}
    </div>
    <div v-if="posts" class="posts__list">
      <div class="post" v-for="post in posts" :key="post.id">
        <RouterLink :to="`/post/${post.id}`" class="post__title">
          {{ post.title }}
        </RouterLink>
        <div class="post__desc">
          {{ post.body }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post {
  margin-bottom: 20px;
  padding: 5px 10px;
  background-color: #686de0;
  border-radius: 10px;
  color: #fff;
}

.post__title {
  margin-bottom: 10px;
  font-size: 20px;
  color: #f6e58d;
}
</style>
