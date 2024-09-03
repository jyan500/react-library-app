/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('libraries').del()
  return await knex('libraries').insert([
    {
      id: 1, 
      name: 'San Mateo', 
      address: "55 West 3rd Avenue", 
      city: "San Mateo", 
      state: "CA", 
      zipcode: "94402", 
      image_url: "https://climaterwc.com/live/wp-content/uploads/2021/02/sanmateopubliclibrary.jpg"
    },
    {
      id: 2, 
      name: 'East Palo Alto', 
      address: "2415 University Avenue", 
      city: "San Mateo", 
      state: "CA", 
      zipcode: "94303", 
      image_url: "https://smcl.bibliocommons.com/events/uploads/images/full/f3497a4e4578fc49e8ac983d4bbe2d37/east-palo-alto.jpg"
    },
    {
      id: 3, 
      name: 'Foster City', 
      address: "1000 East Hillsdale Boulevard", 
      city: "Foster City", 
      state: "CA", 
      zipcode: "94404", 
      image_url: "https://smcl.bibliocommons.com/events/uploads/imag…/26254f86bb755c5a1b8330f4371ed001/foster-city.jpg"},
    {
      id: 4, 
      name: 'Belmont', 
      address: "1110 Alameda de las Pulgas", 
      city: "Belmont", 
      state: "CA", 
      zipcode: "94002", 
      image_url: "https://smcl.bibliocommons.com/events/uploads/images/full/28949fec73708107118f610ad55841d2/belmont.jpg"},
    {
      id: 5, 
      name: 'San Carlos', 
      address: "610 Elm Street", 
      city: "San Carlos", 
      state: "CA", 
      zipcode: "94070", 
      image_url: "https://smcl.bibliocommons.com/events/uploads/images/full/4975872387ff9ac602f5662f7132110e/san-carlos-library.jpg"
    },
    {
      id: 6, 
      name: 'Woodside', 
      address: "3140 Woodside Road", 
      city: "Woodside", 
      state: "CA", 
      zipcode: "94062", 
      image_url: "https://smcl.bibliocommons.com/events/uploads/images/full/e51c60aefe211791bcc403cb485a5d27/woodside.jpg"
    },
    {
      id: 7, 
      name: 'Atherton', 
      address: "2 Dinkelspiel Station Lane", 
      city: "Atherton", 
      state: "CA", 
      zipcode: "94027", 
      image_url: "https://smcl.bibliocommons.com/events/uploads/images/full/b0cdc23124de5cdf85053a5a53651ce1/NewAthertonLibrary.png"},
    {
      id: 8, 
      name: 'Mitchell Park', 
      address: "3700 Middlefield Rd", 
      city: "Palo Alto", 
      state: "CA", 
      zipcode: "94303", 
      image_url: "https://paloalto.bibliocommons.com/events/uploads/images/full/0dd1062e616e30c321d9dc7a561c5f50/20141018-MitchellPark-Twilight.jpg"
    },
    {
      id: 9, 
      name: 'North Fair Oaks', 
      address: "2510 Middlefield Road", 
      city: "Redwood City", 
      state: "CA", 
      zipcode: "94063", 
      image_url: "https://smcl.bibliocommons.com/events/uploads/images/full/f5ac29a915125de43b2e53e261eb5e73/North%20Fair%20Oaks%20-%20website.jpg"
    },
    {
      id: 10, 
      name: 'Brisbane', 
      address: "163 Visitacion Avenue", 
      city: "Brisbane", 
      state: "CA",  
      zipcode: "94005", 
      image_url: "https://smcl.bibliocommons.com/events/uploads/images/full/94490aa0a2cb1491a018d3e81a84d1c1/Brisbane.jpg"
    },
    {
      id: 11, 
      name: 'Millbrae', 
      address: "1 Library Avenue", 
      city: "Millbrae", 
      state: "CA",  
      zipcode: "94030", 
      image_url: "https://smcl.bibliocommons.com/events/uploads/images/full/5c5c9e417bbccebf12b0ed94930997b6/millbrae.jpg",
    },
    {
      id: 12, 
      name: 'Half Moon Bay', 
      address: "620 Correas Street", 
      city: "Half Moon Bay", 
      state: "CA",  
      zipcode: "94019", 
      image_url: "https://smcl.bibliocommons.com/events/uploads/images/full/62cbc92c2e5e3234e1de189fd57df7d3/Half-Moon-Bay.png"
    },
    {
      id: 13,
      name: "Pacifica Sanchez",
      address: "1111 Terra Nova Boulevard",
      city: "Pacifica",
      state: "CA",
      zipcode: "94044",
      image_url: "https://smcl.bibliocommons.com/events/uploads/images/full/12fb0a8ad8a03be1930f6f732fcef619/sanchez.jpg",
    },
    {
      id: 14, 
      name: "Pacifica Sharp Park",
      address: "104 Hilton Way",
      city: "Pacifica",
      state: "CA",
      zipcode: "94044",
      image_url: "https://smcl.bibliocommons.com/events/uploads/images/full/2a5de75470d19098aeab8208d7c07e87/sharp-park.jpg",
    },
    {
      id: 15,
      name: "Portola Valley",
      address: "765 Portola Road",
      city: "Portola Valley",
      state: "CA",
      zipcode: "94028",
      image_url: "https://smcl.bibliocommons.com/events/uploads/images/full/7ff427d718bc5052696748a871c57e3d/portola-valley.jpg"
    }

  ]);
};
