@extends('layouts.app')

@section('scripts')
    @vite('themes/lendingsource/js/reapply.js', 'lendingsource')
@endsection

@section('content')
    <ReapplyForm></ReapplyForm>
@endsection
