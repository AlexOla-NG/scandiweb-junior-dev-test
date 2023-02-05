<?php

// NOTE: API endpoint for frontend

require_once './Classes/Action.php';

$getProducts = new Action();
$getProducts->getProducts();