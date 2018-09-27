
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
  props: {
    images: {
      default: '[ { "zoom": { "altText": "EOS450D + 18-55 IS Kit", "format": "zoom", "galleryIndex": 0, "imageType": "GALLERY", "url": "https://dev-com-17.accdemo.b2c.ydev.hybris.com:9002/medias/?context=bWFzdGVyfGltYWdlc3wyNDM2MXxpbWFnZS9qcGVnfGltYWdlcy9oM2MvaGZmLzg3OTYxODUyNjQxNTguanBnfGJmZDg5YjA2NzFlYTdjNDZlNjhmNGRhMjU5OWZmMjIxZmRmMzFmYTdkY2IyMzNhNjJkYzY3YTZmNjdiNzdiNmE" }, "product": { "altText": "EOS450D + 18-55 IS Kit", "format": "product", "galleryIndex": 0, "imageType": "GALLERY", "url": "https://dev-com-17.accdemo.b2c.ydev.hybris.com:9002/medias/?context=bWFzdGVyfGltYWdlc3wxMjM3MnxpbWFnZS9qcGVnfGltYWdlcy9oOTEvaDkwLzg3OTYyMTE2MDk2MzAuanBnfDgyOWY0Y2UyZDc3ZmExZGVlYzBkMWRiY2NkYzVjMWQxMDBiMzljMzU4MTg4M2U5NzA2Y2RjMGQ2NGNhMzQ1Yjk" }, "thumbnail": { "altText": "EOS450D + 18-55 IS Kit", "format": "thumbnail", "galleryIndex": 0, "imageType": "GALLERY", "url": "https://dev-com-17.accdemo.b2c.ydev.hybris.com:9002/medias/?context=bWFzdGVyfGltYWdlc3wyODMzfGltYWdlL2pwZWd8aW1hZ2VzL2g5Ni9oNjAvODc5NjIzNzg4OTU2Ni5qcGd8NGI1MzcwNmYyNDQyNWIwNTAyMzY5NjNhYTZkNTM3MWE3ODc5YTM1Mzc1ODFmNTFjYzEzZDcyMmY4MDIwNzcxYw" } }, { "zoom": { "altText": "EOS450D + 18-55 IS Kit", "format": "zoom", "galleryIndex": 1, "imageType": "GALLERY", "url": "https://dev-com-17.accdemo.b2c.ydev.hybris.com:9002/medias/?context=bWFzdGVyfGltYWdlc3wyMjEzMXxpbWFnZS9qcGVnfGltYWdlcy9oYWMvaDcyLzg3OTYxODUzMjk2OTQuanBnfDM3YzFkODQ0OGJkNmE5MmQ1MjhkZmZmNTM4ZmU4ZGZjOGQzM2VlZDc0NTk0N2Q0YjUyYjQ3MzM4OWUzYmI4YWI" }, "product": { "altText": "EOS450D + 18-55 IS Kit", "format": "product", "galleryIndex": 1, "imageType": "GALLERY", "url": "https://dev-com-17.accdemo.b2c.ydev.hybris.com:9002/medias/?context=bWFzdGVyfGltYWdlc3w0OTUyNnxpbWFnZS9qcGVnfGltYWdlcy9oZDEvaDk4Lzg3OTYyMTE2NzUxNjYuanBnfDAxODIwZWI1Y2RlMTQ4NWVmZDdiNTNkNWIwMWNjNzIwNzM3NGY4MDZkZGZjZmIxZTc4NjZlNDdjYjg4NDJmMzM" }, "thumbnail": { "altText": "EOS450D + 18-55 IS Kit", "format": "thumbnail", "galleryIndex": 1, "imageType": "GALLERY", "url": "https://dev-com-17.accdemo.b2c.ydev.hybris.com:9002/medias/?context=bWFzdGVyfGltYWdlc3wyNDU1fGltYWdlL2pwZWd8aW1hZ2VzL2g5Ni9oMmIvODc5NjIzNzk1NTEwMi5qcGd8Y2YyYWM4NWVlZTUwOGIxMmRkODg5ZjRiYzNlZGUwNzViMjkwYTAyZmMxYmU3NmM0MDkyOTdiNTAzOWI2ZWEzZA" } }, { "zoom": { "altText": "EOS450D + 18-55 IS Kit", "format": "zoom", "galleryIndex": 2, "imageType": "GALLERY", "url": "https://dev-com-17.accdemo.b2c.ydev.hybris.com:9002/medias/?context=bWFzdGVyfGltYWdlc3wyMzY5M3xpbWFnZS9qcGVnfGltYWdlcy9oYmIvaDZjLzg3OTYxODUzOTUyMzAuanBnfDA3MzI2MjM0MjMwZjA2Y2JmZTI1NDc0ZDVlNzRhNjA2NmJjNGFmZjg3MjBjNDMyMzczNzg4NzM4MWE1ODZhYzg" }, "product": { "altText": "EOS450D + 18-55 IS Kit", "format": "product", "galleryIndex": 2, "imageType": "GALLERY", "url": "https://dev-com-17.accdemo.b2c.ydev.hybris.com:9002/medias/?context=bWFzdGVyfGltYWdlc3w1MTAzMHxpbWFnZS9qcGVnfGltYWdlcy9oM2EvaDJkLzg3OTYyMTE3NDA3MDIuanBnfDNlMDNjNzVmN2FhNjA0NDBmYzc3NDY5ZTgwMjUzNjNmZWM1YTE1Njg1ZDhiMjM2OTk3NGJhZmUxYTJkNTAyMzU" }, "thumbnail": { "altText": "EOS450D + 18-55 IS Kit", "format": "thumbnail", "galleryIndex": 2, "imageType": "GALLERY", "url": "https://dev-com-17.accdemo.b2c.ydev.hybris.com:9002/medias/?context=bWFzdGVyfGltYWdlc3wyMzQyfGltYWdlL2pwZWd8aW1hZ2VzL2g4Ni9oNjQvODc5NjIzODAyMDYzOC5qcGd8ODk3YTRlNzEwNWQ5Y2IxZjc0ZmUwNjU5YTc5MjdhYWM2NjdjZmY4ZjZiM2Q3ZjEyZDIxNDVlMjQwZmI2MjE4Nw" } }, { "zoom": { "altText": "EOS450D + 18-55 IS Kit", "format": "zoom", "galleryIndex": 3, "imageType": "GALLERY", "url": "https://dev-com-17.accdemo.b2c.ydev.hybris.com:9002/medias/?context=bWFzdGVyfGltYWdlc3wyNjUzMHxpbWFnZS9qcGVnfGltYWdlcy9oNTUvaDBmLzg3OTYxODU0NjA3NjYuanBnfGVhYmQ3MzNiMDAyMzlkMmQzMjg3M2VhYjhiYzkwYTY0ZjMzZDg3MGM2MzkwOTMwMmJhOTBiNTBhNzQwMzQwYzc" }, "product": { "altText": "EOS450D + 18-55 IS Kit", "format": "product", "galleryIndex": 3, "imageType": "GALLERY", "url": "https://dev-com-17.accdemo.b2c.ydev.hybris.com:9002/medias/?context=bWFzdGVyfGltYWdlc3w1NzkxN3xpbWFnZS9qcGVnfGltYWdlcy9oMWYvaDRjLzg3OTYyMTE4MDYyMzguanBnfGU0NGZkY2ZiMThiNmYyNmNiNjliYzlhZDYwZjVjMjRhNThkMjM3YjE4Njg1M2YyNDdjNWI5NjM1NmM3MmJjY2E" }, "thumbnail": { "altText": "EOS450D + 18-55 IS Kit", "format": "thumbnail", "galleryIndex": 3, "imageType": "GALLERY", "url": "https://dev-com-17.accdemo.b2c.ydev.hybris.com:9002/medias/?context=bWFzdGVyfGltYWdlc3wyMzg5fGltYWdlL2pwZWd8aW1hZ2VzL2g4MS9oMzIvODc5NjIzODA4NjE3NC5qcGd8ZWYxMjM5ZTA3MTQ2MTMxOTNhZDExNGViNjVjYWQ3ZmRmMDA3YzEwYzBmOTlkZWNjMTgzNjUwMzZjMzE4MDAzZg" } } ]'
    }
  },
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

