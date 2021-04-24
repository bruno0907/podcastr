export const convertDurationToTimeString = (duration: number): string => 
  new Date(duration * 1000).toISOString().substr(11, 8)