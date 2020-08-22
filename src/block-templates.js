import { createRowWrapper, createColumnWrapper } from './utils';

function createTitleBlock(block) {
  const { tag, styles } = block.blockOptions;

  return createRowWrapper(createColumnWrapper(`<${tag}>${block.blockValue}</${tag}>`), styles);
}

function createTextBlock(block) {
  return createRowWrapper(createColumnWrapper(`<p>${block.blockValue}</p>`), block.blockOptions.styles);
}

function createTextColumnsBlock(block) {
  const columnsBlockContent = block.blockValue.map((item) => createColumnWrapper(item));

  return createRowWrapper(`${columnsBlockContent.join('')}`, block.blockOptions.styles);
}

function createImageBlock(block) {
  const { src, alt, styles } = block.blockOptions;

  return createRowWrapper(`<img src="${src}" alt="${alt}" style="${styles}" />`);
}

const blockTemplates = {
  createTitleBlock,
  createTextBlock,
  createTextColumnsBlock,
  createImageBlock,
};

export default blockTemplates;
