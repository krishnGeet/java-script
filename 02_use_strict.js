"use strict"
try
{
    a = 10
    console.log(a)

}

catch(err)
{
    console.log(err)
}

/*
    The "use strict" Directive
    
The "use strict" directive was new in ECMAScript version 5.

It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.

The purpose of "use strict" is to indicate that the code should be executed in "strict mode".

With strict mode, you can not, for example, use undeclared variables.

All modern browsers support "use strict" except Internet Explorer 9 and lower:
 */