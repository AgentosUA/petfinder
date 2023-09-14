//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  sassOptions: {
    includePaths: [path.join(__dirname), 'styles'],
    modules: {
      localsConvention: 'camelCase'
    }
  }
};

module.exports = withNx(nextConfig);
