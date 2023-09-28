<?php

$json_dischiList = file_get_contents('./data-dischi.json');

$dischi = json_decode($json_dischiList);

  header('Content-Type: application/json');

  echo json_encode($dischi);

  ?>