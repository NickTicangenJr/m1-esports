<template>
  <div id="home">
    <v-row>
          <v-col v-for="(name, i) in $gStore.names" :key="i" cols="12" md="4">
            <v-card>
              <v-card-title v-text="name.ign" class="font-weight-light"></v-card-title>
              <v-img
                  :src="name.src"
                  class="white--text align-end rounded-md"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="400"
                >
                </v-img>
              <v-card-actions>
                <v-dialog
                  transition="dialog-bottom-transition"
                  max-width="600"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      v-bind="attrs"
                      v-on="on"
                    >View</v-btn>
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-card-title v-text="name.ign" class="white--text primary"></v-card-title>
                        
                      <v-card-text>
                        <div class=".text-md-body-1 mt-5">
                          <v-row>
                            <p class="font-weight-black text-uppercase">Top 4 heroes</p>
                          </v-row>
<!--START| Avatar top 4 heroes -->
                          <v-row class="text-center mr-6">
                              <v-avatar
                                  class="ma-1"
                                  height="120"
                                  width="90"
                                  tile
                                >
                                  <v-img :src="name.top1"></v-img>
                              </v-avatar><v-spacer></v-spacer>
                                <v-avatar
                                  class="ma-1"
                                  height="120"
                                  width="90"
                                  tile
                                >
                                  <v-img :src="name.top2"></v-img>
                              </v-avatar><v-spacer></v-spacer>
                                <v-avatar
                                  class="ma-1"
                                  height="120"
                                  width="90"
                                  tile
                                >
                                  <v-img :src="name.top3"></v-img>
                              </v-avatar><v-spacer></v-spacer>
                                <v-avatar
                                  class="ma-1"
                                  height="120"
                                  width="90"
                                  tile
                                >
                                  <v-img :src="name.top4"></v-img>
                              </v-avatar><v-spacer></v-spacer>
                          </v-row>
<!--END| Avatar top 4 heroes -->
                          <v-row class="mb-1">
                                <div class="font-weight-normal">
                                  <v-icon medium color="orange darken-2">mdi-sword-cross</v-icon>
                                  <strong class="text--primary">| Hero</strong>
                                </div>
                              <v-spacer></v-spacer>
                                <div class="font-weight-normal">
                                 <strong class="text--primary">{{ name.hero }}</strong>
                                </div>
                          </v-row>
                          <v-row class="mb-1">
                                <div class="font-weight-normal">
                                  <v-icon medium color="orange darken-2">mdi-crown-outline</v-icon>
                                  <strong class="text--primary">| Highest rank</strong>
                                </div>
                              <v-spacer></v-spacer>
                                <div class="font-weight-normal">
                                  <strong class="text--primary">{{ name.rank }}</strong>
                                </div>
                          </v-row>
                          <v-row class="mb-1">
                                <div class="font-weight-normal">
                                  <v-icon medium color="orange darken-2">mdi-star-plus-outline</v-icon>
                                  <strong class="text--primary">| Role</strong>
                                </div>
                              <v-spacer></v-spacer>
                                <div class="font-weight-normal">
                                  <strong class="text--primary">{{ name.role }}</strong>
                                </div>
                          </v-row>
                          <v-row class="mb-1">
                                <div class="font-weight-normal">
                                  <v-icon medium color="orange darken-2">mdi-trophy-variant-outline</v-icon>
                                  <strong class="text--primary">| MCL champion</strong>
                                </div>
                              <v-spacer></v-spacer>
                                <div class="font-weight-normal">
                                  <strong class="text--primary">{{ name.mcl }}</strong>
                                </div>
                          </v-row>
                        </div>
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-card-actions class="justify-end">
                        <v-btn
                          text
                          @click="dialog.value = false"
                        >Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </v-card-actions>
            </v-card>
          </v-col>
    </v-row>
  </div>
</template>

<script>


  export default {

    data: () => ({
      

    }),
  }
</script>
