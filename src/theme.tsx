import { createGetCssVar, extendTheme } from '@mui/joy/styles';
import type {} from '@mui/joy';

declare module '@mui/joy/styles' {
  interface PaletteNeutral {
    10: string;
    20: string;
    30: string;
    40: string;
    60: string;
    90: string;
    130: string;
    150: string;
    160: string;
    190: string;
  }

  interface PalettePrimary {
    lighterAlt: string;
    lighter: string;
    light: string;
    tertiary: string;
    darkAlt: string;
    dark: string;
    darker: string;
  }

  interface TypographySystemOverrides {
    metadataLimited: true;
    metadata: true;
    bodyText: true,
    subjectTitle: true;
    header: true;
    paneHeader: true;
    pageTitle: true;
    greetingTitle: true;
    heroTitle: true;
    display2: false;
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    body1: false;
    body2: false;
    body3: false;
    body4: false;
    body5: false;
  }

  interface Shadow {
    4: string;
    8: string;
    16: string;
    64: string;
  }
}

const getCssVar = createGetCssVar('fluent');

const fluentTheme = extendTheme({
  cssVarPrefix: 'fluent',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          // from fluent figma file
          '500': '#0078d4',
          lighterAlt: '#EFF6FC',
          lighter: '#DEECF9',
          light: '#C7E0F4',
          tertiary: '#2B88D8',
          darkAlt: '#106EBE',
          dark: '#005A9E',
          darker: '#004578',
          // generated from http://mcg.mbitson.com/
          '50': '#e0effa',
          '100': '#b3d7f2',
          '200': '#80bcea',
          '300': '#4da1e1',
          '400': '#268cda',
          '600': '#0070cf',
          '700': '#0065c9',
          '800': '#005bc3',
          '900': '#0048b9',
        },
        success: {
          // from fluent figma file
          '500': '#107c10',
          // generated from http://mcg.mbitson.com/
          '50': '#e2efe2',
          '100': '#b7d8b7',
          '200': '#88be88',
          '300': '#58a358',
          '400': '#349034',
          '600': '#0e740e',
          '700': '#0c690c',
          '800': '#095f09',
          '900': '#054c05',
        },
        danger: {
          // from fluent figma file
          '500': '#a80000',
          // generated from http://mcg.mbitson.com/
          '50': '#f5e0e0',
          '100': '#e5b3b3',
          '200': '#d48080',
          '300': '#c24d4d',
          '400': '#b52626',
          '600': '#a00000',
          '700': '#970000',
          '800': '#8d0000',
          '900': '#7d0000',
        },
        warning: {
          '500': '#d83b01',
          // generated from http://mcg.mbitson.com/
          '50': '#fae7e1',
          '100': '#f3c4b3',
          '200': '#ec9d80',
          '300': '#e4764d',
          '400': '#de5827',
          '600': '#d43501',
          '700': '#ce2d01',
          '800': '#c82601',
          '900': '#bf1900',
        },
        neutral: {
          10: '#FAF9F8',
          20: '#F3F2F1',
          30: '#EDEBE9',
          40: '#E1DFDD',
          50: '#D2D0CE',
          60: '#C8C6C4',
          90: '#A19F9D',
          130: '#605E5C',
          150: '#3B3A39',
          160: '#323130',
          190: '#201F1E',
        },
        divider: getCssVar('palette-neutral-30')
      },
    },
  },
  focus: {
    // 💡 global focus customization
    default: {
      outline: '1px solid',
      outlineOffset: '0px',
      outlineColor: getCssVar('palette-neutral-190'),
    },
  },
  variants: {
    // 💡 Allow custom properties to variant
    // use case: Button
  },
  fontSize: {
    xs: '0.7rem',
    sm: '0.75rem',
    md: '0.875rem',
    lg: '1rem',
  },
  // 💡 custom typography
  typography: {
    metadataLimited: {
      fontSize: '10px',
      lineHeight: '12px',
    },
    metadata: {
      fontSize: '12px',
      lineHeight: '16px',
    },
    bodyText: {
      fontSize: '14px',
      lineHeight: '20px',
    },
    subjectTitle: {
      fontSize: '16px',
      lineHeight: '22px',
    },
    header: {
      fontSize: '18px',
      lineHeight: '24px',
    },
    paneHeader: {
      fontSize: '20px',
      lineHeight: '28px',
    },
    pageTitle: {
      fontSize: '28px',
      lineHeight: '36px',
    },
    greetingTitle: {
      fontSize: '32px',
      lineHeight: '40px',
    },
    heroTitle: {
      fontSize: '42px',
      lineHeight: '52px',
    },
  },
  shadow: {
    "4": '0px 1.600000023841858px 3.5999999046325684px 0px rgba(0 0 0 / 0.13), 0px 0.30000001192092896px 0.8999999761581421px 0px rgba(0 0 0 / 0.1)',
    '8': '0px 3.200000047683716px 7.199999809265137px 0px rgba(0 0 0 / 0.13), 0px 0.6000000238418579px 1.7999999523162842px 0px rgba(0 0 0 / 0.1)',
    '16': '0px 6.400000095367432px 14.399999618530273px 0px rgba(0, 0, 0, 0.13), 0px 1.2000000476837158px 3.5999999046325684px 0px rgba(0, 0, 0, 0.1)',
    '64': '0px 25.600000381469727px 57.599998474121094px 0px rgba(0, 0, 0, 0.22), 0px 4.800000190734863px 14.399999618530273px 0px rgba(0, 0, 0, 0.18)',
  },
  radius: {
    xs: '0px',
    sm: '0px',
    md: '0px',
    lg: '0px',
    xl: '0px',
  },
  components: {
    JoyButton: {
      styleOverrides: {
        
      },
    },
  },
});

export default fluentTheme;
