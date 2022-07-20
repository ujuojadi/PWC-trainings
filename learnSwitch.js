const color = 'red';
switch(color){
    case 'red':
        console.log('Color is red');
    break;
    case 'blue':
        console.log('Color is blue')
        break;
    case 'yellow':
        console.log('Color is yellow')
        break;
    case 'green':
        console.log('color is green')
        break;
    default:
        console.log('color is not red, blue or green')

}

const num = 80;
switch(true){
    case num >=70:
        console.log('Excellent');
        break;
    case num>=60:
        console.log('Very Good')
        break;
    case num>=50:
        console.log('Good')
        break;
    case num>=40:
        console.log('Failed')
        break;
    default:
        console.log('Didnt pass')

}