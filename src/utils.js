export function createRowWrapper(content, styles = '') {
  return `<div class="row" style="${styles}">${content}</div>`;
}

export function createColumnWrapper(content) {
  return `<div class="col-sm">${content}</div>`;
}
