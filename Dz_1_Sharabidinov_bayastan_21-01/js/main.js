let ocenite = Number(prompt('оцените сервис от 1 до 10'))
if(ocenite >=5 && ocenite <=10){
    alert('спасибо за высокую оценку!')
}else if(ocenite < 5){
    alert('мы работаем над улучшением!')
}else{
    alert('пожалуйста оцените от 1 до 10')
}