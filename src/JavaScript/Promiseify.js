import CreatePromise from "./CreatePromise";

const Promiseify = async (response) => {
  let promise = new Promise((resolve) => {
    const promises = [];
    response.gallery.forEach((link) => {
      const linkPromise = CreatePromise(link);
      if (linkPromise !== null) promises.push(linkPromise);
    });

    resolve(promises);
  });

  return promise;
};

export default Promiseify;
