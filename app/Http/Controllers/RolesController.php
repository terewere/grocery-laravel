<?php

namespace App\Http\Controllers;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;
use App\Http\Controllers\Controller;
use App\Http\Resources\RoleCollection;
use App\Http\Resources\PermissionCollection;
class RolesController extends Controller
{
 
    public function index()
    {
        // if (! Gate::allows('manage_users')) {
        //     return abort(401);
        // }

        $roles = Role::where('name', '!=', 'Super Admin')->with('permissions')->get();

        $roles = new RoleCollection($roles);

        $permissions = Permission::where('name', '!=', 'do_all')->get();
        $permissions = new PermissionCollection($permissions);

        return  compact('roles', 'permissions');
    }

    public function createAgenciesPermissions()
    {
        // if (! Gate::allows('manage_users')) {
        //     return abort(401);
        // }

        $role = Role::where('name', 'Create Agency Permissions')->with('permissions')->first();

        if (!$role) {
           return [];
        }

        $permissions = new PermissionCollection($role->permissions);

        return  $permissions;
    }

    /**
     * Show the form for creating new Role.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // if (! Gate::allows('manage_users')) {
        //     return abort(401);
        // }
        $permissions = Permission::where('name', '!=', 'do_all')->pluck('name', 'name');

        return view('roles.create', compact('permissions'));
    }

 
    public function store(Request $request)
    {
        // if (! Gate::allows('manage_users')) {
        //     return abort(401);
        // }
 
        $role = Role::create(['name' =>$request->input('name')]);
        $permissions = $request->input('permissions') ? $request->input('permissions') : [];
        $role->givePermissionTo($permissions);

        return $this->success('Role created successfully');
    }


  
    public function update(Role $role)
    {


        $role->update(['name' =>request('name')]);
        $permissions = request('permissions') ? request('permissions') : [];
        
        $role->syncPermissions($permissions);


        // if (! Gate::allows('manage_users')) {
        //     return abort(401);
        // }
        // $role = Role::findOrFail($id);
        // $role->update($request->except('permission'));
        // $permissions = $request->input('permission') ? $request->input('permission') : [];
        // $role->syncPermissions($permissions);

        return $this->success('Permissions synced successfully');
    }


    public function destroy(Request $request, $id)
    {

// if (! Gate::allows('delete_agencies')) {
        //     return abort(401);
        // }

        Role::destroy($id);

        return $this->success('Role deleted successfully');

    }

  


}
