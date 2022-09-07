<script setup>
import { RouterLink } from "vue-router";
import { useAuthorStore } from "@/stores/authorStore";
import { storeToRefs } from "pinia";
import Loader from '@/components/Loader.vue'

const { authors, isLoading } = storeToRefs(useAuthorStore());
const { fetchAuthors } = useAuthorStore();

fetchAuthors();
</script>

<template>
  <div>
    <component :is="isLoading ? Loader : false" />
    <p
      v-if="authors"
      v-for="author in authors"
      :key="author.id"
    >
      <RouterLink :to="`/author/${author.username}`">
        {{ author.name }}
      </RouterLink>
    </p>
  </div>
</template>

<style>
</style>
