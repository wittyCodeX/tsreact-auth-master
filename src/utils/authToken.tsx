export default {
  set: (key: string, data: any): void => {
    localStorage.setItem(key, JSON.stringify(data));
  },
  get: (key: string): any => {
    return JSON.parse(String(localStorage.getItem(key)));
  },
  remove: (key: string): void => {
    localStorage.removeItem(key);
  },
  clear: (): void => {
    localStorage.clear();
  },
};
