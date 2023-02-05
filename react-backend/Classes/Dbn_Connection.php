<?php

// STUB: create class to hold database logic

class Dbn_Connection
{
  protected string $username = "root";
  protected string $password = "";
  protected string $dsn = 'mysql:dbname=scandiweb_backend;host=localhost';

  // STUB: create getters
  public function getUsername(): string
  {
    return $this->username;
  }
  public function getPassword(): string
  {
    return $this->password;
  }
  public function getDSN(): string
  {
    return $this->dsn;
  }
}