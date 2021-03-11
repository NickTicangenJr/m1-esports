import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'

Vue.config.productionTip = false

const gStore = Vue.observable({
  names: [
    { 
      ign:"Pr1mo", 
      mlid:"1", 
      src: 'dp_pr1imo.jpg',
      avatar: 'dp_member_nick.jpg',
      title: 'Dave Francis Umandal',
      role: 'Carry', 
      hero: 'Assassin/Fighter',
      rank: 'Mythic II',
      top1: 'lancelot.jpg',
      top2: 'alucard.jpg',
      top3: 'claude.jpg',
      top4: 'gusion.jpg',
      mcl: '2',
      position: "captain"
    },
    { 
      ign:"Nick", 
      mlid:"2", 
      src: 'dp_nick.jpg',
      avatar: 'dp_member_nick.jpg',
      title: 'Napoleon Ticangen Jr',
      role: 'Offlane', 
      hero: 'Mage/Fighter',
      rank: 'Mythical Glory',
      top1: 'leo.jpg',
      top2: 'lapu.jpg',
      top3: 'zilong.jpg',
      top4: 'chou.jpg',
      mcl: '3',
      position: "member"
    },
    {
      ign:"Wicked Apple", 
      mlid:"4", 
      src: 'dp_wickedapple.jpg', 
      avatar: 'dp_member_nick.jpg',
      title: 'Jayvee Abalos',
      role: 'Offlane', 
      hero: 'Assassin/Fighter' ,
      rank: 'Mythical Glory',
      top1: 'fanny.jpg',
      top2: 'gusion.jpg',
      top3: 'franco.jpg',
      top4: 'chou.jpg',
      mcl: '5',
      position: "member"
    },
    { 
      ign:"ExtrangHero", 
      mlid:"5", 
      src: 'dp_extranghero.jpg', 
      avatar: 'dp_member_nick.jpg',
      title: 'Darwin Umandal',
      role: 'Support', 
      hero: 'Tank/Support',
      rank: 'Mythic V',
      top1: 'hanabi.jpg',
      top2: 'zilong.jpg',
      top3: 'claude.jpg',
      top4: 'miya.jpg',
      mcl: '0',
      position: "member"
    },
    { 
      ign:"Dianamyte?", 
      mlid:"6", 
      src: 'dp_dianamite.jpg',
      avatar: 'dp_member_nick.jpg',
      title: 'Diana Steve',
      role: 'Offlane', 
      hero: 'Marksman/Mage',
      rank: 'Mythic V',
      top1: 'angela.jpg',
      top2: 'pharsa.jpg',
      top3: 'hanabi.jpg',
      top4: 'xborg.png',
      mcl: '1',
      position: "member"
    },

    { 
      ign:"Shinigami", 
      mlid:"7", 
      src: 'dp_shinigami.jpg', 
      avatar: 'dp_member_nick.jpg',
      title: 'Rey',
      role: 'Tank', 
      hero: 'Tank/Support' ,
      rank: 'Mythic V',
      top1: 'kagura.jpg',
      top2: 'bruno.jpg',
      top3: 'akai.jpg',
      top4: 'tigreal.jpg',
      mcl: '1',
      position: "member"
    },
    { 
      ign:"JOKER", 
      mlid:"8", 
      src: 'dp_joker.jpg',
      avatar: 'dp_member_nick.jpg',
      title: 'Erwin Deniola',
      role: 'Offlane', 
      hero: 'Assassin/Fighter',
      rank: 'Mythical Glory',
      top1: 'hanzo.jpg',
      top2: 'gord.jpg',
      top3: 'gusion.jpg',
      top4: 'tigreal.jpg',
      mcl: '1',
      position: ""
    },
    { 
      ign:"iLeDan", 
      mlid:"9", 
      src: 'dp_iledan.jpg', 
      avatar: 'dp_member_nick.jpg',
      title: 'Daniel Umandal',
      role: 'Tank', 
      hero: 'Tank' ,
      rank: 'Mythic V',
      top1: 'gord.jpg',
      top2: 'silvanna.jpg',
      top3: 'tigreal.jpg',
      top4: 'gatot.png',
      mcl: '0',
      position: "member"
    },
  ],
})

Vue.prototype.$gStore = gStore

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
