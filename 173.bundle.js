(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{252:function(e,n){e.exports=function(e){var n="[A-Za-z_][0-9A-Za-z_]*",a={keyword:"if for while var new function do return void else break",literal:"true false null undefined NaN Infinity PI BackSlash DoubleQuote ForwardSlash NewLine SingleQuote Tab",built_in:"Abs Acos Area AreaGeodetic Asin Atan Atan2 Average Boolean Buffer BufferGeodetic Ceil Centroid Clip Console Constrain Contains Cos Count Crosses Cut Date DateAdd DateDiff Day Decode DefaultValue Dictionary Difference Disjoint Distance Distinct DomainCode DomainName Equals Exp Extent Feature FeatureSet FeatureSetById FeatureSetByTitle FeatureSetByUrl Filter First Floor Geometry Guid HasKey Hour IIf IndexOf Intersection Intersects IsEmpty Length LengthGeodetic Log Max Mean Millisecond Min Minute Month MultiPartToSinglePart Multipoint NextSequenceValue Now Number OrderBy Overlaps Point Polygon Polyline Pow Random Relate Reverse Round Second SetGeometry Sin Sort Sqrt Stdev Sum SymmetricDifference Tan Text Timestamp Today ToLocal Top Touches ToUTC TypeOf Union Variance Weekday When Within Year "},i={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},t={className:"subst",begin:"\\$\\{",end:"\\}",keywords:a,contains:[]},o={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,t]};t.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,o,i,e.REGEXP_MODE];var s=t.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["arcade"],keywords:a,contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,o,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"symbol",begin:"\\$[feature|layer|map|value|view]+"},i,{begin:/[{,]\s*/,relevance:0,contains:[{begin:n+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:n,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(return)\\b)\\s*",keywords:"return",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+n+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:s}]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:s}],illegal:/\[|%/},{begin:/\$[(.]/}],illegal:/#(?!!)/}}}}]);