// Get a string and make it capital
function capital(string) {
  const words = string.split(" ");
  let title = [];
  for (let word of words) {
    title += " " + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  return title;
}

// Validate email
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// Validate password
const validatePass = (pass) => {
  return String(pass).match(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{7,}$/);
};

// make slug from string (put hyphen instead of white spaces)
const slugMaker = (title) => {
  const splittedTitle = title.split(" ");
  return splittedTitle.join("-").toLowerCase();
};

// get a slug and put white space instead od hyphens
const slugToNormal = (title) => {
  const splittedTitle = title.split("-");
  return splittedTitle.join(" ").toUpperCase();
};

export { capital, validateEmail, slugMaker, slugToNormal, validatePass };
