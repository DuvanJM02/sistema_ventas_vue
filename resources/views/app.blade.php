<!DOCTYPE html>
<html lang="es">

<head>
    @include('components.head')
</head>

<body>
    <div id="aplicacion">

    </div>

    @include('components.modal')
    @include('components.footer')

    {{-- <script>
        function eliminar(index){
            var subtotal = document.getElementsByClassName("fila"+index)[5].innerText
            var total = document.getElementById('total').innerText

            total = subtotal - total

            document.getElementById('total').innerText = total

            x = document.getElementsByClassName("fila" + index);
            for(i = 0; i < x.length; i++){
                x[i].innerHTML = ""
            }
        }
    </script> --}}

    {{-- @guest
        {{ Auth::user()->name }}
    @else
        <script>
            window.Laravel = @php echo json_encode([ 'authUser' => Auth::user() ]);   @endphp;
            console.log(window.Laravel);
        </script>
    @endguest --}}
</body>

</html>
