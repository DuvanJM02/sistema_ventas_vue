<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class IncomeFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            't_comprobante' => 'required',
            's_comprobante' => 'required',
            'n_comprobante' => 'required',
            'date' => 'required',
            'tax' => 'required',
            'status' => 'required',
            'user_id' => 'required',
        ];
    }
}
