<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\User;
use \App\Device;



use App\Http\Resources\User as UserResource;
use App\Http\Resources\UserCollection;
use App\Http\Requests\UserRequest;


class UserController extends Controller
{
    protected $serverKey;
 
    public function __construct()
    {
        $this->serverKey = config('firebase.firebase_server_key');
    }

    public function index()
    {

        $users = User::where('id', '<>', auth()->user()->id)
        ->whereDoesntHave("permissions", function($q){ $q->where("name", "do_all"); })
        ->get();


        return response()->json(new UserCollection($users), 200);

    }


    public function getAuth()
    {
       return auth()->user();
    }


    public function saveToken ()
    {

        $deviceName = request('name');
        $deviceOS = request('os');
        $deviceAPI = request('api_level');
        $version = request('version');
        $gir_version = request('gir_version');
        $deviceId = request('app_device_id');
        $fcmToken = request('fcm_token');


        $device = Device::where('app_device_id', $deviceId)->first();


        if ($device === null ) {
            $device = Device::create([
            'app_device_id' => $deviceId,
            'name' => $deviceName,
            'os' => $deviceOS,
            'api_level' => $deviceAPI,
            'version' => $version,
            'gir_version' => $gir_version,
            ]);

        }

        $user = auth()->user();
        $userId = null;
        if ($user !== null) {
           $userId = $user->id;
        }

        $device->update([
            'user_id' => $userId,
            'fcm_token' => $fcmToken
        ]);
            return response()->json( 'Device updated');

       
    }

    public function sendPush (Request $request)
    {
        $tokenList = [
            'fSiWAAgvQJet0m88hNZc4x:APA91bEDDHfWiqXVAVMRJTwp6zeWexmZs_PVdppEtiOt2qRKdznFcR_uTHxtycbz206HCeosw6kbjdJxS61kHZwkwr7Bm8c6bXPP93X20i-LTa5wmcyE_Je7L9XIRRCxK6z61zxrzy3I',
            'c90ISBWaQdqge6RJ5G_DBi:APA91bEGsvVtT1lpruDeV1VGIrHlk91Hv6y7_Z10IqVOxwdvsS51PO-Lj9tsrlcHYSsOv5yaaSqbG2XWaiA9T0HNaIToh4ap0VO4JIrY4rRk4vuSASesiUTg7l42ivPoWF3Hd-axyQ6y'
        ];

        notification("title here", "body here", null, $tokenList);

        return response()->json('Notification sent!'); 
    }

    public function user()
    {
       return new UserResource( request()->user()->load('roles.permissions', 'permissions'));
    }

    public function store(UserRequest $request)
    {
        // if (! Gate::allows('manage_users')) {
        //     return abort(401);
        // }

        $data = array(
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        );

        $user = User::create($data);

        $role = $request->input('role') ? $request->input('role') : null;
        $user->assignRole($role);

        $user->status = 1;
        $user->save();

        return $this->success('User created successfully');

    }

    public function syncPermissions(User $user)
    {
        $user->syncPermissions(request('permissions'));

        return $this->success('Permissions synced successfully');

    }


    public function update(Request $request, $id)
    {
        // if (! Gate::allows('manage_users')) {
        //     return abort(401);
        // }


        $imgUrl = \request('imgUrl');
        $data = array(
            'name' => $request->name,
        );

        if (preg_match('/^data:image\/(\w+);base64,/', $imgUrl)) {
            $imageName = '/users/' . $request->number  . '.jpg';

            $imgUrlData = substr($imgUrl, strpos($imgUrl, ',') + 1);
            $imgUrlData = base64_decode($imgUrlData);
            \Storage::disk('public')->put($imageName, $imgUrlData);

            $data['img_url'] = $imageName;

        } 


        if ($request->password != '') {
            $data['password'] = bcrypt($request->password);
        }

        $user = User::findOrFail($id);
        $user->update($data);
        $role = $request->input('role') ? $request->input('role') : [];
        $user->syncRoles($role);

        return $this->success('User updated successfully');

    }

    public function destroy(Request $request, $id)
    {

// if (! Gate::allows('delete_agencies')) {
        //     return abort(401);
        // }

        User::destroy($id);

        return $this->success('User deleted successfully');

    }


   
}