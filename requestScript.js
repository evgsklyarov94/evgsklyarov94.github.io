window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const callback_url = urlParams.get('callback_url');
  console.log('callback_url', callback_url)
  
  fetch(
    `https://dev.cloudpano.com/api/integrations/v1/auth?callback_url=${callback_url}`,
    {
      headers: {
        'x-api-key': 'test-api-key',
      },
      redirect: 'follow',
    },
  )
    .then(r => {
      console.log('r', r)
      // window.location = r.url;

      // window.location.replace("https://yourdomain.com/success");
    })
}