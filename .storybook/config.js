import { configure /*, addDecorator, setAddon */ } from '@kadira/storybook';
/* import centered from '@kadira/react-storybook-decorator-centered';
import infoAddon from '@kadira/react-storybook-addon-info';


import '../src/style/app.css';

setAddon(infoAddon);

addDecorator(centered);
 */

const req = require.context('../imports', true, /\.story\.jsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
