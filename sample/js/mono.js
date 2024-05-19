const checkoutBtnId = 'comp-lvgy43u7';
const apiToken = 'mPnuOYfOfRnFp9U67jCWxaw';
const url = 'https://api.monobank.ua/api/merchant/invoice/create';
const redirectUrl = 'https://pepamema.baby/';

window.addEventListener('load', function() {
    const button = document.getElementById(checkoutBtnId);
  
    button.onclick = function() {
      const data = {
        amount: 1000,
        redirectUrl: redirectUrl,
      };
  
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Token': apiToken
        },
        body: JSON.stringify(data)
      };
  
      fetch(url, options)
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log('Success:', data);
          if (data.pageUrl) {
            window.location.href = data.pageUrl;
          }
        });
    };
});
  