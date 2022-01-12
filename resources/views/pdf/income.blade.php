<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ time() . '-ingreso-' . $income->n_comprobante }}</title>
    <style>
        body{
            font-family: Arial, Helvetica, sans-serif;
        }

        .table{
            width: 100%;
            margin-bottom: 1rem;
            color: #212529;
            vertical-align: top;
            border-color: #dee2e6;
            caption-side: bottom;
            border-collapse: collapse;
        }

        .td{
            padding: 10px 10px;
        }

        .table-striped{
            background: rgba(0, 0, 0, 0.05);
        }

        .card{
            position: relative;
            display: flex;
            flex-direction: column;
            min-width: 0;
            word-wrap: break-word;
            background-color: #fff;
            background-clip: border-box;
            border: 1px solid rgba(0,0,0,.125);
            border-radius: .25rem;
        }

        .card-header{
            padding: .5rem 1rem;
            margin-bottom: 0;
            background-color: rgba(0,0,0,.03);
            border-bottom: 1px solid rgba(0,0,0,.125);
        }

        .card-body{
            flex: 1 1 auto;
            padding: 1rem 1rem;
        }
    </style>
</head>

<body>
    <h1>Ingreso N° {{ $income->n_comprobante }}</h1>

    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-3">
                                <strong>Id:</strong>
                                <p>{{ $income->id }}</p>
                            </div>
                            <div class="col-lg-3">
                                <strong>Fecha:</strong>
                                <p>{{ $income->date }}</p>
                            </div>
                            <div class="col-lg-3">
                                <strong>Nombre del proveedor:</strong>
                                <p>{{ $income->name }}</p>
                            </div>
                            <div class="col-lg-3">
                                <strong>Impuesto:</strong>
                                <p>{{ $income->tax }}%</p>
                            </div>
                            <div class="col-lg-4">
                                <strong>Tipo de comprobante:</strong>
                                <p>{{ $income->t_comprobante }}</p>
                            </div>
                            <div class="col-lg-4">
                                <strong>Serie:</strong>
                                <p>{{ $income->s_comprobante }}</p>
                            </div>
                            <div class="col-lg-4">
                                <strong>Número de comprobante:</strong>
                                <p>{{ $income->n_comprobante }}</p>
                            </div>
                            <div class="form-group mt-3">
                            </div>
                            <div class="form-group">
                                <table id="details"
                                    class="table table-striped table-bordered table-condensed table-hover">
                                    <thead style="background: cadetblue;">
                                        <tr>
                                            <th>Producto</th>
                                            <th>Cantidad <abbr title="Unidades">(Unds)</abbr></th>
                                            <th>Precio compra <abbr title="Peso Colombiano">(COP)</abbr></th>
                                            <th>Precio venta <abbr title="Peso Colombiano">(COP)</abbr></th>
                                            <th>Subtotal <abbr title="Peso Colombiano">(COP)</abbr></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($detalles as $d)
                                            <tr>
                                                <td>{{ $d->product }}</td>
                                                <td>{{ $d->quantity }}</td>
                                                <td>${{ $d->purchase_price }}</td>
                                                <td>${{ $d->sale_price }}</td>
                                                <td>${{ $d->quantity * $d->purchase_price }}</td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                    <tfoot style="border: 1px solid cadetblue">
                                        <th><strong>TOTAL</strong></th>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th>
                                            @php
                                                $total = 0;
                                                foreach ($detalles as $d) {
                                                    $total += $d->quantity * $d->purchase_price;
                                                }
                                            @endphp
                                            
                                            <h4>$
                                                <span>{{ $total }}</span>
                                                <abbr title="Peso Colombiano">COP</abbr>
                                            </h4>
                                        </th>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
