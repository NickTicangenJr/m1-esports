<template>
  <div id="member">
      <v-card elevation="0">
      <v-card-title>
            <span class="text-caption">members ({{ $gStore.names.length }}/9)</span>
            <v-spacer></v-spacer>
            <v-dialog max-width="800">
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" plain color="primary">
                  Apply
                </v-btn>
              </template>
              <template v-slot:default="dialog">
                  <v-card>
                  <v-card-title>Application form</v-card-title>
                  <v-card-text>
                    <v-form ref="form">
                      <v-text-field
                      v-model="newName"
                      clearable
                      prepend-icon="mdi-account-circle"
                      label="Full name"
                    ></v-text-field>
                    <v-text-field
                      v-model="newMLName"
                      clearable
                      prepend-icon="mdi-account-cowboy-hat"
                      label="ML name"
                    ></v-text-field>
                    
                    <v-card-actions>
                      <v-btn small class="primary" @click="sumbit">
                        Sumbit
                      </v-btn><v-spacer></v-spacer>
                      <v-btn small class="primary" @click="dialog.value = false">
                        Close
                      </v-btn>
          
                    </v-card-actions>
                    
                    </v-form>
                  </v-card-text>
                </v-card>
              </template>
            </v-dialog>
      </v-card-title>
      <v-list>
        <v-list-item v-for="(name, i) in $gStore.names" :key="i">
        <v-list-item-avatar tile><v-img :src="name.src"></v-img></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold">
          {{ name.title }}<v-spacer></v-spacer>
          
        </v-list-item-title>
        <v-list-item-subtitle>{{ name.ign }} - {{ name.position }}</v-list-item-subtitle>
      </v-list-item-content>
      </v-list-item>
    </v-list>
    </v-card>
    <!-- V-CARD MEMBER ============================================ -->

    <v-card elevation="0">
      <v-card-title>
        <h4>Request ({{ Request.length }})</h4>
      </v-card-title>
      <v-list>
        <v-list-item v-for="(item, i) in Request" :key="i">
        <v-list-item-icon tile><v-icon>mdi-account-circle</v-icon></v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold">
              {{ item.name }}<v-spacer></v-spacer>
              
            </v-list-item-title>
            <v-list-item-subtitle>{{ item.mlname }}</v-list-item-subtitle>
          </v-list-item-content>
      </v-list-item>
    </v-list>
    </v-card>

  
  </div>
</template>


<script>

  export default {

    data: () => ({
        positions:[ "leader", "member" ],

        newName: '',
        newMLName: '',
        Request: [],
        dialog: false

    }),


    methods: {
      sumbit(){
        let newRequest = {
          name: this.newName,
          mlname: this.newMLName
        }
        this.Request.push(newRequest)
        this.newName = ""
        this.newMLName = ""
        this.dialog
      }


    }
  }
</script>