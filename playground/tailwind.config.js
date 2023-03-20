const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    // `mask-image`!
    ({ addUtilities, matchUtilities, theme }) => {
      matchUtilities(
        {
          mask: (value) => ({
            maskImage: value,

            /**
             * Default vars
             */
            '--tw-mask-repeat': 'repeat',

            // linear-gradient props
            '--tw-mask-direction': 'to bottom',

            // radial-gradient props
            '--tw-mask-shape': '',
            '--tw-mask-size': 'closest-side',
            '--tw-mask-at': 'center',

            // stops
            '--tw-mask-from-opacity': '1',
            '--tw-mask-from': 'rgba(0,0,0,var(--tw-mask-from-opacity))',
            '--tw-mask-to-opacity': '0',
            '--tw-mask-to': 'rgba(0,0,0,var(--tw-mask-to-opacity))',
            '--tw-mask-stops': 'var(--tw-mask-from), var(--tw-mask-to)',
          }),
        },
        {
          values: {
            none: 'none',
            linear: 'linear-gradient(var(--tw-mask-direction), var(--tw-mask-stops))',
            radial:
              'radial-gradient(var(--tw-mask-shape) var(--tw-mask-size) at var(--tw-mask-at), var(--tw-mask-stops))',
          },
        }
      )

      addUtilities({
        '.mask-repeat': {
          maskRepeat: 'repeat',
        },
        '.mask-no-repeat': {
          maskRepeat: 'no-repeat',
        },
      })

      // - direction
      // NOTE: Can accept angle as an arbitary value, e.g. `mask-dir-[30deg]`
      matchUtilities(
        {
          'mask-dir': (value) => ({
            '--tw-mask-direction': value,
          }),
        },
        {
          values: {
            'to-t': 'to top',
            'to-tl': 'to top left',
            'to-tr': 'to top right',
            'to-r': 'to right',
            'to-b': 'to bottom',
            'to-bl': 'to bottom left',
            'to-br': 'to bottom right',
            'to-l': 'to left',
          },
        }
      )

      // - shape
      addUtilities({
        '.mask-shape-circle': {
          '--tw-mask-shape': 'circle',
        },
        '.mask-shape-ellipse': {
          '--tw-mask-shape': 'ellipse',
        },
      })

      // - size
      // NOTE: Can accept X Y size as an arbitary value, e.g. `mask-size-[25%_25%]`
      matchUtilities(
        {
          'mask-size': (value) => ({
            '--tw-mask-size': value,
          }),
        },
        {
          values: {
            // as-they-are values
            'closest-side': 'closest-side',
            'closest-corner': 'closest-corner',
            'farthest-side': 'farthest-side',
            'farthest-corner': 'farthest-corner',
            // aliases
            contain: 'closest-side',
            cover: 'farthest-corner',
          },
        }
      )

      // - position
      // NOTE: Can accept X Y position as an arbitary value, e.g. `mask-at-[50%_10px]`
      matchUtilities(
        {
          'mask-at': (value) => ({
            '--tw-mask-at': value,
          }),
        },
        {
          values: {
            center: 'center',
            t: 'top',
            tl: 'top left',
            tr: 'top right',
            b: 'bottom',
            bl: 'bottom left',
            br: 'bottom right',
            r: 'right',
            l: 'left',
          },
        }
      )

      // - stops
      // NOTE: Can accept custom opacity as an arbitary value, e.g. `mask-dir-[0.25]`
      matchUtilities(
        {
          'mask-from': (value) => ({
            '--tw-mask-from-opacity': value,
          }),
          'mask-to': (value) => ({
            '--tw-mask-to-opacity': value,
          }),
          'mask-via': (value) => ({
            '--tw-mask-stops': `var(--tw-mask-from), rgba(0,0,0,${value}), var(--tw-mask-to)`,
          }),
        },
        { values: theme('opacity') }
      )
    },

    // helper
    ({ addComponents, addBase }) => {
      addBase({
        h1: {
          fontWeight: '700',
          fontSize: '1.5rem',
          paddingTop: '0.75rem',
        },
      })
      addComponents({
        '.example-container': {
          display: 'inline-flex',
          flexWrap: 'wrap',
          gap: '1.25rem',
          border: '1px solid #0b65a9',
          borderRadius: '0.5rem',
          padding: '1rem',
        },
        '.example': {
          borderRadius: '0.5rem',
          display: 'inline-flex',
          minWidth: '8rem',
          minHeight: '8rem',
          background:
            'repeating-linear-gradient(45deg, #1e293b 10px, #0ba5e9 10px, #0ba5e9 11px, #1e293b 11px, #1e293b 26px)',
        },
      })
    },
  ],
}