function capital(string) {
  const words = string.split(' ')
  let title = []
  for (let word of words) {
    title += ' ' + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  return title
}

export { capital };
