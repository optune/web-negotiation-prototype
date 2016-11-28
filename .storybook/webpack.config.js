const path = require('path');


module.exports = {
  module: {
    loaders: [
      {
        test: /\.scss?$/,
        loader: 'style-loader!css-loader!sass-loader',
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
};
