(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{184:function(e,n){e.exports=function(e){var n="HTTP/[0-9\\.]+";return{aliases:["https"],illegal:"\\S",contains:[{begin:"^"+n,end:"$",contains:[{className:"number",begin:"\\b\\d{3}\\b"}]},{begin:"^[A-Z]+ (.*?) "+n+"$",returnBegin:!0,end:"$",contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{begin:n},{className:"keyword",begin:"[A-Z]+"}]},{className:"attribute",begin:"^\\w",end:": ",excludeEnd:!0,illegal:"\\n|\\s|=",starts:{end:"$",relevance:0}},{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}]}}}}]);