import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import {
  VDataTable,
  VLayout,
  VMain,
  VAppBar,
  VBtn,
  VCol,
  VRow,
  VContainer,
  VSpacer
} from 'vuetify/components';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

const components = {
  VDataTable,
  VLayout,
  VMain,
  VAppBar,
  VBtn,
  VCol,
  VRow,
  VContainer,
  VSpacer
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
