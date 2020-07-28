// const imgList = [
// {
// id:           1019,
// title:        'Tofino Surf and Hike',
// source:       'Lorem Picsum',
// fileName:     '1019-tofino.jpg',
// attribution:  {
//   source: 'Lorem Picsum',
//   credit: 'Patrick Fore',
//   url:  'https://picsum.photos/id/1019/200/300'
// }
//  },
//  {
//    id:           1065,
//    title:        'California Wine Tours',
//    source:       'Lorem Picsum',
//    fileName:     '1065-california.jpg',
//    attribution:  {
//      source: 'Lorem Picsum',
//      credit: 'Bertrand Zuchuat',
//      url:  'https://picsum.photos/id/1065/200/300'
//    }
//  },
//  {
//    id:           1051,
//    title:        'Secluded Lakefront Cabin',
//    source:       'Lorem Picsum',
//    fileName:     '1051-cabin.jpg',
//    attribution:  {
//      source: 'Lorem Picsum',
//      credit: 'Ales Krivec',
//      url:  'https://unsplash.com/photos/8wTPqxlnKM4'
//    }
//  },
//  {
//    id:           1049,
//    title:        'Northshore Backpacking',
//    source:       'Lorem Picsum',
//    fileName:     '1049-northshore.jpg',
//    attribution:  {
//      source: 'Lorem Picsum',
//      credit: 'Rosan Harmans',
//      url:  'https://unsplash.com/photos/8wTPqxlnKM4'
//    }
//  },
//  {
//    id:           1035,
//    title:        'Waterfall Lake Fly-In',
//    source:       'Lorem Picsum',
//    fileName:     '1035-waterfall.jpg',
//    attribution:  {
//      source: 'Lorem Picsum',
//      credit: 'Jared Erondu',
//      url:  'https://unsplash.com/photos/8wTPqxlnKM4'
//    }
//  },
//    {
//    id:           166,
//    title:        'Foothills Horseback Riding',
//    source:       'Lorem Picsum',
//    fileName:     '1280-foothills.jpg',
//    attribution:  {
//      source: 'Lorem Picsum',
//      credit: 'Romain Briaux',
//      url:  'https://picsum.photos/id/1019/200/300'
//    }
//  }
// ]; 

// But let's use our own JSON API:
// Since the execution of this `app.js` script will be long finished by the time the following `fetch()` call returns data, we need to put our loop inside the second .then(). Check out this CSS Tricks article for the details about what's going on here. 
// https://css-tricks.com/using-fetch/
fetch('http://localhost:3000/api/destination')
  .then(function(response) {
    return response.json();
  })
  .then(function(destinations) {

    const imgList = destinations;

    // Variable where we will store our img tags
    let imgTemplate = ''; 

    // Flex container for images
    const gallery = document.querySelector('.gallery'); 

    // Loop through items using forEach (available on every array)
    imgList.forEach(function(item){
      imgTemplate += 
        `<figure>
        <a href="${item.id}">
          <img src="https://picsum.photos/id/${item.id}/250" alt="${item.title}">
        </a>
        <figcaption>${item.title}</figcaption>
        </figure>`;
    });

    // Add HTML img string to gallery container
    gallery.innerHTML = imgTemplate;
});

