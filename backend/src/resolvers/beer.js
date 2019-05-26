import fetch from 'node-fetch';

export default {
    Query: {
        getBeer: async (_, {id}) => {
            const response = await fetch(`https://sandbox-api.brewerydb.com/v2/beer/${id}?&key=c3422f64c2c852a1c1cb211ca5bcb65d`)
            const data = await response.json()
            console.log(data.data)
            return data.data
        },
        getRandomBeer: async () => {
            const response = await fetch(`https://sandbox-api.brewerydb.com/v2/beer/random?&key=c3422f64c2c852a1c1cb211ca5bcb65d`)
            const data = await response.json()
            console.log(data.data)
            return data.data
        }
    },
  };





