export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const totalSum = (arr: number[]) => arr.reduce((a, b) => a + b, 0);