const apiKey = "552ad1d70aa376a7e83f42fbfbac9283";

    const apiUrl = "https://api.adbutler.com/v2/ad-items";

    const options = {

        method: 'GET',

        headers: {

            'Authorization': `Basic ${apiKey}`

        }

    };

    fetch(apiUrl, options)

        .then(response => response.json())

        .then(data => console.log(data))

        .catch(error => console.error('Error:', error));

        