<template>
  <div id="template">
    <header>
      <h1>#todo</h1>
    </header>
    <main>
      <div class="main">
        <b-tabs content-class="mt-3" align="center" class="tabs">
          <b-tab title="All" active>
            <Input />
            <div class="tasks">
              <div v-for="(ad, index) in ads" :key="index">
                <label class="task">
                  <input type="checkbox" v-bind:checked="ad.checked" @click="toggleStatus(ad)">
                    <span v-if="ad.checked == true" class="checked">{{ad.name}}</span>
                    <span v-else>{{ad.name}}</span>
                  </input>
                </label>
              </div>
            </div>
          </b-tab>
          <b-tab title="Active">
            <Input />
            <div class="tasks">
             <div v-for="(ad, index) in ads" :key="index">
               <label class="task" v-if="ad.checked == false">
                 <input type="checkbox" v-bind:checked="ad.checked" @click="toggleStatus(ad)">
                   <span v-if="ad.checked == true" class="checked">{{ad.name}}</span>
                   <span v-else>{{ad.name}}</span>
                 </input>
               </label>
             </div>
            </div>
          </b-tab>
          <b-tab title="Completed">
            <div class="tasks">
             <div v-for="(ad, index) in ads" :key="index">
               <label class="task completed" v-if="ad.checked == true">
                 <input type="checkbox" v-bind:checked="ad.checked" @click="toggleStatus(ad)">
                   <span class="checked">{{ad.name}}</span>
                   <b-button variant="link"  @click="deleteAd(ad)"><i class="material-icons">delete_outline</i></b-button>
                 </input>
               </label>
             </div>
            </div>
            <div class="button-delete-all" v-if="isAdCompleted == true">
              <b-button variant="danger" @click="deleteAllAds"><i class="material-icons">delete_outline</i> delete all</b-button>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </main>
    <footer>
      <p>Alexandre Pouivet @ DevChallenges.io</p>
    </footer>
  </div>
</template>

<script>
import Input  from '@/components/Input'

export default {
  components: {
    Input,
  },
  computed: {
    ads() {
      return this.$store.state.ads
    },
    isAdCompleted() {
      return this.$store.state.isAdCompleted
    }
  },
  methods: {
    deleteAllAds() {
      this.$store.dispatch('deleteAds')
      this.verifyIsAdCompleted()
    },
    toggleStatus(ad) {
      this.$store.dispatch('toggleAdStatus', ad)
      this.verifyIsAdCompleted()
    },
    deleteAd(ad) {
      this.$store.dispatch('deleteAd', ad)
      this.verifyIsAdCompleted()
    },
    verifyIsAdCompleted() {
      this.$store.dispatch('verifyIsAdCompleted')
    }
  }
}
</script>
