const hello_worlds = {
	"Ada": `
<div class="code" id="ada"><p>
with Ada.Text_IO; use Ada.Text_IO;<br/>
procedure Hello is<br/>
begin<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Put_Line ("Hello, world!");<br/>
end Hello;
</p></div>
`,
	"Bash": `
<div class="code" id="bash"><p>
#!/bin/bash<br/>
echo "Hello, world!"
</p></div>
`,
	"BASIC": `
<div class="code" id="basic"><p>
10 PRINT "Hello, world!"<br/>
20 END
</p></div>
`,
	"Batch file": `
<div class="code" id="batch file"><p>
@ECHO OFF<br/>
ECHO Hello, world!<br/>
PAUSE
</p></div>
`,
	"C#": `
<div class="code" id="c#"><p>
using System;<br/>
<br/>
class HelloWorld {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;public static void Main(string[] args) {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine("Hello, world!");<br/>
&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
}
</p></div>
`,
	"C++": `
<div class="code" id="c++"><p>
#include <iostream><br/>
<br/>
int main() {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;std::cout << "Hello, world!\\n";<br/>
}
</p></div>
`,
	"C": `
<div class="code" id="c"><p>
#include <stdio.h><br/>
<br/>
int main(void) {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;printf("Hello, world!\\n");<br/>
}
</p></div>
`,
	"COBOL": `
<div class="code" id="cobol"><p>
IDENTIFICATION DIVISION.<br/>
PROGRAM-ID hello-world.<br/>
PROCEDURE DIVISION.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;DISPLAY "Hello, world!"<br/>
&nbsp;&nbsp;&nbsp;&nbsp;.
</p></div>
`,
	"Fortran 90": `
<div class="code" id="fortran 90"><p>
program HelloWorld<br/>
&nbsp;&nbsp;&nbsp;&nbsp;write (*,*) 'Hello, world!'<br/>
end program HelloWorld
</p></div>
`,
	"FORTRAN77": `
<div class="code" id="fortran77"><p>
PROGRAM HELLOWORLD<br/>
&nbsp;&nbsp;&nbsp;&nbsp;PRINT '(A)', 'Hello, world!'<br/>
&nbsp;&nbsp;&nbsp;&nbsp;STOP<br/>
END
</p></div>
`,
	"Java": `
<div class="code" id="java"><p>
public class HelloWorld {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello, world!");<br/>
&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
}
</p></div>
`,
	"JavaScript": `
<div class="code" id="javascript"><p>
console.log("Hello, world!");
</p></div>
`,
	"MATLAB": `
<div class="code" id="matlab"><p>
disp("Hello, world!");
</p></div>
`,
	"PHP": `
<div class="code" id="php"><p>
<?php<br/>
&nbsp;&nbsp;&nbsp;&nbsp;echo 'Hello, world!';
</p></div>
`,
	"Powershell": `
<div class="code" id="powershell"><p>
Write-Host "Hello, world!"
</p></div>
`,
	"Python": `
<div class="code" id="python"><p>
print("Hello, world!")
</p></div>
`,
	"R": `
<div class="code" id="r"><p>
print("Hello, world!")
</p></div>
`,
	"Ruby": `
<div class="code" id="ruby"><p>
puts 'Hello, world!'
</p></div>
`,
	"Smalltalk": `
<div class="code" id="smalltalk"><p>
Transcript show: 'Hello, world!'.
</p></div>
`,
};