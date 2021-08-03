<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pwd = bcrypt('Welcome@123#');
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'sivan@drill-d.co.il',
            'password' => $pwd,
            'user_role' => 'super_admin',
            'phone' => '0509263623'
        ]);

        $permissions = [
            ['id' => 1, 'permission_name' => 'create project', 'description' => 'user have permission to create the files'],
            ['id' => 2, 'permission_name' => 'edit project', 'description' => 'user have permission to edit the files'],
            ['id' => 3, 'permission_name' => 'delete project', 'description' => 'user have permission to delete the files'],
            ['id' => 4, 'permission_name' => 'upload videos', 'description' => 'user have permission to upload the videos'],
            ['id' => 5, 'permission_name' => 'export JSON', 'description' => 'user have permission to export the JSON files'],
            ['id' => 6, 'permission_name' => 'manage users', 'description' => 'user have permission to manage account user']
        ];

        DB::table('permissions')->insert($permissions);
    }
}
