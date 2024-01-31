<?php

namespace App\Http\Controllers;

use App\Models\DecisionAudit;
use App\Providers\MultidomainServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\View;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $site = MultidomainServiceProvider::getSite();
        View::share('site', $site);
        Cookie::queue(Cookie::make('flow_id_internal', $site->flow_id, 60));
        $this->middleware('auth')->except('index', 'denied', 'processing', 'terms', 'privacy', 'ccpa',
            'econsent', 'credit_disclosure', 'redirect', 'reject', 'form', 'loan_form', 'reapply', 'unsubscribe',
            'faq', 'why_choose_us', 'how_it_works'
        );
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    /**
     * Show the application denied.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function denied()
    {
        return view('denied');
    }

    /**
     * Show the application processing.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function processing()
    {
        return view('processing');
    }


    /**
     * Show the application terms.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function terms()
    {
        return view('terms');
    }

    /**
     * Show the application privacy.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function privacy()
    {
        return view('privacy');
    }

    /**
     * Show the application ccpa.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function ccpa()
    {
        return view('ccpa');
    }

    /**
     * Show the application E-Consent.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function econsent()
    {
        return view('econsent');
    }

    /**
     * Show the application Credit Disclosure.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function credit_disclosure()
    {
        return view('credit_disclosure');
    }

    /**
     * Show the application Faq.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function faq()
    {
        return view('faq');
    }

    /**
     * Show the application Why choose us.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function why_choose_us()
    {
        return view('why_choose_us');
    }

    /**
     * Show the application How it works
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function how_it_works()
    {
        return view('how_it_works');
    }

    /**
     * Show the application form.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function form()
    {
        return view('forms.main');
    }

    /**
     * Show the application Reapply.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function reapply()
    {
        return view('forms.reapply');
    }

    /**
     * Show the application Unsubscribe.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function unsubscribe()
    {
        return view('forms.unsubscribe');
    }

    /**
     * Show the application redirect page.
     *
     * @return \Illuminate\Contracts\Support\Renderable | \Illuminate\Routing\Redirector
     */
    public function redirect(Request $request)
    {
        if (!$request->id) {
            return redirect('/');
        }
        $decisionAudit = DecisionAudit::where('hash_id', $request->id)->first();
        if (!$decisionAudit || !$decisionAudit->decision_redirect) {
            return redirect('/');
        }
        return view('redirect', [
            'decision_id' => $request->id,
            'url' => $decisionAudit->decision_redirect,
            'request_id_mark' => $request->request_id_mark,
        ]);
    }

    /**
     * Show the application redirect page.
     *
     * @return \Illuminate\Contracts\Support\Renderable | \Illuminate\Routing\Redirector
     */
    public function reject(Request $request)
    {
        return view('reject');
    }
}
