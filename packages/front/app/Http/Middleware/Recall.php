<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Recall
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        if($response->getOriginalContent() == 'Not found'){
            return redirect('form');
        }

        $customerState = json_decode($response->getOriginalContent(),true);

        return redirect($customerState['form_name'])->cookie(
            'customerState', $response->getOriginalContent(), 60, null, null, false, false
        );

    }
}
