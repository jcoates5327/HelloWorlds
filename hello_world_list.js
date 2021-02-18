const hello_worlds = {
	"Ada": `
<div class="code" id="ada"><p>
with&nbsp;Ada.Text_IO;&nbsp;use&nbsp;Ada.Text_IO;<br/>
procedure&nbsp;Hello&nbsp;is<br/>
begin<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Put_Line&nbsp;("Hello,&nbsp;world!");<br/>
end&nbsp;Hello;
</p></div>
`,
	"Bash": `
<div class="code" id="bash"><p>
#!/bin/bash<br/>
echo&nbsp;"Hello,&nbsp;world!"
</p></div>
`,
	"BASIC": `
<div class="code" id="basic"><p>
10&nbsp;PRINT&nbsp;"Hello,&nbsp;world!"<br/>
20&nbsp;END
</p></div>
`,
	"Batch file": `
<div class="code" id="batch file"><p>
@ECHO&nbsp;OFF<br/>
ECHO&nbsp;Hello,&nbsp;world!<br/>
PAUSE
</p></div>
`,
	"C#": `
<div class="code" id="c#"><p>
using&nbsp;System;<br/>
<br/>
class&nbsp;HelloWorld&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;static&nbsp;void&nbsp;Main(string[]&nbsp;args)&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine("Hello,&nbsp;world!");<br/>
&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
}
</p></div>
`,
	"C++": `
<div class="code" id="c++"><p>
#include&nbsp;<iostream><br/>
<br/>
int&nbsp;main()&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;std::cout&nbsp;<<&nbsp;"Hello,&nbsp;world!\\n";<br/>
}
</p></div>
`,
	"C": `
<div class="code" id="c"><p>
#include&nbsp;<stdio.h><br/>
<br/>
int&nbsp;main(void)&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;printf("Hello,&nbsp;world!\\n");<br/>
}
</p></div>
`,
	"Clojure": `
<div class="code" id="clojure"><p>
(println&nbsp;"Hello,&nbsp;world!")
</p></div>
`,
	"COBOL": `
<div class="code" id="cobol"><p>
IDENTIFICATION&nbsp;DIVISION.<br/>
PROGRAM-ID&nbsp;hello-world.<br/>
PROCEDURE&nbsp;DIVISION.<br/>
&nbsp;&nbsp;&nbsp;&nbsp;DISPLAY&nbsp;"Hello,&nbsp;world!"<br/>
&nbsp;&nbsp;&nbsp;&nbsp;.
</p></div>
`,
	"Common Lisp": `
<div class="code" id="common lisp"><p>
(print&nbsp;"Hello,&nbsp;world!")
</p></div>
`,
	"D": `
<div class="code" id="d"><p>
import&nbsp;std.stdio;<br/>
<br/>
void&nbsp;main()&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;writeln("Hello,&nbsp;world!");<br/>
}
</p></div>
`,
	"Erlang": `
<div class="code" id="erlang"><p>
-module(hello).<br/>
-export([hello_world/0]).<br/>
<br/>
hello_world()&nbsp;->&nbsp;io:fwrite("Hello,&nbsp;world!\n").
</p></div>
`,
	"F#": `
<div class="code" id="f#"><p>
open&nbsp;System<br/>
<br/>
[<EntryPoint>]<br/>
let&nbsp;main&nbsp;argv&nbsp;=<br/>
&nbsp;&nbsp;&nbsp;&nbsp;printfn&nbsp;"Hello,&nbsp;world!"<br/>
&nbsp;&nbsp;&nbsp;&nbsp;0
</p></div>
`,
	"Fortran 90": `
<div class="code" id="fortran 90"><p>
program&nbsp;HelloWorld<br/>
&nbsp;&nbsp;&nbsp;&nbsp;write&nbsp;(*,*)&nbsp;'Hello,&nbsp;world!'<br/>
end&nbsp;program&nbsp;HelloWorld
</p></div>
`,
	"FORTRAN77": `
<div class="code" id="fortran77"><p>
PROGRAM&nbsp;HELLOWORLD<br/>
&nbsp;&nbsp;&nbsp;&nbsp;PRINT&nbsp;'(A)',&nbsp;'Hello,&nbsp;world!'<br/>
&nbsp;&nbsp;&nbsp;&nbsp;STOP<br/>
END
</p></div>
`,
	"Go": `
<div class="code" id="go"><p>
package&nbsp;main<br/>
<br/>
import&nbsp;"fmt"<br/>
<br/>
func&nbsp;main()&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;fmt.Println("Hello,&nbsp;world!")<br/>
}
</p></div>
`,
	"Haskell": `
<div class="code" id="haskell"><p>
module&nbsp;Main&nbsp;(main)&nbsp;where<br/>
<br/>
main&nbsp;::&nbsp;IO&nbsp;()<br/>
main&nbsp;=&nbsp;putStrLn&nbsp;"Hello,&nbsp;world!"
</p></div>
`,
	"Java": `
<div class="code" id="java"><p>
public&nbsp;class&nbsp;HelloWorld&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;public&nbsp;static&nbsp;void&nbsp;main(String[]&nbsp;args)&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello,&nbsp;world!");<br/>
&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
}
</p></div>
`,
	"JavaScript": `
<div class="code" id="javascript"><p>
console.log("Hello,&nbsp;world!");
</p></div>
`,
	"Kotlin": `
<div class="code" id="kotlin"><p>
fun&nbsp;main()&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;println("Hello,&nbsp;world!")<br/>
}
</p></div>
`,
	"MATLAB": `
<div class="code" id="matlab"><p>
disp("Hello,&nbsp;world!");
</p></div>
`,
	"ML": `
<div class="code" id="ml"><p>
print&nbsp;("Hello,&nbsp;world!\n")
</p></div>
`,
	"Objective-C": `
<div class="code" id="objective-c"><p>
#import&nbsp;<Foundation/Foundation.h><br/>
<br/>
int&nbsp;main(int&nbsp;argc,&nbsp;const&nbsp;char&nbsp;*&nbsp;argv[])&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;@autoreleasepool&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NSLog(@"Hello,&nbsp;world!");<br/>
&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;0;<br/>
}
</p></div>
`,
	"OCaml": `
<div class="code" id="ocaml"><p>
print_endline&nbsp;"Hello,&nbsp;world!"
</p></div>
`,
	"Perl": `
<div class="code" id="perl"><p>
#!/usr/bin/perl<br/>
<br/>
use&nbsp;warnings;<br/>
<br/>
print("Hello,&nbsp;world!\n");
</p></div>
`,
	"PHP": `
<div class="code" id="php"><p>
&lt;?php<br/>
&nbsp;&nbsp;&nbsp;&nbsp;echo&nbsp;"Hello,&nbsp;world!"&nbsp;.&nbsp;PHP_EOL;
</p></div>
`,
	"Powershell": `
<div class="code" id="powershell"><p>
Write-Host&nbsp;"Hello,&nbsp;world!"
</p></div>
`,
	"Prolog": `
<div class="code" id="prolog"><p>
:-&nbsp;initialization&nbsp;hello_world,&nbsp;halt.<br/>
<br/>
hello_world&nbsp;:-<br/>
&nbsp;&nbsp;&nbsp;&nbsp;write("Hello,&nbsp;world!"),&nbsp;nl.
</p></div>
`,
	"Python": `
<div class="code" id="python"><p>
print("Hello,&nbsp;world!")
</p></div>
`,
	"R": `
<div class="code" id="r"><p>
print("Hello,&nbsp;world!")
</p></div>
`,
	"Ruby": `
<div class="code" id="ruby"><p>
puts&nbsp;'Hello,&nbsp;world!'
</p></div>
`,
	"Rust": `
<div class="code" id="rust"><p>
fn&nbsp;main()&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;println!("Hello,&nbsp;world!");<br/>
}
</p></div>
`,
	"Scala": `
<div class="code" id="scala"><p>
object&nbsp;HelloWorld&nbsp;extends&nbsp;App&nbsp;{<br/>
&nbsp;&nbsp;&nbsp;&nbsp;println("Hello,&nbsp;world!")<br/>
}
</p></div>
`,
	"Scheme": `
<div class="code" id="scheme"><p>
(begin<br/>
&nbsp;&nbsp;&nbsp;&nbsp;(display&nbsp;"Hello,&nbsp;world!"")<br/>
&nbsp;&nbsp;&nbsp;&nbsp;(newLine))
</p></div>
`,
	"Simula": `
<div class="code" id="simula"><p>
Begin<br/>
&nbsp;&nbsp;&nbsp;&nbsp;OutText&nbsp;("Hello,&nbsp;world!");<br/>
&nbsp;&nbsp;&nbsp;&nbsp;Outimage;<br/>
End;
</p></div>
`,
	"Smalltalk": `
<div class="code" id="smalltalk"><p>
Transcript&nbsp;show:&nbsp;'Hello,&nbsp;world!'.
</p></div>
`,
	"Swift": `
<div class="code" id="swift"><p>
import&nbsp;Swift<br/>
<br/>
print("Hello,&nbsp;world!")
</p></div>
`,
	"Visual Basic": `
<div class="code" id="visual basic"><p>
Private&nbsp;Sub&nbsp;Form_Load()<br/>
&nbsp;&nbsp;&nbsp;&nbsp;MsgBox&nbsp;"Hello,&nbsp;world!"<br/>
End&nbsp;Sub
</p></div>
`,
	"x86 Assembly": `
<div class="code" id="x86 assembly"><p>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;global&nbsp;&nbsp;_start<br/>
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;section&nbsp;.text<br/>
_start:&nbsp;&nbsp;mov&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rax,&nbsp;1<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mov&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rdi,&nbsp;1<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mov&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rsi,&nbsp;msg<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mov&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rdx,&nbsp;13<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;syscall<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mov&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rax,&nbsp;60<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xor&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rdi,&nbsp;rdi<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;syscall<br/>
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;section&nbsp;.data<br/>
msg:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;db&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Hello,&nbsp;world!",&nbsp;10
</p></div>
`,
};