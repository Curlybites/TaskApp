<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>React Laravel App</title>

    @vite('resources/css/app.css')
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>

<body>
    <div id="root"></div>
    @vite('resources/js/index.jsx')
</body>
    <script>
        window.env='{{ env('VITE_API_BASE_URL') }}'
    </script>
</html>
