//@ts-check

const path = require('path');
const withSass = require('next-sass');
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
    fiber: false,
    modules: {
      localsConvention: 'camelCase'
    },
    plugins: {
      autoprefixer: {}
    }
  }
};

module.exports = withNx(nextConfig);
