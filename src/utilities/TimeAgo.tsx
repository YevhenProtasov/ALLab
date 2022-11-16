const SingOrPlur = (interval: number, singular: string, plural: string) => {
  if (interval % 100 < 5 || interval % 100 > 20) {
    return `Posted ${Math.floor(interval)} ${singular} ago`;
  } else {
    return `Posted ${Math.floor(interval)} ${plural} ago`;
  }
};

const TimeAgo = (date: string | undefined) => {
  if (!date) {
    return "Undefined";
  }
  let timeStamp = new Date(date).getTime();

  let difference = new Date().getTime() - timeStamp;

  let seconds = Math.floor(difference / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return SingOrPlur(interval, "year", "years");
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return SingOrPlur(interval, "month", "months");
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return SingOrPlur(interval, "day", "days");
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return SingOrPlur(interval, "hour", "hours");
  }
  interval = seconds / 60;
  if (interval > 1) {
    return SingOrPlur(interval, "minute", "minutes");
  }
  return `Posted ${Math.floor(interval)} seconds ago`;
};

export default TimeAgo;
