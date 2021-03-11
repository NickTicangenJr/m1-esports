import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            dark: {
              primary: colors.blueGrey.darken1,
              secondary: colors.blueGrey.darken4,
              accent: colors.teal.accent4,
      
              error: colors.deepOrange.accent2,
              info: colors.grey.darken3,
              success: colors.green.accent3,
              warning: colors.amber.base,
            },
            light: {
              primary: '#1976D2',
              secondary: colors.teal.lighten3,
              accent: colors.teal.accent4,
      
              error: '#FF5252',
              info: '#2196F3',
              success: '#4CAF50',
              warning: '#FFC107',
            }
          }
      },
});
