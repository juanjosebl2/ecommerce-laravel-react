<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => '12345678',
            'admin' => 1
        ]);
        
        User::create([
            'name' => 'juan',
            'email' => 'juanjosebl2@gmail.com',
            'password' => '12345678',
            'admin' => 0
        ]);
    }
}
