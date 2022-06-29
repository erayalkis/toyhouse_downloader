# README

# Project: ToyScrape

![Main page for application](https://user-images.githubusercontent.com/80722863/147422603-55c4f824-f499-45d9-b988-b4c07c62ccc7.png)

This app is a Gallery downloader for the character creating/sharing site [Toyhouse](https://toyhou.se). It uses a custom built [API](https://github.com/Blissblass/toyhouse_rails_api) to fetch and then download galleries for characters.

Check it out [here!](https://erayalkis.github.io/toyhouse_downloader)

# Usage

Using this downloader app is quite simple! You only need the link of the character that you wish to download the gallery of. After pasting it in the input, simply clicking "Download" will fetch all the images for the user and download them in a zip folder for you! The app also includes credits for each artists and important data for each image (tagged characters, description, etc.)!

## Sample Links:

Since [Toyhouse](https://toyhou.se) is currently an invite only app, sample links are necessary to test the app without an account. Here's a few:
* https://toyhou.se/37323.soggy-bread
* https://toyhou.se/5873555.deity
* https://toyhou.se/8583538.after-school-pride-flags
* https://toyhou.se/5450876.devil

# Challenges

The main challenge that stumped me for a while was the way [file-saver.js](https://github.com/eligrey/FileSaver.js/) worked. As it simply waits for the fetch call to end rather than the blob object, it would download the zip file before actually getting all of the images for the character. This was a perfect opportunity to practice using **Promises**.

I scrapped the original code, and rewrote it to use Promise.all():
```javascript
response.gallery.forEach(async (link, idx) => {
  // We iterate through the gallery 
   // and create a promise for each item
  
  const linkPromise = new Promise(async (resolve, reject) => { 
  
  let response = null;
  try {
    response = await fetch(link);
  } catch(err) {
    setHasError(err);
  }
  
  const blob = await response.blob();
  
  // Get datatype from image link
  let dataType = link.split(".")[3]
  if(dataType.length > 4) {
  
    // Sometimes, the link includes extra characters,
     // so we check to make sure we dont get the datatype wrong
    dataType = dataType.split("?")[0]
  }
    resolve({data: blob, type: dataType });
  });
  
// Push the promise to the promises array,
 // so that we can use it in Promise.all()
promises.push(linkPromise);
```
When all of the images resolve, we use Promise.all() to save the images to a zip folder.

```javascript
// If we're at the last item,

if(idx === response.gallery.length - 1 ) {
  // Set a loading indicator,
  props.setLoading("Saving files...")
  // And call Promise.all()
  Promise.all(promises)
    .then(data => {
      // And we save each file to a zip
      data.forEach((blob, idx) => zip.file(`${idx}.${blob.type}`, blob.data))
    })
    .then(data => {
      props.setLoading(null);
      
      // And we finally generate our zip and download it.
      zip.generateAsync({type:"blob"})
        .then(content => {
          setQueryStr("");
          saveAs(content, `${response.name}-gallery.zip`)
      })
   })
 }
```

# Screenshots

![Error handling](https://user-images.githubusercontent.com/80722863/147423073-53f92bae-cfd4-415a-8c7c-3e0a57b7df0a.png)

![Fetching gallery](https://user-images.githubusercontent.com/80722863/147423079-646d4de0-631d-48f4-9ca1-1d0a8939f72d.png)

![Saving files](https://user-images.githubusercontent.com/80722863/147423092-ef6a9827-118c-475c-ab47-0f5b67ab0299.png)


## Technologies used

This app is written in React and plain Javascript for the fetch code and uses Bootstrap for styling. 
To save the files to memory, I used [file-saver.js](https://github.com/eligrey/FileSaver.js/) and [JSZip](https://stuk.github.io/jszip/) to zip everything up and download it as a zip file.
[My own Toyhouse API](https://github.com/Blissblass/toyhouse_rails_api) was used to gather all the necessary data for the characters.
