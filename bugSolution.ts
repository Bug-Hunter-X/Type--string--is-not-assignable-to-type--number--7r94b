function combine(a: number, b: number): number {
  return a + b;
}

function combineString(a: number, b: string): string {
  return a + b; //this is now valid, but may not be numerically correct
}

function combineSafe(a: number, b: any): number | string {
  if (typeof b === 'number') {
    return a + b;
  } else if (typeof b === 'string') {
    return a.toString() + b;
  } else {
    return 'Error: Invalid input';
  }
} 