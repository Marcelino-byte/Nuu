<?php
$num1 = $_POST['num1'];
$num2 = $_POST['num2'];
$operador =$_POST['operador'];
switch ($operador) {
  case '-':
    $resultado = $num1 - $num2;
  
    break;
  case 'soma':
    $resultado = $num1 + $num2;
    
    break;
  case '*':
    $resultado = $num1 * $num2;
    
    break; 
  case '/':
    $resultado = $num1 / $num2;
    
    break ;
  
  default:
    $resultado = 'Algo deu de errado';
    break;
}

echo $resultado;
?>
