const TIMEOUT = 1000;

export default (data) => {
  const size = data.length;
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(`Successefully sent ${size} records`);
      } else {
        reject(new Error('Network error'));
      }
    }, TIMEOUT);
  });

  return promise;
};
