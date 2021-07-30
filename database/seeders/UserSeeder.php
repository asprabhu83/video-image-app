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
        $pwd = bcrypt('admin');
        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@drilld.com',
            'password' => $pwd,
            'user_role' => 'admin'
        ]);
    }
}
