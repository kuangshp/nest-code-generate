// 首字母大写
export const textCapitalize = (str: string) => (typeof str === 'string') ? str.slice(0, 1).toUpperCase() + str.slice(1) : str;

// 首字母小写
export const textLowercase = (str: string) => (typeof str === 'string') ? str.slice(0, 1).toLowerCase() + str.slice(1) : str;

// 下划线转小驼峰
export const underlineToHump = (name: string): string => {
  const BigHump = name.replace(/(^|_)(\w)/g, (...args) => args[2].toUpperCase());
  return textLowercase(BigHump);
}

export const isArray = (value: any): boolean => Array.isArray(value);




