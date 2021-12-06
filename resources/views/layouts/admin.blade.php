<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>ADVentas | www.incanatoit.com</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.5 -->
    <link rel="stylesheet" href="{{ asset('template/css/bootstrap.min.css') }}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ asset('template/css/font-awesome.css') }}">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{ asset('template/css/AdminLTE.min.css') }}">
    <!-- AdminLTE Skins. Choose a skin from the css/skins
         folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="{{ asset('template/css/_all-skins.min.css') }}">
    <link rel="apple-touch-icon" href="{{ asset('template/img/apple-touch-icon.png') }}">
    <link rel="shortcut icon" href="{{ asset('template/img/favicon.ico') }}">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('css/main.css') }}">
</head>

<body class="hold-transition skin-blue sidebar-mini">

    <div class="wrapper">

        <header class="main-header">

            <a href="index2.html" class="logo">
                <span class="logo-mini"><b>AD</b>V</span>
                <span class="logo-lg"><b>ADVentas</b></span>
            </a>
            <nav class="navbar navbar-static-top" role="navigation">
                <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                    <span class="sr-only">Navegación</span>
                </a>
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <li class="dropdown user user-menu">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <small class="bg-red">Online</small>
                                <span class="hidden-xs">Juan Carlos Arcila Díaz</span>
                            </a>
                            <ul class="dropdown-menu">
                                <li class="user-header">
                                    <p>
                                        www.incanatoit.com - Desarrollando Software
                                        <small>www.youtube.com/jcarlosad7</small>
                                    </p>
                                </li>
                                <li class="user-footer">

                                    <div class="pull-right">
                                        <a href="#" class="btn btn-default btn-flat">Cerrar</a>
                                    </div>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>

            </nav>
        </header>

        <div id="app">
        </div>
        
    </div>

    </section><!-- /.content -->
    </div><!-- /.content-wrapper -->
    <!--Fin-Contenido-->
    <footer class="main-footer">
        <div class="pull-right hidden-xs">
            <b>Version</b> 2.3.0
        </div>
        <strong>Copyright &copy; 2015-2020 <a href="www.incanatoit.com">IncanatoIT</a>.</strong> All rights reserved.
    </footer>

    <script src="{{ mix('js/app.js') }}"></script>
    <script src="{{ asset('js/main.js') }}"></script>

    <!-- jQuery 2.1.4 -->
    <script src="{{ asset('template/js/jQuery-2.1.4.min.js') }}"></script>
    <!-- Bootstrap 3.3.5 -->
    <script src="{{ asset('template/js/bootstrap.min.js') }}"></script>
    <!-- AdminLTE App -->
    <script src="{{ asset('template/js/app.min.js') }}"></script>

</body>

</html>
