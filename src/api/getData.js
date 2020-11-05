const getData = async (city) => {
  try {
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${city}`
    );
    const data = await res.json();
    return await getById(data[0].woeid);
  } catch (error) {

  }
};
const getDataGeo = async (coord) => {
  const [latt, long]=coord
  try {
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${latt},${long}`
    );
    const data = await res.json();
    return await getById(data[0].woeid);
  } catch (error) {

  }
};
// 766273
const getById = async (id) => {
  try {
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}`
    );
    const data = await res.json();
 
    return data;
  } catch (error) {
 
  }
};

export {getData, getDataGeo};
