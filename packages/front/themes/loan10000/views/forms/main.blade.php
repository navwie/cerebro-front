@extends('layouts.app')

@section('scripts')
    @vite('themes/loan10000/js/main_form.js', 'loan10000')
@endsection

@section('content')
    <MainForm></MainForm>
@endsection
