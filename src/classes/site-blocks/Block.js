class Block {
  constructor(blockValue, blockOptions) {
    this.blockValue = blockValue;
    this.blockOptions = blockOptions;
  }

  toHTML() {
    throw new Error('toHTML method must be realised');
  }
}

export default Block;
