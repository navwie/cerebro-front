@extends('layouts.app')

@section('scripts')
    @vite('themes/loan10000/js/reapply.js', 'loan10000')
@endsection

@section('content')
    <ReapplyForm style="font-family: 'Poppins', sans-serif; font-size: 16px; color: #707070;" data-hide-specialist="true" data-modal-window="true"></ReapplyForm>
@endsection
