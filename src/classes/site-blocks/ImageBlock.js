import Block from './Block';
import { createRowWrapper } from '../../utils';

class ImageBlock extends Block {
  constructor(blockValue, blockOptions) {
    super(blockValue, blockOptions);
    this.blockValue = blockValue;
    this.blockOptions = blockOptions;
  }

  toHTML() {
    const { src, alt, styles } = this.blockOptions;

    return createRowWrapper(`<img src="${src}" alt="${alt}" style="${styles}" />`);
  }
}

export default ImageBlock;
