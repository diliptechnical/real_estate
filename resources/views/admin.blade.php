<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap" rel="stylesheet">
    <title>MyAdmin</title>
    <script>
        var setting = {!! json_encode($setting) !!}
    </script>
    <link href="{{ asset(mix('admin/css/app.css')) }}" rel="stylesheet">

</head>

<body class="bg-soft">
    <div id="app"></div>
    <script type="text/javascript" src="{{ asset(mix('admin/js/app.js')) }}"></script>
</body>

</html>
