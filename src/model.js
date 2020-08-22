const modelOfBlocks = [
  {
    blockCreatorFunctionName: 'createTitleBlock',
    blockType: 'title',
    blockValue: 'Test title',
    blockOptions: {
      tag: 'h2',
      styles: 'background: red; color: #fff; margin: 0 auto;',
    },
  },
  {
    blockCreatorFunctionName: 'createTextBlock',
    blockType: 'text',
    blockValue: 'Text and many many text',
    blockOptions: {},
  },
  {
    blockCreatorFunctionName: 'createTextColumnsBlock',
    blockType: 'textColumns',
    blockValue: [
      '1 text',
      '2 text',
      '3 text',
      '4 text',
    ],
    blockOptions: {
      styles: 'padding: 1rem; color: darkblue;',
    },
  },
  {
    blockCreatorFunctionName: 'createTitleBlock',
    blockType: 'title',
    blockValue: 'Yet another title',
    blockOptions: {},
  },
  {
    blockCreatorFunctionName: 'createTextColumnsBlock',
    blockType: 'textColumns',
    blockValue: [
      '1 text',
      '2 text',
      '3 text',
      '4 text',
    ],
    blockOptions: {
      styles: 'padding: 1rem; color: orange;',
    },
  },
];

export default modelOfBlocks;
