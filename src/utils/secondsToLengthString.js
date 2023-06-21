export default function secondsToLengthString (totalSeconds) {
  const totalMinutes = Math.floor(totalSeconds / 60);

  const seconds = totalSeconds % 60;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours ? `${hours}ч` : ''} ${minutes ? `${minutes}м` : ''} ${!hours ? `${seconds}с` : ''}`;
}
