export function groupArray<T>(data: Array<T>, chunk: number): Array<T[]> {
  const group = new Array<T[]>();

  for (let i = 0, j = 0; i < data.length; i++) {
    if (i >= chunk && i % chunk === 0) {
      j++;
    }
    group[j] = group[j] || [];
    group[j].push(data[i]);
  }

  return group;
}
