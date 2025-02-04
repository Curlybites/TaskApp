<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $guarded = ['id', 'completed'];
    protected $fillable = ['title', 'description'];

    public function createTask($task)
    {
        return $this->create($task);
    }

    // public function getTaskList()
    // {
    //     return $this->all();
        // return $this->where('completed', false)->orderBy('created_at','desc')->get();
    // }

    public function getTaskList()
    {
        return $this->all();
    }
}
