import defaultTheme from 'tailwindcss/defaultTheme'

export const fontFamily = {
  sans: ['Safiro', ...defaultTheme.fontFamily.sans],
}

export const fontSize: Record<string, [fontSize: string, { lineHeight: string }]> = {
  // 8.68px / 13.02px
  'thin': ['var(--ja-font-size--4)', {
    lineHeight: 'var(--ja-line-height-4)',
  }],

  // 10.416px / 15.624px
  'extra-small': [
    'var(--ja-font-size--3)', {
      lineHeight: 'var(--ja-line-height-4)',
    }],

  // 12.5008px / 18.7512px
  'very-small': [
    'var(--ja-font-size--2)', {
      lineHeight: 'var(--ja-line-height-4)',
    }],

  // 15px / 22.5px
  'small': [
    'var(--ja-font-size--1)', {
      lineHeight: 'var(--ja-line-height-4)',
    }],

  // 18px / 27px
  'body': [
    'var(--ja-font-size-0)', {
      lineHeight: 'var(--ja-line-height-4)',
    }],

  // 21.6px / 32.4px
  'heading-6': [
    'var(--ja-font-size-1)', {
      lineHeight: 'var(--ja-line-height-3)',
    }],

  // 25.92px / 32.4px
  'heading-5': [
    'var(--ja-font-size-2)', {
      lineHeight: 'var(--ja-line-height-2)',
    }],

  // 31.104px / 38.88px
  'heading-4': [
    'var(--ja-font-size-3)', {
      lineHeight: 'var(--ja-line-height-2)',
    }],

  // 37.3248px / 42.92352px
  'heading-3': [
    'var(--ja-font-size-4)', {
      lineHeight: 'var(--ja-line-height-2)',
    }],

  // 44.7904px / 51.50896px
  'heading-2': [
    'var(--ja-font-size-5)', {
      lineHeight: 'var(--ja-line-height-1)',
    }],

  // 53.7472px / 53.7472px
  'heading-1': [
    'var(--ja-font-size-6)', {
      lineHeight: 'var(--ja-line-height-1)',
    }],

  // 64.4976px / 64.4976px
  'display-4': [
    'var(--ja-font-size-7)', {
      lineHeight: 'var(--ja-line-height-1)',
    }],

  // 77.3968px / 77.3968px
  'display-3': [
    'var(--ja-font-size-8)', {
      lineHeight: 'var(--ja-line-height-1)',
    }],

  // 92.8768px / 92.8768px
  'display-2': [
    'var(--ja-font-size-9)', {
      lineHeight: 'var(--ja-line-height-1)',
    }],

  // 111.4512px / 111.4512px
  'display-1': [
    'var(--ja-font-size-10)', {
      lineHeight: 'var(--ja-line-height-1)',
    }],
}

export const fontWeight = {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
}
