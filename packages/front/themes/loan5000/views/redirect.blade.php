@extends('layouts.app')

@section('scripts')
    @vite('themes/loan5000/js/redirect.js', 'loan5000')
@endsection

@section('content')
    <Redirect data-url="{{ $url }}" data-decision-id="{{ $decision_id }}" data-request-id-mark="{{ $request_id_mark }}"></Redirect>
@endsection
