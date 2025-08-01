export default function formatTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  return `${year}/${month.toString().padStart(2, "0")}/${day
    .toString()
    .padStart(2, "0")}`;
}
