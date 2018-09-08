import { init } from 'sapper/runtime.js';
import store from './store';
import { manifest } from './manifest/client.js';

init({
	target: document.querySelector('#sapper'),
	manifest,
	store: () => {
    return store;
  }
});