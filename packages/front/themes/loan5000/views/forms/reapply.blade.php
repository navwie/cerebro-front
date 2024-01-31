@extends('layouts.app')

@section('scripts')
    @vite('themes/loan5000/js/reapply.js', 'loan5000')
@endsection

@section('content')
    @if (Cookie::get('flow_id_internal') == 3)
        <ReapplyForm2 data-hide-header="true"></ReapplyForm2>
    @else
        <ReapplyForm data-hide-header="true"></ReapplyForm>
    @endif
@endsection
