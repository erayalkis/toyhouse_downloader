const CreatePromise = (imgData) => {
  let promise = new Promise(async (resolve, reject) => {
    let response = null;
    try {
      response = await fetch(imgData.link);
    } catch (err) {
      console.log(err);
      resolve(null);
      return;
    }

    const blob = await response.blob();
    let dataType = imgData.link.split(".")[3];
    if (dataType.length > 4) {
      dataType = dataType.split("?")[0];
    }
    resolve({ data: blob, type: dataType, artist: imgData.artist });
  });

  return promise;
};

export default CreatePromise;
