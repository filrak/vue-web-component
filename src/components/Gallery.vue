
<template>
  <div class="gallery">
    <img :src="activeImage" alt="gallery image" class="image-active">
    <div>
      <img @click="setActiveImageId(id)" v-for="(image, id) in imagesObjectParsed" :key="image.thumbnail.url" :src="image.thumbnail.url" :alt="image.thumbnail.altText" class="image-thunbnail" :class="{ 'active-thunbnail' : id === activeImageId}">
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  props: ['images'],
  data () {
    return {
      activeImageId: 0
    }
  },
  methods: {
    setActiveImageId (id) {
      this.activeImageId = id
    }
  },
  computed: {
    imagesObjectParsed () {
      return JSON.parse(this.images)
    },
    activeImage () {
      return this.imagesObjectParsed[this.activeImageId].product.url
    }
  }
}
</script>

<style>
  .image-active {
    width: 400px;
  }
  .image-thunbnail {
    height: 50px;
    display: inline-block;
    margin: 5px;
    border: 2px solid white;
  }
  .active-thunbnail {
    border-color: var(--y-primary)
  }
</style>

