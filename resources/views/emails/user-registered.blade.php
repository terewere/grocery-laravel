@component('mail::message')
Dear <strong>{{$user['name']}}</strong>,

<p>Thank you for registering with ZongoCho, Zongo's finest food service.</p>
<p>Your email is <strong>{{$user['email']}}</strong>,</p>

Thank You!<br>
{{ config('app.name') }}
@endcomponent
