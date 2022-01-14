// Iteration 1: Names and Input

let hacker1 = ['Birobiro'];
console.log(`"The driver's name is ${hacker1}"`);
let hacker2 = ['Chiquinho'];
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals

for(i = 0; i < hacker1.length; i++){
for(l = 0; l < hacker2.length; l++)
if (hacker1[i].length > hacker2[l].length)
console.log ('The driver has the longest name, it has ' + hacker1[i].length + ' characters.');

    else if (hacker1[i].length < hacker2[l].length)
    console.log('It seems that the navigator has the longest name, it has ' + hacker2[l].length + ' characters.');
    
    else
    console.log('Wow, you both have equally long names, ' + hacker1[i].length + ' characters!');
    

// Iteration 3: Loops
//3.1

let nameSingle = hacker1[i];
let nameSpace = nameSingle.split('').join(' ');
let nameUpper = nameSpace.toUpperCase();
console.log(`"${nameUpper}"`);

//3.2

let navigatorName = hacker2[i];
let navigatorReverse = navigatorName.split('').reverse().join('');
console.log(`"${navigatorReverse}"`);}

//3.3

function hackers(hacker1, hacker2) {
    if(hacker1 === hacker2) {
      return 'What?! You both have the same name?';
    }

    else if (hacker1 > hacker2) {
      return 'Yo, the navigator goes first definitely.';
    }
    else (hacker1 < hacker2)
      return `The driver's name goes first.`;
}
console.log(hackers(hacker1, hacker2));


//BONUS 1.1

let textWall = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare maximus nunc facilisis malesuada. Quisque risus mi, fringilla ac urna nec, porttitor semper odio. Morbi imperdiet felis in sapien tristique laoreet. Vivamus sed vestibulum purus. In lobortis arcu dui, vel pulvinar metus euismod fringilla. Praesent venenatis gravida magna nec mattis. Cras at massa a lorem tempor lacinia. In sit amet urna dapibus, pharetra leo viverra, congue diam. Suspendisse dignissim ante ac massa mattis, et auctor nisi convallis.

Duis vitae mauris congue, vehicula dolor ullamcorper, condimentum ante. Integer in tellus eget velit pretium malesuada ac eu lectus. Maecenas ultricies ut massa in euismod. Mauris congue ultrices maximus. Donec eu dui eros. Donec sodales, orci rutrum dignissim tempor, purus orci aliquam lectus, vel sodales velit ipsum vitae ipsum. Fusce tincidunt posuere elit ut maximus. Aenean volutpat a libero et venenatis.

Integer scelerisque fermentum egestas. Donec bibendum ligula et ligula tempus, sed lacinia sapien venenatis. Etiam tortor nunc, semper eget iaculis fermentum, ultrices vitae ex. Ut diam libero, lobortis sit amet tellus in, tincidunt sollicitudin lacus. Quisque vitae aliquet nisl. In in molestie ligula. Donec dictum lacus vel metus ultrices accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sit amet mauris finibus, sodales odio a, posuere justo. Ut nulla velit, ornare non turpis ut, ornare pharetra libero. In rhoncus cursus enim in rhoncus. Vestibulum nisi elit, maximus vitae diam eget, interdum mollis sapien. Praesent nunc ipsum, maximus finibus lobortis sit amet, vestibulum et eros.`

//BONUS 1.2


// BONUS 1.3

