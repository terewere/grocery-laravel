<?php

use App\User;
use App\Phone;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Psr7\Request;



 function notification($title, $body, $image, $tokenList)
{
    $fcmUrl = 'https://fcm.googleapis.com/fcm/send';

    $notification = [
        'title' => $title,
        'body' => $body,
        'image' => $image
    ];
    

    $fcmNotification = [
        'registration_ids' => $tokenList, 
        'data' => $notification,
    ];

    $headers = [
        'Authorization: key=' . config('firebase.firebase_server_key'),
        'Content-Type: application/json'
    ];


    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,$fcmUrl);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fcmNotification));
    $result = curl_exec($ch);
    curl_close($ch);

    return true;
}



function imageInteraction($image_name)
{
           $file = \Request::file($image_name);
                    $filename = strtolower(str_random(50) . '.' . $file->getClientOriginalExtension());
                    $file->move('images/speakers', $filename);

	  $imageInteraction = \Image::make(sprintf('images/speakers/%s', $filename));

    // $imageInteraction->encode('jpg', 85)->save('img/vehicle/mobile/'.$filename);


    $imageInteraction->fit(200, 200)->save('images/speakers/thumb/'.$filename);

        return $filename;
}



function sendTokenViaSMS(Phone $user) {
    // $client = new \GuzzleHttp\Client();
    // $base_uri = 'https://api.hubtel.com/v1/messages/send?';
    $from = 'girShop';
    $to = '233' . substr($user->number, 1);
    $message = 'Use the code ' . $user->verify_token . ' to verify your girShop account.';

    $params = [
        "From" => $from,
        "To" => $to,
        "Content" => $message,
        "ClientId" => 'dvwemglh',
        "ClientSecret" => 'qgfxqfua',
        "RegisteredDelivery" => 'true'
    ];

    $content = http_build_query($params);

    // try {

    //     $request = new Request('GET', $base_uri . $content);
    //     $response = $client->send($request, ['timeout' => 20]);

    //     return $response->getStatusCode();
    // } catch (RequestException $e) {
    //     return $response = $e->getCode();
    // }

    logger($content);
    
   return 1;

}

function getPhoneChannel($number){

    //        Globacom	(023)
//        MTN	(024), (054), (055) (059)
//        AirtelTigo	(027), (057), (026), (056)
//        Expresso	(028)
//        Vodafone	(020), (050)

    $channel = '';

    if (preg_match("/^0([2,5])([4,5,9])/", $number)) {

        $channel = "MTN";

    } else if (preg_match("/^0([2,5])([6,7])/", $number)) {

        $channel = "AIRTEL_TIGO";

    } else if (preg_match("/^0([2,5])([0])/", $number)) {

        $channel = "VODAFONE";

    } else if (preg_match("/^0([2])([3])/", $number)) {

        $channel = "GLO";

    } else if (preg_match("/^0([2])([8])/", $number)) {

        $channel = "EXPRESSO";

    }

    return $channel;

}


function random() {
   $rand = random_int(0, 9) . random_int(0, 9) . random_int(0, 9) . random_int(0, 9) . random_int(0, 9) . random_int(0, 9);
    
    return $rand;
}