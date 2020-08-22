import model from './model';
import blockTemplates from './block-templates';
import './styles/main.css';

const sitePreview = document.getElementById('site-preview');

model.forEach((blockElement) => {
  const content = blockTemplates[blockElement.blockCreatorFunctionName];

  if (content) {
    const html = content(blockElement);
    sitePreview.insertAdjacentHTML('beforeend', html);
  }
});
