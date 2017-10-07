import * as settingsActions from 'actions/setting';
import messages from 'content/messages';
import BackgroundComponent from 'components/background';
import BackgroundInputComponent from 'components/background-input';
import reducers from 'reducers';
import { createStore } from 'store';

const store = createStore(reducers, (e, sender) => {
  console.error('Vim-Vixen:', e);
  if (sender) {
    return browser.tabs.sendMessage(sender.tab.id, {
      type: messages.CONSOLE_SHOW_ERROR,
      text: e.message,
    });
  }
});
const backgroundComponent = new BackgroundComponent(store);
const backgroundInputComponent = new BackgroundInputComponent(store);
store.subscribe((sender) => {
  backgroundComponent.update(sender);
  backgroundInputComponent.update(sender);
});

store.dispatch(settingsActions.load());
