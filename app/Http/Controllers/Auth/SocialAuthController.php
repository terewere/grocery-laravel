<?php

namespace App\Http\Controllers\Auth;

use App\Events\MessageSent;
use App\Http\Controllers\Controller;
use App\Message;
use App\Role;
use App\SocialAccount;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Laravel\Passport\Client;

class SocialAuthController extends Controller
{

	use IssueTokenTrait;

	private $client;

	public function __construct(){
		$this->client = Client::find(1);
	}

    public function socialAuth(Request $request){

    	$this->validate($request, [
    		'name' => 'required',
//    		'email' => 'nullable|email',
    		'provider' => 'required|in:facebook,twitter,google',
    		'provider_user_id' => 'required'
    	]);
		
//		\Log::info($request);




    	$socialAccount = SocialAccount::where('provider', $request->provider)->where('provider_user_id', $request->provider_user_id)->first();

    	if($socialAccount){
    		return $this->issueToken($request, 'social');
    	}

        //Since we can have nullable email, we need to make sure that user email is not null ;)
        //Thx to hdahon for the fix
    	$user = User::where('email', $request->email)
                    ->whereNotNull("email")
                    ->first();



    	if($user){
    		$this->addSocialAccountToUser($request, $user);
    	}else{
    		try{

    			$this->createUserAccount($request);

			}catch(\Exception $e){
    			return response("An Error Occured, please retry later", 422);
    		}
    	}

		return $this->issueToken($request, 'social');
    }

    /**
     * Associate social account to user
     * @param Request $request [description]
     * @param User    $user    [description]
     */
    private function addSocialAccountToUser(Request $request, User $user){

    	$this->validate($request, [
    		'provider' => ['required', Rule::unique('social_accounts')->where(function($query) use ($user) {
    			return $query->where('user_uuid', $user->uuid);
    		})],
    		'provider_user_id' => 'required'
    	]);


    	$user->socialAccounts()->create([
			'provider' => $request->provider,
    		'provider_user_id' => $request->provider_user_id
    	]);

    }

    /**
     * Create user accound and Social account
     * @param  Request $request [description]
     * @return [type]           [description]
     */
    private function createUserAccount(Request $request){

    	DB::transaction( function () use ($request){

    		$user = User::create([
    			'name' => $request->name,
    			'email' => $request->email
    		]);


			//get the admin user
			$admin = User::where('email', '0243270000')->first();


			$role = Role::where('slug', 'subscriber')->first();



			$user->roles()->sync($role->uuid);


			//get the admin user
//        $admin = User::where('email', '0243270000')->first();

			$editorRole = Role::where('slug', 'editor')->first();

			$editorRoleUUIDs = \DB::table('role_user')->where('role_uuid', $editorRole->uuid)
				->pluck('user_uuid')->toArray();



			// Merged admin role uuids with current user uuid
			$mergedUUIDs = array_merge($editorRoleUUIDs, [$user->uuid, $admin->uuid]);



			//TODO prevent duplicate room creation
			$room = $admin->room()->create(['name' => $user->name]);


			$room->users()->attach($mergedUUIDs);




			$message = Message::create([
				'user_uuid' => $admin->uuid,
				'room_uuid' =>    $room->uuid,
				'body' => "Hi, Please let us know if you have any questions or need help with anything"]);

			$message->load('user');



			broadcast(new MessageSent($message))->toOthers();








			$this->addSocialAccountToUser($request, $user);

    	});

    }
}
