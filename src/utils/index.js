import BigNumber from "bignumber.js";
export function showAddress4(address) {
  if (!address) return "";
  const _address = address.toString();
  const leftAddress = _address.slice(0, 4);
  const rightAddress = _address.slice(_address.length - 4, _address.length);
  return leftAddress + "..." + rightAddress;
}

export function toPrecision(num, precision) {
  if (num && !isNaN(num)) {
    BigNumber.config({
      EXPONENTIAL_AT: [-30, 30]
    });
    return new BigNumber(num).decimalPlaces(precision, 1).toString();
  } else {
    return "0";
  }
}