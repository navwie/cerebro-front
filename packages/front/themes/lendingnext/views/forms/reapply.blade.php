@extends('layouts.app')

@section('scripts')
    @vite('themes/lendingnext/js/reapply.js', 'lendingnext')
@endsection

@section('content')
    <ReapplyForm style="font-family: 'Poppins', sans-serif; font-size: 16px; color: #707070;"></ReapplyForm>
@endsection
