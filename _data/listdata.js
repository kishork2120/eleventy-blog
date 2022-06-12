const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async ()=>{
    const url = "https://fakestoreapi.com/products";

    const listResponse = await EleventyFetch(url, {
      duration: "1d",
      type: "json"
    });
    return {
      data: listResponse,
      keys: Object.keys(listResponse[0]),
      count: listResponse.length
    };
}
