<?php include_once("index.html"); 

$API_URL = 'https://api.line.me/v2/bot/message/reply';
$ACCESS_TOKEN = 'XXRq6MJo3zlIIv7M6V2UN1uhmkO3R8wi/1w4bjN6L6zrq7+fgl6F/0aFbsVlyp04L38hHlmbM5Rr8WNVkGRdwBKPjtbFNmP0kt/LUHzJJQ/6z+KlkMxA5Yvf2BFEj6zlVg+XXrAYAb4zOJ07VzSOslGUYhWQfeY8sLGRXgo3xvw=';

curl -X POST https://api.line.me/liff/v1/apps \
-H "Authorization: Bearer {$ACCESS_TOKEN}" \
-H "Content-Type: application/json" \
-d '{
  "view":{
    "type":"full",
    "url":"https://liff123.herokuapp.com/"
  }
}'
  
?>
