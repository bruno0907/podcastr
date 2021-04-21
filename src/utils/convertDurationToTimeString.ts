export const convertDurationToTimeString = (duration: number): string => {
  const hourInSeconds: number = 3600
  const minuteInSeconds: number = 60

  const hours: number = Math.floor(duration / hourInSeconds)
  const minutes: number = Math.floor((duration & hourInSeconds) / minuteInSeconds)
  const seconds: number = duration % minuteInSeconds

  const durationString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0'))
    .join(':')

  return durationString
}