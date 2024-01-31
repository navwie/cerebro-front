@extends('layouts.app')

@section('scripts')
    @vite('themes/lendingsource/js/redirect.js', 'lendingsource')
@endsection

@section('content')
    <Redirect data-url="{{ $url }}" data-decision-id="{{ $decision_id }}" data-request-id-mark="{{ $request_id_mark }}"></Redirect>
@endsection
