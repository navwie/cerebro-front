@extends('layouts.app')

@section('scripts')
    @vite('themes/lendingsource/js/main_form.js', 'lendingsource')
@endsection

@section('content')
    <MainForm></MainForm>
@endsection
