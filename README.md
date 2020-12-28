# Google Forms API
You can use this api to submit/automate google form.

Paste this into commandline to install this package
```
   node i google-forms-api 
```

## How to use

-  #### Importing package

    ```js
    const Form = require("google-forms-api")
    ```
- #### Creating Form Instance
    
    ```js
    const Form = require("google-froms-api")
    form = new Form('1FAIpQLSdmE4Cj8fkm-H16vqzuJx_9T78ufwMDszPiiqCiENNoop7s1A') // Form id
    ```
- #### Setting Data
    ```js
    from.setData({
        "entry.582598559": "Here is my reply!",
        "entry.946288599": "Here is my another reply!",
    })
    // ! donot copy above code snippet. Those data keys are only valid for my form. You have to see the network tab while submitting the form and get the key values for now.
    ```
- #### Sending Request

    ```js
    form.send((res)=>{
        console.log("Form has been submitted!")
    })
    ```



