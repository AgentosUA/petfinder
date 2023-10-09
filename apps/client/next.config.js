// @ts-nocheck

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');


/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  sassOptions: {
    fiber: false,
    modules: {
      localsConvention: 'camelCase'
    },
    plugins: {
      autoprefixer: {}
    }
  },
  /* Fix for css-loader to use camelcase in class names */
  webpack: (config) => {
    const rules = config.module.rules
        .find((rule) => typeof rule.oneOf === 'object').oneOf.filter((rule) => Array.isArray(rule.use));
    rules.forEach((rule) => {
        rule.use.forEach((moduleLoader) => {
            if (
                moduleLoader.loader !== undefined 
                && moduleLoader.loader.includes('css-loader') 
                && typeof moduleLoader.options.modules === 'object'
            ) {
                moduleLoader.options = {
                    ...moduleLoader.options,
                    modules: {
                        ...moduleLoader.options.modules,
                        // This is where we allow camelCase class names
                        exportLocalsConvention: 'camelCase'
                    }
                };
            }
        });
    });

    return config;
  }
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);

