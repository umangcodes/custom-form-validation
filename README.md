# e-commerce-1

## Project Intro

```
- The project developed to showacase the capability of form validation and firebase user authentication.
```

### Features

```
- Custom validation
- Firebase authentication
```

### Validation method

```
Validation is done based on different set of rules for different types inputs
    For instance for email password is as follows:
        - must have a #
        - must be 7 char long
        - must have a number

If the validation is successful, the error array will be empty. Otherwise, it will have strings related to the errors. For instance,

        errorArray = ['must have a #', 'must be 7 char long']

There might be a lot of rules for each parameter, which will lead to a lot of methods. To avoid creating a lot of methods, the rules(functions) can be mentioned in an array and the array can be iterated over to call the functions.

eg.
        const rulesArray = [
            (value)=>{ if(value == operation) return operate(value)}
            (value)=>{ if(value == operation) return operate(value)}
        ]

        runValidation(){
            resetErrorArray();
            rulesArray.forEach((func)=> {func(inputParam)})
        }

By implementing this method, it would be easier for the coder to keep track of all the validation methods and clean up a lot of redundant code.
```

![alt text](https://github.com/umangcodes/e-commerce-1/blob/main/src/assets/validation.png)
