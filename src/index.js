import model from './model';
import './styles/main.css';

console.log(model);

function createTitleBlock(block) {
  return `
  <div class="row">
    <div class="col-sm">
      <h1>${block.blockValue}</h1>
    </div>
  </div>
  `;
}

function createTextBlock(block) {
  return `
  <div class="row">
    <div class="col-sm">
      <p>${block.blockValue}</p>
    </div>
  </div>
  `;
}

function createTextColumnsBlock(block) {
  const columnsBlockContent = block.blockValue.map((item) => `<div class="col-sm">${item}</div>`);

  return `
  <div class="row">
    ${columnsBlockContent.join('')}
  </div>
  `;
}

model.forEach((blockElement) => {
  let html;
  if (blockElement.blockType === 'title') {
    html = createTitleBlock(blockElement);
  } else if (blockElement.blockType === 'text') {
    html = createTextBlock(blockElement);
  } else if (blockElement.blockType === 'textColumns') {
    html = createTextColumnsBlock(blockElement);
  }

  document.getElementById('site-preview').insertAdjacentHTML('beforeend', html);
});
