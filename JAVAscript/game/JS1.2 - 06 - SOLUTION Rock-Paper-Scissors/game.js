'use strict';   //JavaScript strict mode

// Statement of three variables.
var computer;
var player;
var random;


// Get the choice of the player.
player = window.prompt('What do you choose : rock, paper or scissors ?');


// Get a random number between 0 and 1 included.
random = Math.random();

if(random <= 0.33)
{
    computer = 'rock';
}
else if(random <= 0.66)
{
    computer = 'paper';
}
else
{
    computer = 'scissors';
}

document.write("<p>Computer's choice : " + computer + '</p>');


if(computer == player)
{
    document.write('<p>You chose the same thing : Draw !</p>');
}
else
{
    // The player and the computer haven't made the same choice, the game begins!

    switch(computer)
    {
        case 'scissors':
        if(player == 'rock')
        {
            document.write('<p>The rock crushes the scissors : you win !</p>');
        }
        else // player == 'paper'
        {
            document.write('<p>The paper is cut by the scissors : you lose !</p>');
        }
        break;

        case 'paper':
        if(player == 'rock')
        {
            document.write('<p>The rock is wrapped by the paper : you lose !</p>');
        }
        else // player == 'scissors'
        {
            document.write('<p>The scissors cuts the paper : you win !</p>');
        }
        break;

        case 'rock':
        if(player == 'paper')
        {
            document.write('<p>The paper wraps the rock : you win !</p>');
        }
        else // player == 'scissors'
        {
            document.write('<p>The scissors is crushed by the rock : you lose !</p>');
        }
        break;
    }
}