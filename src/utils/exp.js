//简易手机号
const easyMobilePhone = /^1\d{10}$/;
//手机号
const mobilePhone = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0-9])|(19[0-9]))\d{8}$/;
//国内座机
const telephone = /\d{3}-\d{8}|\d{4}-\d{7}/;
//身份证
const idCard = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
//ipV4
const ipV4 = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
//十六进制
const hex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
//QQ号码
const QQ = /^[1-9][0-9]{4,10}$/;
//微信号码
const WX = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
//包含中文
const includeCN = /[\u4E00-\u9FA5]/;
//只有中文
const onlyCN = /^[\u4e00-\u9fa5]*$/;
//URL
const URL = /^(https?:\/\/)([0-9a-z.]+)(:[0-9]+)?([/0-9a-z.]+)?(\?[0-9a-z&=]+)?(#[0-9-a-z]+)?/i;
//HTTP
const HTTP = /^(http:\/\/)([0-9a-z.]+)(:[0-9]+)?([/0-9a-z.]+)?(\?[0-9a-z&=]+)?(#[0-9-a-z]+)?/i;
//HTTPS
const HTTPS = /^(https:\/\/)([0-9a-z.]+)(:[0-9]+)?([/0-9a-z.]+)?(\?[0-9a-z&=]+)?(#[0-9-a-z]+)?/i;
//中国邮政编码
const postalCode = /[1-9]\d{5}(?!\d)/;
//邮箱验证
const email = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;


export const useCheckEasyMobilePhone = value => easyMobilePhone.test(value);
export const CheckMobilePhone = value => mobilePhone.test(value);
export const useCheckTelephone = value => telephone.test(value);
export const useCheckIdCard = value => idCard.test(value);
export const useCheckIpV4 = value => ipV4.test(value);
export const useCheckHex = value => hex.test(value);
export const useCheckQQ = value => QQ.test(value);
export const useCheckWX = value => WX.test(value);
export const useCheckIncludeCN = value => includeCN.test(value);
export const useCheckOnlyCN = value => onlyCN.test(value);
export const useCheckURL = value => URL.test(value);
export const useCheckHTTP = value => HTTP.test(value);
export const useCheckHTTPS = value => HTTPS.test(value);
export const useCheckPostalCode = value => postalCode.test(value);
export const useCheckEmail = value => email.test(value);
