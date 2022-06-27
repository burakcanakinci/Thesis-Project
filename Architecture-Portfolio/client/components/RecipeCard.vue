<template>
  <div class="card recipe-card box-shadow">
    <img :src="recipe.picture" class="card-img-top" >
    <div class="card-body">
      <h5 class="card-title">{{ recipe.name }}</h5>
      <p class="card-text">
        <strong>Information</strong> {{ recipe.ingredients }}
      </p>
      <div class="action-buttons">
        <nuxt-link :to="`/recipes/${recipe.id}/`" class="btn btn-sm button-color-view">View</nuxt-link>
        <nuxt-link :to="`/recipes/${recipe.id}/edit/`" class="btn btn-sm button-color-edit">Edit</nuxt-link>
        <button @click="onDelete(recipe.id)" class="btn btn-sm button-color-delete">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["recipe", "onDelete"]
};
</script>