import layer from 'layer-websdk';
import layerUI from 'layer-ui-web';

import '@optune/react-base-components/src/style/app.css';

import '../imports/startup/client.jsx';


layerUI.init({
  layer,
  appId: 'layer:///apps/staging/589c959e-b61f-11e6-9146-f6d10000544f',
});
