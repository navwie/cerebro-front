@extends('layouts.app')

@section('scripts')
    @vite('themes/lendingnext/js/redirect.js', 'lendingnext')
@endsection

@section('content')
    <Redirect data-url="{{ $url }}" data-decision-id="{{ $decision_id }}" data-request-id-mark="{{ $request_id_mark }}"></Redirect>
@endsection
