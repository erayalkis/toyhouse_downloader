import CreatePromise from "./CreatePromise";

const Promiseify = async (response) => {
  let promise = new Promise((resolve) => {
    const promises = [];
    console.log(response.gallery.length);
    response.gallery.forEach((link) => {
      console.log("Creating promise!!!!!");
      const linkPromise = CreatePromise(link);
      if (linkPromise !== null) promises.push(linkPromise);
    });

    resolve(promises);
  });

  return promise;
};

export default Promiseify;
