const CreatePromise = (link) => {
  let promise = new Promise(async (resolve, reject) => {
    let response = null;
    try {
      response = await fetch(link);
    } catch (err) {
      console.log(err);
    }
    const blob = await response.blob();
    let dataType = link.split(".")[3];
    if (dataType.length > 4) {
      dataType = dataType.split("?")[0];
    }
    resolve({ data: blob, type: dataType });
  });

  return promise;
};

export default CreatePromise;
