import Block from './Block';
import { createRowWrapper, createColumnWrapper } from '../../utils';

class TitleBlock extends Block {
  constructor(blockValue, blockOptions) {
    super(blockValue, blockOptions);
    this.blockValue = blockValue;
    this.blockOptions = blockOptions;
  }

  toHTML() {
    const { tag, styles } = this.blockOptions;

    return createRowWrapper(createColumnWrapper(`<${tag}>${this.blockValue}</${tag}>`), styles);
  }
}

export default TitleBlock;
