import type { Preview } from '@storybook/react-vite';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../src/app/store';
// @ts-ignore
import '../src/styles/main.scss';

initialize({
   onUnhandledRequest: 'bypass', // ← This is the key
   serviceWorker: {
      url: '/storybook-react/mockServiceWorker.js',
   },
}); // starts the service worker

const preview: Preview = {
   loaders: [mswLoader], // applies MSW to every story
   parameters: {
      controls: {
         matchers: {
            color: /(background|color)$/i,
            date: /Date$/i,
         },
      },

      a11y: {
         // 'todo' - show a11y violations in the test UI only
         // 'error' - fail CI on a11y violations
         // 'off' - skip a11y checks entirely
         test: 'todo',
      },
   },
   decorators: (Story) => (
      <Provider store={store}>
         <BrowserRouter>
            <Story />
         </BrowserRouter>
      </Provider>
   ),
};

export default preview;
