import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://prathamapp.vercel.app/icon.svg',
    brandTitle: 'Pratham verma Components',
    brandUrl: 'https://prathamapp.vercel.app/',
  },
});
