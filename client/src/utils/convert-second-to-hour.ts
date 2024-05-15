const HOUR_IN_SECONDS = 60 * 60

export function convertSecondsToHours(seconds: number): string {
  const hours = Math.floor(seconds / HOUR_IN_SECONDS)
  const minutes = Math.floor((seconds - hours * HOUR_IN_SECONDS) / 60)
  // const seconds = seconds - hours * HOUR_IN_SECONDS - minutes * 60

  const padMinutes = String(minutes).padStart(2, '0')

  if (hours === 0) {
    return `${padMinutes}min`
  } else if (hours > 0 && minutes === 0) {
    return `${hours}h`
  } else {
    return `${hours}h  ${padMinutes}min`
  }
}
