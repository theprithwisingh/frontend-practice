export function groupBy<T>(items: T[], property: keyof T): Record<string, T[]> {
  return items.reduce((result, item) => {
    const key = String(item[property]);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
    return result;
  }, {} as Record<string, T[]>);
}

export function groupByPhaseAndStep(tasks: Task[]) {
  const byPhase = groupBy(tasks, 'Phase');
  const result: Record<string, Record<string, Task[]>> = {};

  for (const phase in byPhase) {
    result[phase] = groupBy(byPhase[phase], 'Step');
  }

  return result;
}
