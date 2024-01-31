@extends('layouts.app')

@section('scripts')
    @vite('themes/lendingnext/js/main_form.js', 'lendingnext')
@endsection

@section('content')
    <MainForm></MainForm>
@endsection
