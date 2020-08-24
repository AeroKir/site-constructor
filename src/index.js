import model from './model';
import './styles/main.css';

const sitePreview = document.getElementById('site-preview');

model.forEach((blockElement) => {
  sitePreview.insertAdjacentHTML('beforeend', blockElement.toHTML());
});
