import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { VDataTable, VLayout, VMain, VAppBar, VCol, VRow, VContainer } from 'vuetify/components';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

const components = {
  VDataTable,
  VLayout,
  VMain,
  VAppBar,
  VCol,
  VRow,
  VContainer
};

export const vuetify = createVuetify({
  components,
  theme: {
    defaultTheme: 'dark'
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
});
