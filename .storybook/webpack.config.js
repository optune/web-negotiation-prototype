const path = require('path');


module.exports = {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        // include: path.resolve(__dirname, '../imports'),
      },
    ],
  },
};
