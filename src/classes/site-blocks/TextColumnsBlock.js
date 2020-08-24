import Block from './Block';
import { createRowWrapper, createColumnWrapper } from '../../utils';

class TextColumnsBlock extends Block {
  constructor(blockValue, blockOptions) {
    super(blockValue, blockOptions);
    this.blockValue = blockValue;
    this.blockOptions = blockOptions;
  }

  toHTML() {
    const { styles } = this.blockOptions;
    const columnsBlockContent = this.blockValue.map((item) => createColumnWrapper(item));
    return createRowWrapper(`${columnsBlockContent.join('')}`, styles);
  }
}

export default TextColumnsBlock;
