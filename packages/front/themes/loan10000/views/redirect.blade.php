@extends('layouts.app')

@section('scripts')
    @vite('themes/loan10000/js/redirect.js', 'loan10000')
@endsection

@section('content')
    <Redirect data-url="{{ $url }}" data-decision-id="{{ $decision_id }}" data-request-id-mark="{{ $request_id_mark }}"></Redirect>
@endsection
