import { helper } from '@ember/component/helper';

export function isOdd(params) {
  return (params % 2 === 1);
}

export default helper(isOdd);
