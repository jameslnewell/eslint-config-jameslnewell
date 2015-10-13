- "max-nested-callbacks": [2, 4], //so high to account for mocha's describe() and it() functions
- "no-shadow": 2, //this saves hours of debugging!
- "init-declarations": 1, //should this be "always" because there's protential for a var to be undefined when used later?
- "vars-on-top": 1, //valid but annoying, can't wait for ES6's let!!

    //sometimes I like to align assignment statements, sometimes I don't - I couldn't achieve this so never align things to keep it consistent
    "no-multi-spaces": 2,
    "key-spacing": [2, {"beforeColon": false, "afterColon": true, "mode": "strict"}],
