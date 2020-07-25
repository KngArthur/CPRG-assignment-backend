const imgList = [
  {
    id:           1019,
    title:        'Tofino Surf and Hike',
    source:       'Lorem Picsum',
    fileName:     '1019-tofino.jpg',
    attribution:  {
      source: 'Lorem Picsum',
      credit: 'Patrick Fore',
      url:  'https://picsum.photos/id/237/200/300'
    }
  },
  {
    id:           1065,
    title:        'California Wine Tours',
    source:       'Lorem Picsum',
    fileName:     '1065-california.jpg',
    attribution:  {
      source: 'Lorem Picsum',
      credit: 'Bertrand Zuchuat',
      url:  'https://unsplash.com/photos/8wTPqxlnKM4'
    }
  },
  {
    id:           1051,
    title:        'Secluded Lakefront Cabin',
    source:       'Lorem Picsum',
    fileName:     '1051-cabin.jpg',
    attribution:  {
      source: 'Lorem Picsum',
      credit: 'Ales Krivec',
      url:  'https://unsplash.com/photos/8wTPqxlnKM4'
    }
  },
  {
    id:           1049,
    title:        'Northshore Backpacking',
    source:       'Lorem Picsum',
    fileName:     '1049-northshore.jpg',
    attribution:  {
      source: 'Lorem Picsum',
      credit: 'Rosan Harmans',
      url:  'https://unsplash.com/photos/8wTPqxlnKM4'
    }
  },
  {
    id:           1035,
    title:        'Waterfall Lake FlyvIn',
    source:       'Lorem Picsum',
    fileName:     '1035-waterfall.jpg',
    attribution:  {
      source: 'Lorem Picsum',
      credit: 'Jared Erondu',
      url:  'https://unsplash.com/photos/8wTPqxlnKM4'
    }
  },
]; 

// Variable where we will store our img tags
let imgTemplate = ''; 

// Flex container for images
const gallery = document.querySelector('.gallery'); 

// Loop through items using forEach (available on every array)
imgList.forEach(function(item){
  console.log(item);
  // Our output variable (imgTemplate) contains a gradually growing list of animal images using the addition assignment operator
  imgTemplate +=
    `<figure>
    <a href="${item.title.toLowerCase()}.html">
      <img src="https://picsum.photos/id/${item.id}/250" alt="${item.title}">
    <a/>
    <figcaption>${item.title}</figcaption>
    </figure>`;
});

// Add HTML img string to gallery container
gallery.innerHTML = imgTemplate;

