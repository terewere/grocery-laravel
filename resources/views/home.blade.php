<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name') }}</title>

    
 <!-- Styles -->
 <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    <link rel="manifest" href="{{url('/manifest.json')}}">

</head>
  <body>
  <div id="app"> </div>
  </body>
    <!-- Scripts -->

    <script src="{{ mix('js/app.js') }}" ></script>
</html>