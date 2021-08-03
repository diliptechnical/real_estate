<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap" rel="stylesheet">
    <title>News</title>
    <script>
        var setting = {!! json_encode($setting) !!}
    </script>
    <link href="{{ asset(mix('front/news/css/app.css')) }}" rel="stylesheet">

</head>

<body>
    <div id="app"></div>
    <script type="text/javascript" src="{{ asset(mix('front/news/js/app.js')) }}"></script>
</body>

</html>
