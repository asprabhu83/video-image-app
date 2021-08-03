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
        ];

        DB::table('permissions')->insert($permissions);
    }
}
