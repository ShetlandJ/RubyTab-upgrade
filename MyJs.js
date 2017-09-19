document.getElementById("myButton").addEventListener("click", myFunction);
var myarray = [
["<h3>The 'and' operator && means that both must be true:</h3><li>true && true == true</li><li>true && false == false</li><li>false && false == false</li><br>"],

"<h3>The 'or' operator || means that one must be true:</h3><li>true || true == true</li><li>true || false == true</li><li>false || false == false</li><br>",

"<h3>if / else statements are presented like this:</h3><p>if condition</p><p>...</p><p>else</p><p>...</p><p>end</p><br>",

"<h3>If your if/else statement has more than two conditionals, you can use an elsif statement:</h3><p>my_age = 29</p><p>if my_age > 50</p><p>print \"Wow you're old!\"</p><p>elsif my_age > 25</p><p>print \"You're still young yet!\"</p><p>else</><p>print \"You're just a kid!\"</p><p>end</p><br>",

"<h3>Greater than and less than</h3><li>5 > 3 == true</li><li>10 < 7 == false</li><li>Handy tip: think of 'less than' as pointing left < </li><br>",

"<h3>Print text using puts</h3><p>puts \"Hello World\"<p>puts will place each item on a new line</p><p>puts [[1, 2], [3, 4]] will return as: <p>1</p><p>2</p><p>3</p><p>4</p><p>You can also use print, which will return each item on the same line:</p><p>print [[1, 2], [3, 4]] will return as:</p><p>[[1, 2], [3, 4]</p><br>",

"<h3>You can use hashtags to add comments to explain your code:</h3><p># adds two numbers together</p><p>10 + 12</p><p># asks users for their input and stores it in a variable called 'age'</p><p>age = gets.chomp<p>If you want to comment out a large portion of code, place =begin in a line above it and =end below it.<br>",

"<h3>The main mathmetical operators you will use are:</h3><p>Addition: 3 + 5 == 8</p><p>Subtraction: 10 - 7 = 3</p><p>Multiplication: 5 * 10 = 50</p><p>Division: 100 / 5 = 20</p><p>Exponent: 5**3 = 125 (multiply the first number by itself the number of times of the second number. In this example, 5*5*5.)</p><p>Modulus: 10%3 = 1 (divides the left hand operand by the right hand operand and returns the remainder, in this example, 10 / 3 returns 3 with 1 remainder)</p><br>",

"<h3>Use variables to store information that you can use later. You should aim to name your variable approriate to the content it will contain:</h3><p>my_greeting = \"Hello, user!\"</p><p>And here is how we would then call that greeting:</p><p>puts my_greeting</p><br>",

"<h3>Here's another way to use variables:</h3><p>my_name = \"John\"</p><p>puts \"Hello there, my name is #{my_name}\"</p><p>Alternatively, you can call your variable using %s:</p><p>puts \"Hello, my name is %s\" % my_name</p><p>puts \"Hello, my name is %s and I'm %s years old % [\"James\", 25]\"<br>",

"<h3>If you want to quote inside a string, you can't just say \"I said \"hello\" to John\" because Ruby will think that the \" around \"hello\" is the end of the string. You can use backslashes to help you here:</h3><p>\"I am 6'2\\\" tall.\"</p><p>\'I am 6\\\'2\" tall.\'</p><br>",

"<h3>If you want to prompt the user for input, you would use:</h3><p>gets.chomp</p><p>But what if we want to use the information that is submitted? We can store it in a variable:</p><p>puts \"What is your name?\"</p><p>input = gets.chomp</p><p># the user will be prompted to submit information</p><p>puts \"Hello, #{input}, thanks for giving us your name!\"</p><br>",

"<h3>An array is a way of storing objects in Ruby. It's written with square brackets []:</h3><p>my_array = [\"James\", 4, \"It can contain really long strings, or numbers, or, well, just about anything\"]</p><p>You're actually seeing an array in action with this extension. All the text that you see in these tips is stored in an array, and javascript is telling the array to randomly display a tip each time you reload, open a new tab, or click 'next tip'!</p><p>You can see the source code for that array by <a href=\"https://github.com/ShetlandJ/learnruby/blob/master/MyJs.js\" target=\"_blank\">clicking here!</a></p><br>",

"<h3>Multi-dimensional arrays are arrays that contain other arrays!</h3><p>my_multi_array = [[1, 2, 3], [4, 5], [\"John\", 7, 163], [[40, 50], [66, 77]]]</p><br>",

"<h3>for loops execute a block of code for a specific number of times. Here's a for loop that run a specific bit of code:</h3><p>for i in 1..3</p><p>puts \"Times we've printed this code: #{i}\"</p><p>end</p><p>This will return:</p><p>Times we've printed this code: 1</p><p>Times we've printed this code: 2</p><p>Times we've printed this code: 3</p><p>We create a variable, which in this instance is 'i' but could be anything: 'variable', 'banana', 'foobar' etc, and we're telling the computer to run the code the number of times specified in our range, 1 to 3, written as 1..3, calling on our variable. We then show the result.</p><br>",

"<h3>while loops execute a block of code as long as a specific condition is met. Here's a while loop in action:</h3><p>i = 0</p><p>while i < 5 do</p><p>puts i</p><p>i += 1</p><p>end</p><p>We create a variable, which in this instance is 'i' but could be anything: 'variable', 'banana', 'foobar' etc, and we're telling the computer to run the code - to continue printing our variable - as long as it is less than five. We then use our code to add a 1 to our variable incrementally. We use += to show incremental addition, which is coding shorthand for i = i + 1. We then show the result.</p><br>",

"<h3>until loops execute a block of code as long as a specific condition is met. Here's an until loop in action:</h3><p>i = 0</p><p>until i = 3 do</p><p>puts i</p><p>i += 1</p><p>end</p><p>We create a variable, which in this instance is 'i' but could be anything: 'variable', 'banana', 'foobar' etc, and we're telling the computer to run the code - to continue printing our variable - until it equals five. We then use our code to add a 1 to our variable incrementally. We use += to show incremental addition, which is coding shorthand for i = i + 1. We then show the result.</p><br>",

"<h3>If/else statement isn't useful if you have a large numbers of conditions. That's where the switch statement comes in handy:</h3><p>print: \"Enter your grade: \"</p><p>age = gets.chomp # this asks for a user input and stores it as a variable</p><p>case grade</p><p>when \"A\"</p><p>puts \"Well done!\"</p><p>when \"B\"</p><p>puts \"Pretty good!\"</p><p>when \"C\"</p><p>puts \"Room for improvement!\"</p><p>when \"D\"</p><p>puts \"That's a fail!\"</p><p>else</p><p>puts \"That's not one of our grades!\"</p><br>"

];

document.addEventListener("DOMContentLoaded", function(event) {
    var x = myarray[Math.floor(Math.random() * myarray.length)];
      document.getElementById("container").innerHTML = x;
  });



function myFunction() {
  var x = myarray[Math.floor(Math.random() * myarray.length)];
  document.getElementById("container").innerHTML = x;

};

document.getElementById("array").addEventListener("click", arrayFunction);
var array = [
["<h3>The 'and' operator && means that both must be true:</h3><li>true && true == true</li><li>true && false == false</li><li>false && false == false</li><br>"],

["<h3>The 'or' operator || means that one must be true:</h3><li>true || true == true</li><li>true || false == true</li><li>false || false == false</li><br>",

"<h3>if / else statements are presented like this:</h3><p>if condition</p><p>...</p><p>else</p><p>...</p><p>end</p><br>"]
];

function arrayFunction() {
  var x = (array[1])[Math.floor(Math.random() * array.length)];
  document.getElementById("container").innerHTML = x;
};
