import Block from './Block';
import { createRowWrapper, createColumnWrapper } from '../../utils';

class TextBlock extends Block {
  constructor(blockValue, blockOptions) {
    super(blockValue, blockOptions);
    this.blockValue = blockValue;
    this.blockOptions = blockOptions;
  }

  toHTML() {
    const { styles } = this.blockOptions;
    return createRowWrapper(createColumnWrapper(`<p>${this.blockValue}</p>`), styles);
  }
}

export default TextBlock;
