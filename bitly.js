// bitly token
const bitlyToken = "";

// shorten profile image url
const shortUrl = async (url) => {
  const res = await fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + bitlyToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ long_url: url }),
  });

  const data = await res.json();

  const shortUrl = data.link;

  return shortUrl;
};

export default shortUrl;
