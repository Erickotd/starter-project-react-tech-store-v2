// helper functions
// import url from './URL';

// flatten
export function flattenProducts(data) {
  return data.map((item) => {
    //claudinary
    //here in stead of putting null i can pass a default image
    let image = (item.image && item.image.url) || null;
    //local setup no deployment
    // let image = `${url}${item.image.url}`;
    return { ...item, image };
  });
}

export function featuredProducts(data) {
  return data.filter((item) => {
    return item.featured === true;
  });
}
