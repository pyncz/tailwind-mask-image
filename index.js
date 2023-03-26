const plugin = require("tailwindcss/plugin")

module.exports = plugin(({ theme, addUtilities, matchUtilities }) => {
  matchUtilities(
    {
      mask: (value) => ({
        maskImage: value,

        /**
         * Default vars
         */
        // linear-gradient props
        '--tw-mask-direction': 'to bottom',

        // radial-gradient props
        '--tw-mask-shape': '',
        '--tw-mask-reach': 'closest-side',
        '--tw-mask-at': 'center',

        // stops
        '--tw-mask-from-opacity': '1',
        '--tw-mask-point-from': '',
        '--tw-mask-from': 'rgba(0,0,0,var(--tw-mask-from-opacity)) var(--tw-mask-point-from)',
        '--tw-mask-to-opacity': '0',
        '--tw-mask-point-to': '',
        '--tw-mask-to': 'rgba(0,0,0,var(--tw-mask-to-opacity)) var(--tw-mask-point-to)',
        '--tw-mask-stops': 'var(--tw-mask-from), var(--tw-mask-to)',
      }),
    },
    {
      values: {
        none: 'none',
        linear: 'linear-gradient(var(--tw-mask-direction), var(--tw-mask-stops))',
        radial:
          'radial-gradient(var(--tw-mask-shape) var(--tw-mask-reach) at var(--tw-mask-at), var(--tw-mask-stops))',
      },
    }
  )

  // - direction
  // NOTE: Can accept angle as an arbitrary value, e.g. `mask-dir-[30deg]`
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
  // NOTE: Can accept X Y size as an arbitrary value, e.g. `mask-reach-[25%_25%]`
  matchUtilities(
    {
      'mask-reach': (value) => ({
        '--tw-mask-reach': value,
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
        'contain': 'closest-side',
        'cover': 'farthest-corner',
      },
    },
  )

  // - position
  // NOTE: Can accept X Y position as an arbitrary value, e.g. `mask-at-[50%_10px]`
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

  // - stops' colors
  // NOTE: Can accept custom opacity as an arbitrary value, e.g. `mask-dir-[0.25]`
  matchUtilities(
    {
      'mask-from': (value) => ({
        '--tw-mask-from-opacity': value,
      }),
      'mask-to': (value) => ({
        '--tw-mask-to-opacity': value,
      }),
      'mask-via': (value) => ({
        '--tw-mask-point-via': '',
        '--tw-mask-stops': `var(--tw-mask-from), rgba(0,0,0,${value}) var(--tw-mask-point-via), var(--tw-mask-to)`,
      }),
    },
    { values: theme('opacity') }
  )

  // - stops' points
  matchUtilities({
    'mask-point-from': (value) => ({
      '--tw-mask-point-from': value,
    }),
    'mask-point-to': (value) => ({
      '--tw-mask-point-to': value,
    }),
    'mask-point-via': (value) => ({
      '--tw-mask-point-via': value,
    }),
  })

  // Additional attributes
  // repeat
  addUtilities({
    '.mask-repeat': {
      maskRepeat: 'repeat',
    },
    '.mask-repeat-x': {
      maskRepeat: 'repeat-x',
    },
    '.mask-repeat-y': {
      maskRepeat: 'repeat-y',
    },
    '.mask-repeat-space': {
      maskRepeat: 'space',
    },
    '.mask-repeat-round': {
      maskRepeat: 'round',
    },
    '.mask-no-repeat': {
      maskRepeat: 'no-repeat',
    },
  })
  // size
  matchUtilities(
    {
      'mask-size': (value) => ({
        maskSize: value,
      }),
    },
    {
      values: theme('backgroundSize')
    },
  )
  // position
  matchUtilities(
    {
      'mask-position': (value) => ({
        maskPosition: value,
      }),
    },
    {
      values: theme('backgroundPosition')
    },
  )
})
