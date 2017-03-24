// Declare variables.
var age;
var name;


// ASsign values to variables.
age    = 30;
name = 'Tom';


// Simple conditional IF statement.
if(age > 18)
{
    // This code executes if the comparison is true.
    document.write('<p>You are older than 18</p>');
}


// Conditional if/else statement.
if(age < 20)
{
    // This code executes if the comparison is true.
    document.write('<p>You are less than 20 years old</p>');
}
else
{
    // This code executes if the comparison is false.
    document.write('<p>You are older than 20</p>');
}


if(name == 'Elsa')
{
    // This code executes if the comparison is true.
    document.write("<p>Your name is Elsa.</p>");
}
else if(name == 'Charlotte')
{
    // This code executes if the comparison is true.
    document.write("<p>Your name is Charlotte.</p>");
}
else
{
    // This code executes if both previous comparisons where false.
    document.write("<p>Your name is nor Elsa nor Charlotte.</p>");
}


/*
 * Simple conditional statement with to comparisons.
 *
 * The parentheses around each comparison are not mandatory
 * but they improve readability of the code.
 */
if((name == 'Tom') && (age != 40))
{
    // This code executes if the comparison is true.
    document.write("<p>Your name is Tom and you are not 40 years old.</p>");
}

/*
 * The above code can also be written as follows:
 *
 * if(name == 'Tom')
 * {
 *     if(age != 40)
 *     {
 *          document.write("<p>Your name is Tom and you are not 40 years old.</p>");
 *     }
 * }
 *
 * This second version makes it easier to build the else part.
 */