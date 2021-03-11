<template>
<v-app>
    

    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="font-weight-normal">
            <v-avatar size="48" tile>
                <v-img src="m1.png"></v-img>
            </v-avatar>
              Milly1 eSports
          </v-list-item-title>
          <v-list-item-subtitle>we are unstoppable</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item><v-divider></v-divider>

      <v-list dense nav>
        <v-list-item 
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="font-weight-light text-uppercase">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
<!-- END| Navigation Drawer -->


<!-- START| Navigation Bar -->
    <v-app-bar app color="primary" dark>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-avatar size="50" tile>
          <v-img src="m1.png"></v-img>
        </v-avatar>

       <v-toolbar-title>Milly 1 eSports</v-toolbar-title><v-spacer></v-spacer>
        <v-btn icon>
          <v-icon @click="toggletheme">mdi-invert-colors</v-icon>
        </v-btn>
        <!-- <span>{{ getNow() }}</span> -->
    </v-app-bar>
<!-- END| Navigation Bar --> 


    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>


</v-app>
</template>



<script>
export default {
  name: 'App',
  data: () => ({
    drawer: null,
    items: [
          { title: 'Home', icon: 'mdi-home', link: '/' },
          { title: 'Members', icon: 'mdi-format-list-bulleted', link: '/member' },
          { title: 'About', icon: 'mdi-help-box', link: '/about' },
        ],
    
  }),
  methods: {
    toggletheme (){
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  }
};
</script>
