import { PluginCreator } from 'tailwindcss/types/config'

export const utopia: PluginCreator = ({ addBase }) => {
  addBase({
    ':root': {

      '--ja-heading-max-width': '18ch',
      '--ja-text-max-width': '32ch',

      '--ja-line-height-1': '1em',
      '--ja-line-height-2': '1.15em',
      '--ja-line-height-3': '1.25em',
      '--ja-line-height-4': '1.5em',

      /* @link https://utopia.fyi/type/calculator?c=320,18,1.2,2342,32,1.25,10,4,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
      '--ja-font-size--4': 'clamp(0.5425rem, 0.4987rem + 0.2189vw, 0.8192rem)',
      '--ja-font-size--3': 'clamp(0.651rem, 0.592rem + 0.2951vw, 1.024rem)',
      '--ja-font-size--2': 'clamp(0.7813rem, 0.7023rem + 0.3947vw, 1.28rem)',
      '--ja-font-size--1': 'clamp(0.9375rem, 0.8327rem + 0.5242vw, 1.6rem)',
      '--ja-font-size-0': 'clamp(1.125rem, 0.9865rem + 0.6924vw, 2rem)',
      '--ja-font-size-1': 'clamp(1.35rem, 1.168rem + 0.91vw, 2.5rem)',
      '--ja-font-size-2': 'clamp(1.62rem, 1.3818rem + 1.1909vw, 3.125rem)',
      '--ja-font-size-3': 'clamp(1.944rem, 1.6335rem + 1.5527vw, 3.9063rem)',
      '--ja-font-size-4': 'clamp(2.3328rem, 1.9292rem + 2.0178vw, 4.8828rem)',
      '--ja-font-size-5': 'clamp(2.7994rem, 2.2764rem + 2.6146vw, 6.1035rem)',
      '--ja-font-size-6': 'clamp(3.3592rem, 2.6834rem + 3.379vw, 7.6294rem)',
      '--ja-font-size-7': 'clamp(4.0311rem, 3.1598rem + 4.3566vw, 9.5367rem)',
      '--ja-font-size-8': 'clamp(4.8373rem, 3.7162rem + 5.6053vw, 11.9209rem)',
      '--ja-font-size-9': 'clamp(5.8048rem, 4.3652rem + 7.1979vw, 14.9012rem)',
      '--ja-font-size-10': 'clamp(6.9657rem, 5.1203rem + 9.2271vw, 18.6265rem)',

      /* @link https://utopia.fyi/space/calculator?c=320,18,1.2,2342,32,1.25,10,4,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
      '--ja-space-3xs': 'clamp(0.3125rem, 0.2828rem + 0.1484vw, 0.5rem)',
      '--ja-space-2xs': 'clamp(0.5625rem, 0.4933rem + 0.3462vw, 1rem)',
      '--ja-space-xs': 'clamp(0.875rem, 0.7761rem + 0.4946vw, 1.5rem)',
      '--ja-space-s': 'clamp(1.125rem, 0.9865rem + 0.6924vw, 2rem)',
      '--ja-space-m': 'clamp(1.6875rem, 1.4798rem + 1.0386vw, 3rem)',
      '--ja-space-l': 'clamp(2.25rem, 1.973rem + 1.3848vw, 4rem)',
      '--ja-space-xl': 'clamp(3.375rem, 2.9596rem + 2.0772vw, 6rem)',
      '--ja-space-2xl': 'clamp(4.5rem, 3.9461rem + 2.7695vw, 8rem)',
      '--ja-space-3xl': 'clamp(6.75rem, 5.9191rem + 4.1543vw, 12rem)',

      /* One-up pairs */
      '--ja-space-3xs-2xs': 'clamp(0.3125rem, 0.2037rem + 0.544vw, 1rem)',
      '--ja-space-2xs-xs': 'clamp(0.5625rem, 0.4141rem + 0.7418vw, 1.5rem)',
      '--ja-space-xs-s': 'clamp(0.875rem, 0.697rem + 0.8902vw, 2rem)',
      '--ja-space-s-m': 'clamp(1.125rem, 0.8283rem + 1.4837vw, 3rem)',
      '--ja-space-m-l': 'clamp(1.6875rem, 1.3215rem + 1.8299vw, 4rem)',
      '--ja-space-l-xl': 'clamp(2.25rem, 1.6565rem + 2.9674vw, 6rem)',
      '--ja-space-xl-2xl': 'clamp(3.375rem, 2.6431rem + 3.6597vw, 8rem)',
      '--ja-space-2xl-3xl': 'clamp(4.5rem, 3.3131rem + 5.9347vw, 12rem)',

      /* @link https://utopia.fyi/grid/calculator?c=320,18,1.2,2342,32,1.25,10,4,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
      '--ja-grid-max-width': '124.00rem',
      '--ja-grid-gutter': 'var(--space-s-l, clamp(1.125rem, 0.5721rem + 2.7644vw, 4rem))',
      '--ja-grid-columns': '12',
    },
  })
}
