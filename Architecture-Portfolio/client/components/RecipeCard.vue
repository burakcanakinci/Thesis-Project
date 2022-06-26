<template>
  <div class="card recipe-card">
    <img :src="recipe.picture" class="card-img-top" >
    <div class="card-body">
      <h5 class="card-title">{{ recipe.name }}</h5>
      <p class="card-text">
        <strong>Information</strong> {{ recipe.ingredients }}
      </p>
      <div class="action-buttons">
        <nuxt-link :to="`/recipes/${recipe.id}/`" class="btn btn-sm btn-success">View</nuxt-link>
        <nuxt-link :to="`/recipes/${recipe.id}/edit/`" class="btn btn-sm btn-primary">Edit</nuxt-link>
        <button @click="onDelete(recipe.id)" class="btn btn-sm btn-danger">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["recipe", "onDelete"]
};
</script>