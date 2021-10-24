// import React from 'react';
// import { CardBlock } from 'blocks/CardBlock';
// import { RowBlock } from './RowBlock';
let BlockComponents: any = {};

BlockComponents['CardBlock'] = require('./CardBlock').default;
BlockComponents['RowBlock'] = require('./RowBlock').default;

export default BlockComponents;