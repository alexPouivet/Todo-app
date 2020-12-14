<template>
  <div class="input">
    <b-form-input placeholder="add details" v-model="text"></b-form-input>
    <b-button variant="primary" @click="addAd">Add</b-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      text: ""
    }
  },
  methods: {
    addAd() {
      this.$store.dispatch('addAd', this.text)
      this.text = ""
    },
  }
}
</script>
