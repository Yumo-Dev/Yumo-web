export function errorInfo(err) {
  console.log(err)
  if (err.message && err.message.indexOf("User rejected the request.") != -1) {
    return "userReject";
  }
  if (err.message && err.message.indexOf("User denied transaction signature") != -1) {
    return "userReject";
  }
  if (err.message && err.message.indexOf("User denied message signature.") != -1) {
    return "deniedMessage";
  }
  if (err.reason && err.reason.indexOf("user rejected transaction") != -1) {
    return "deniedMessage";
  }
  if (err.message && err.message.indexOf("insufficient funds for intrinsic transaction cost") != -1) {
    return "Bnb"
  }
  if (err.reason && err.reason.indexOf("ds-math-sub-underflow") != -1) {
    return "Bnb"
  }
  if (err.reason && err.reason.indexOf("balance not enough") != -1) {
    return "notBalance";
  }
  if (err.reason && err.reason.indexOf("Singer Error.") != -1) {
    return "signatureError";
  }
  if (err.reason && err.reason.indexOf("Signature has expired.") != -1) {
    return "signatureTimeout";
  }
  if (err.reason && err.reason.indexOf("Exists") != -1) {
    return "Exists";
  }
  if (err.reason && err.reason.indexOf("BNE") != -1) {
    return "BNE";
  }
  if (err.reason && err.reason.indexOf("USDTAMT_TOO_LOW") != -1) {
    return "usdtAmtTooLow";
  }
  return "default";
}