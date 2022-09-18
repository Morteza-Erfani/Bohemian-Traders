function capital(string) {
  const words = string.split(" ");
  let title = [];
  for (let word of words) {
    title += " " + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  return title;
}

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export { capital, validateEmail };
