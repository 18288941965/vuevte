
// 获取模块图标
export const getModuleIconUrl = (fileName: string) => {
  return new URL(`../assets/image/moduleicon/${fileName}`, import.meta.url).href
}