import fetch from 'node-fetch'
test('GET', async () => {
    const response = fetch('https://dummyjson.com/products')
    const data = await response.json();
    console.log(data)
   
});