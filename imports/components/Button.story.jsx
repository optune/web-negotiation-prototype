import React from 'react';
import { storiesOf} from '@kadira/storybook';

import Button from './Button.jsx';

storiesOf("element/Button", module)
.add('Button', () => 
	(
		<Button />
	)
)
.add('Button', () =>
	(
		))