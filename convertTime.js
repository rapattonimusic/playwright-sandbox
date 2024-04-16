const timestamp = new Date('2024-04-15T16:48:59.531Z');
const pstOffset = timestamp.getTimezoneOffset() + (7 * 60); // PST is UTC-7
const pstTimestamp = new Date(timestamp.getTime() - pstOffset * 60 * 1000);

console.log(pstTimestamp.toISOString());