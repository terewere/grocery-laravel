<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;


class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Permission::create(['name' => 'do_all' ]);
        Permission::create(['name' => 'create_global' ]);
        Permission::create(['name' => 'view_users' ]);
        Permission::create(['name' => 'create_users' ]);
        Permission::create(['name' => 'update_users' ]);
        Permission::create(['name' => 'delete_users' ]);
        Permission::create(['name' => 'view_roles' ]);
        Permission::create(['name' => 'create_roles' ]);
        Permission::create(['name' => 'delete_roles' ]);
        Permission::create(['name' => 'view_dashboard' ]);

 

        $admin = Role::create(['name' => 'Admin' ]);
        $admin->givePermissionTo(['view_dashboard']);
      

     

        $user = User::create([
            'name' => 'Shaibu Zachariyya',
            'email' => 'a@a.com',
            'password' => bcrypt("qwert123"),
        ]);



$this->command->info($user->email);
     $user->givePermissionTo('do_all');


     

        // $user = User::create([
        //     'name' => 'Hajia Habiba',
        //     'email' => '0502677377',
        //     'password' => bcrypt("qwert123"),
        // ]);

        // $user->assignRole('Admin');




        $this->command->info('User accounted created!');
    }
}
