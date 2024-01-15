const path = require('path');
const watchFolders = [
  path.resolve(__dirname + '/../external'),
];
 
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  watchFolders,
};