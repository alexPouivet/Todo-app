export const state = () => ({
   ads: [
     {
       name: "Do coding challenges",
       checked: true,
     },
     {
       name: "Do another coding challenges",
       checked: false,
     },
   ],
   isAdCompleted: true,
});

export const mutations = {
  ADD_AD(state, name) {
    state.ads.push({
      name: name,
      checked: false
    })
  },
  DELETE_AD(state, ad) {
    let index = state.ads.indexOf(ad)
    state.ads.splice(index, 1);
  },
  DELETE_ADS(state) {
    for (var i = 0; i < state.ads.length; i++) {
      if(state.ads[i].checked == true) {
        state.ads.splice(i, 1);
        i--
      }
    }
  },
  TOGGLE_AD_STATUS(state, ad) {
    let index = state.ads.findIndex(findAd => findAd == ad)
    if(state.ads[index].checked == true) {
      state.ads[index].checked = false
    } else {
      state.ads[index].checked = true
    }
  },
  VERIFY_IS_AD_COMPLETED(state) {
    for (var i = 0; i < state.ads.length; i++) {
      if (state.ads[i].checked == true) {
        state.isAdCompleted = true
        break
      }  else {
        state.isAdCompleted = false
      }
    }
  }
}

export const actions = {
  addAd({commit}, name) {
    commit("ADD_AD", name)
  },
  deleteAd({commit}, ad) {
    commit("DELETE_AD", ad)
  },
  deleteAds({commit}) {
    commit("DELETE_ADS")
  },
  toggleAdStatus({commit}, ad) {
    commit("TOGGLE_AD_STATUS", ad)
  },
  verifyIsAdCompleted({commit}) {
    commit("VERIFY_IS_AD_COMPLETED")
  }
}
