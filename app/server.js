import sirv from 'sirv';
import polka from 'polka';
import sapper from 'sapper';
import compression from 'compression';
import { manifest } from './manifest/server.js';
import store from './store';

polka() // You can also use Express
	//.use(serveStatic('assets'))
	.use(
		compression({ threshold: 0 }),
		sirv('assets'),
		sapper({
			manifest,
			store: request => {
        return store;
      }
		})
	)
	.listen(process.env.PORT)
	.catch(err => {
		console.log('error', err);
	})
