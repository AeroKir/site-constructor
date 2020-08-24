import TitleBlock from './classes/site-blocks/TitleBlock';
import TextBlock from './classes/site-blocks/TextBlock';
import TextColumnsBlock from './classes/site-blocks/TextColumnsBlock';
import ImageBlock from './classes/site-blocks/ImageBlock';
import image from './assets/img.jpg';
import icon from './assets/andy-warhol.svg';

const modelOfBlocks = [
  new TitleBlock('Test title', {
    tag: 'h2',
    styles: 'background: red; color: #fff; margin: 0 auto;',
  }),
  new TextBlock('Text and many many text', { styles: 'background: blue; color: #fff; margin: 0 auto;' }),
  new TextColumnsBlock([
    '1 text',
    '2 text',
    '3 text',
    '4 text',
  ], {
    styles: 'padding: 1rem; color: darkblue;',
  }),
  new TitleBlock('Yet another title', {}),
  new TextColumnsBlock([
    '1 text',
    '2 text',
    '3 text',
    '4 text',
  ], {
    styles: 'padding: 1rem; color: orange;',
  }),
  new ImageBlock(image, {
    src: image,
    alt: 'Image',
    styles: 'width: 300px; height: auto;',
  }),
  new ImageBlock(image, {
    src: icon,
    alt: 'Image',
    styles: 'width: 100px; height: auto;',
  }),
  new TitleBlock('Привет Всем ВАМ!!!!!', {
    tag: 'h1',
    styles: 'background: blue; color: green; margin: 0 auto;',
  }),
  new TitleBlock('Yet another title!!!!!!!!!!!!', {
    tag: 'h1',
    styles: 'background: blue; color: green; margin: 0 auto;',
  }),
  new TextBlock('text block', { styles: 'color: red;' }),
];

export default modelOfBlocks;
