<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useCommentStore } from "@/stores/commentStore";
import Comment from "@/components/Comment.vue";

defineProps(["post", "author"]);

const { getPostsComments } = storeToRefs(useCommentStore());
const { fetchComments } = useCommentStore();

fetchComments();
</script>

<template>
  <div>
    <div>
      <h2>
        {{ post.title }}
      </h2>
      <p v-if="author">
        Written by:
        <RouterLink :to="`/author/${author.username}`">
          {{ author.name }}
        </RouterLink>
        | <span>
            Comments: {{ getPostsComments.length }}
          </span>
      </p>
      <p>
        {{ post.body }}
      </p>
    </div>
    <hr>
    <h3>Comments:</h3>
    <Comment :comments="getPostsComments" />
  </div>
</template>

<style scoped>
</style>