const config = require('./src/config')

module.exports = {
  plugins: {
    'postcss-nested': true,
    'postcss-css-variables': {
      variables: {
        'items-per-row-mobile': `${config.ITEMS_PER_ROW.MOBILE}`,
        'items-per-row-tablet': `${config.ITEMS_PER_ROW.TABLET}`,
        'items-per-row-desktop': `${config.ITEMS_PER_ROW.DESKTOP}`,
      },
    },
    'postcss-nested-ancestors': true,
    ...(process.env.NODE_ENV !== 'development'
      ? {
          autoprefixer: true,
          cssnano: {
            preset: 'default',
          },
        }
      : {}),
  },
}
