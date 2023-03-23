import * as styled from 'styled-components';
// Inter
import InterRegularWoff from '../../vendor/fonts/Inter/inter-400-regular.woff';
import InterRegularWoff2 from '../../vendor/fonts/Inter/inter-400-regular.woff2';
// Roboto
import RobotoBlackWoff from '../../vendor/fonts/Roboto/roboto-900.woff';
import RobotoBlackWoff2 from '../../vendor/fonts/Roboto/roboto-900.woff2';
import RobotoBoldWoff from '../../vendor/fonts/Roboto/roboto-700.woff';
import RobotoBoldWoff2 from '../../vendor/fonts/Roboto/roboto-700.woff2';
import RobotoMediumWoff from '../../vendor/fonts/Roboto/roboto-500.woff';
import RobotoMediumWoff2 from '../../vendor/fonts/Roboto/roboto-500.woff2';
import RobotoRegularWoff from '../../vendor/fonts/Roboto/roboto-400-regular.woff';
import RobotoRegularWoff2 from '../../vendor/fonts/Roboto/roboto-400-regular.woff2';
// Roboto Slab
import RobotoSlabBoldWoff from '../../vendor/fonts/Roboto_Slab/roboto-slab-400-regular.woff';
import RobotoSlabBoldWoff2 from '../../vendor/fonts/Roboto_Slab/roboto-slab-400-regular.woff2';
import RobotoSlabRegularWoff from '../../vendor/fonts/Roboto_Slab/roboto-slab-700.woff';
import RobotoSlabRegularWoff2 from '../../vendor/fonts/Roboto_Slab/roboto-slab-700.woff2';
// Source Sans Pro
import SourceSansProRegular from '../../vendor/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf';

const FontStyles = styled.createGlobalStyle`
  // Inter
  @font-face {
    src: url(${InterRegularWoff}) format('woff'), url(${InterRegularWoff2}) format('woff2');
    font-family: 'Inter'; // sans-serif
    font-weight: 400;
  }
  // Roboto
  @font-face {
    src: url(${RobotoRegularWoff}) format('woff'), url(${RobotoRegularWoff2}) format('woff2');
    font-family: 'Roboto'; // sans-serif
    font-weight: 400;
  }
  @font-face {
    src: url(${RobotoMediumWoff}) format('woff'), url(${RobotoMediumWoff2}) format('woff2');
    font-family: 'Roboto'; // sans-serif
    font-weight: 500;
  }
  @font-face {
    src: url(${RobotoBoldWoff}) format('woff'), url(${RobotoBoldWoff2}) format('woff2');
    font-family: 'Roboto'; // sans-serif
    font-weight: 700;
  }
  @font-face {
    src: url(${RobotoBlackWoff}) format('woff'), url(${RobotoBlackWoff2}) format('woff2');
    font-family: 'Roboto'; // sans-serif
    font-weight: 900;
  }
  // Roboto Slab
  @font-face {
    src: url(${RobotoSlabBoldWoff}) format('woff'), url(${RobotoSlabBoldWoff2}) format('woff2');
    font-family: 'Roboto Slab'; // serif
    font-weight: 400;
  }
  @font-face {
    src: url(${RobotoSlabRegularWoff}) format('woff'),
      url(${RobotoSlabRegularWoff2}) format('woff2');
    font-family: 'Roboto Slab'; // serif
    font-weight: 700;
  }
  // Source Sans Pro
  @font-face {
    src: url(${SourceSansProRegular}) format('truetype');
    font-family: 'Source Sans Pro'; // sans-serif
    font-weight: 400;
  }
`;

export default FontStyles;
