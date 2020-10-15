<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];


    public function boot()
    {
        $this->registerPolicies();

        Gate::before(function ($user, $ability) {
            if ( $user->hasPermissionTo('do_all') ) {
               return true;
           }

       });

        Passport::routes();

        // Passport::tokensExpireIn(now()->addDays(15));
    
        // Passport::refreshTokensExpireIn(now()->addDays(30));
    
        // Passport::personalAccessTokensExpireIn(now()->addMonths(6));
    }
}
