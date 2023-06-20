export async function fetchCars() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9c954d1e3dmsh6c9ddb4fcb5ebc4p120d2bjsne74eef24fedb",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(
      "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
      options
    );
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
