- [Javascript](#javascript)
  - [Output Methods in js](#output-methods-in-js)


# Javascript

## Output Methods in js 

JavaScript Output defines the ways to display the output of a given code. The output can be display by using four different ways which are listed below:

1. `innerHTML`
    ```html
    <span>This is span </span>
    ```
    ```javascript
    document.querySelector('span').innerHTML="span changed";
    ```

     When the js code loads the span element contents will be changed to ```span changed```

2. `alert()`

     ```html
    <span>This is span </span>
    ```
    ```javascript
    document.querySelector('body').addEventListener('click',function()
    {
        window.alert('Using window alert')
    }
    );
    ```
3. `document.write`
    This clears out the exisitng contents and shows the message given in the parenthesis

    ```javascript
    document.write("It is displayed using document.write view console log too") ;
    ```
4. `console.log`
    This print out the output in the console tab .

    ```javascript
     console.log('This is written in console log')
    ```

     

                
