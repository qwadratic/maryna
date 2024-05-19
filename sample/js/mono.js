const checkoutBtnId = 'comp-lvgy43u7';
const testBtnId = 'comp-lvgy43u6';
const apiToken = 'mPnuOYfOfRnFp9U67jCWxaw';
const url = 'https://api.monobank.ua/api/merchant/invoice/create';
const redirectUrl = 'https://t.me/+hcWHak-AgwE1NWQy';

window.addEventListener('load', function() {
    const button1 = document.getElementById(checkoutBtnId);
    const button2 = document.getElementById(testBtnId);

    button1.onclick = function() {
      const data = {
        amount: 44900,
        redirectUrl: redirectUrl,
        merchantPaymInfo: {
            destination: "За iнформацiйнi послуги",
            comment: "11111",
            reference: "222222"
        }
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

    button2.onclick = function() {
        const data = {
          amount: 10000000,
          redirectUrl: redirectUrl,
          merchantPaymInfo: {
              destination: "За iнформацiйнi послуги",
              comment: "33333",
              reference: "44444"
          }
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
  