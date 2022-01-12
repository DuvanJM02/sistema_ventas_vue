<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<meta name="csrf" content="{{ csrf_token() }}">
<meta name="csrf-token" content="{{ csrf_token() }}">
<meta name="incomestore" content="{{ route('income.store') }}">
<meta name="incomeprint" content="{{ route('income.print') }}">
<meta name="salestore" content="{{ route('sale.store') }}">
<meta name="saleprint" content="{{ route('sale.print') }}">
<title>Sistema de Ventas VUE</title>
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
<link rel="stylesheet" href="{{ asset('css/fancybox.css') }}">
<link rel="stylesheet" href="{{ mix('css/app.css') }}">
<link rel="stylesheet" href="{{ asset('css/main.css') }}">

<!-- Recaptcha -->
<script type="text/javascript">
    function callbackThen(response){
    // read Promise object
    response.json().then(function(data){
    });
    }
    function callbackCatch(error){
    console.error('Error:', error)
    }
</script>

{!! htmlScriptTagJsApi([
'callback_then' => 'callbackThen',
'callback_catch' => 'callbackCatch'
]) !!}
<!-- Recaptcha -->