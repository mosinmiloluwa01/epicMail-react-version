const camelSplit = string => string.replace(/[\w]([A-Z])/g, m => `${m[0]} ${m[1]}`).toLowerCase();

export default camelSplit;
