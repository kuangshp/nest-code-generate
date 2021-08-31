/**
 * 下划线转驼峰命名
 * @param checkoutStr
 * @returns
 */
export const underlineToHump = (fieldName: string): string =>
  fieldName
    .replace(/_(\w)/g, " $1")
    .replace(/( |^)[a-z]/g, (l: string) => l.toUpperCase());
