const packager = require('electron-packager')
const path = require('path')
const pkg = require('../package')

packager({
  dir: path.join(__dirname, '..'),
  appCopyright: '© 2017, Zihua Li',
  asar: true,
  overwrite: true,
  electronVersion: pkg.electronVersion,
  icon: path.join(__dirname, '..', 'icns', 'MyIcon'),
  out: path.join(__dirname, '..', 'out'),
  platform: 'darwin',
  appBundleId: `li.zihua.${pkg.name}`,
  appCategoryType: 'public.app-category.developer-tools',
  osxSign: {
    type: 'development',
    entitlements: path.join(__dirname, '..', 'parent.plist'),
    'entitlements-inherit': path.join(__dirname, '..', 'child.plist')
  }
}, function (err, res) {
  if (err) {
    throw err;
  }
})
