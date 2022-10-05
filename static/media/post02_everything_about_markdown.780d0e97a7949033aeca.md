# **Everything about Markdown**

This is a simple guide and introduction about _Markdown_.  It is a easy way to add formatting to texts on the web and works by incorporating some characters into our content.  It is supported by over a a dozen programming languages including blog platforms and Framework projects through pluggins and adds.

### _Titles and paragraphs_

For writing paragraphs you don't have to add anything:

`Paragraph example`

    Maecenas sed enim ut sem viverra aliquet eget sit. Ut ornare lectus sit amet. Platea dictumst quisque sagittis purus sit. Dui vivamus arcu felis bibendum ut. Lorem dolor sed viverra ipsum. Nullam non nisi est sit amet facilisis magna etiam tempor. Semper quis lectus nulla at volutpat.

`The titles`

# First level title
    # How to write a first level title

## Second level title
    ## How to write a second level title

### Third level title
    ### How to write a third level title

#### Fourth level title
    #### How to write a fourth level title

##### Fifth level title
    ###### How to write a fifth level title

###### Sixth level title
    ###### How to write a sixth level title

---
### _Bold and Italic_


**This is a bold paragraph**

    **This is how to write a bold paragraph**

_This is an italic paragraph_

    _This is how to write a bold paragraph_

---
### _Links_

`Example plain link`

[My Homepage](https://ximenacamino.site)

    [My Homepage](https://ximenacamino.site)

`Example link with target _blank`

[My Homepage](blank:#https://ximenacamino.site/)

    [My Homepage](blank:#https://ximenacamino.site/)

`How to link emails`

[ximecamino@gmail.com](mailto:ximecamino@gmail.com)

    [ximecamino@gmail.com](mailto:ximecamino@gmail.com)

`How to link phone number for whatsapp messages`

[(54–11) 88888888](blank:#https://api.whatsapp.com/send?phone=541188888888)

    [(54–11) 88888888](blank:#https://api.whatsapp.com/send?phone=541188888888)
---

### _Indentation_

&nbsp;&nbsp;&nbsp;Indetated words

    &nbsp;&nbsp;&nbsp;Indetated words

---

### _Collapsible_

`An example of collapsible content`

<details>
  <summary>Click me</summary>
  
  ### Heading
  1. First item
  2. Second item
     * Subitem 1
     * subitem 2
     * :smile: Smile! 

  ### Some Code
  ```js
  function logSomething(something) {
    console.log('Something', something);
  }
  ```
</details>

---

### _Icons_

Markdown has awesome icons that can express lots of things and feelings, making your files more attractive and fun, follow [THIS LINK](https://gist.github.com/rxaviers/7360908) for a complete list of github markdown emoji.

---

### _Lists_

1. Spring
2. Summer
3. Autumn
4. Winter

        1. Spring
        2. Summmer
        3. Autumn
        4. Winter

- Spring
- Summer

     * June
     * July

        * Xime's Birthday
     * August

- Autumn
- Winter

        1. Spring
        2. Summmer
            * June
            * July
                * Xime's Birthday
            * August
        3. Autumn
        4. Winter

---

### _Comments_

        <!-- This is a comment in Markdown -->

---

### _Divisions_

    ---

`Or:`

    ___

---

### _Images_

![Sea Portrait](https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg "This is a heading")

    ![Sea Portrait](https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg "This is a heading")
---

### _Quotations_

> I think, therefore I am.” – René Descartes

>
> The journey of a thousand miles begins with one step. - Lao Tzu
>

    > I think, therefore I am.” – René Descartes

---

### _Tables_
| Name | Age | Email |
|---|---|---|
| Ximena | 41 años | ximecamino@gmail.com
| Fofura | 3 años | imacuttiedog@gmail.com

    | Name | Age | Email |
    |---|---|---|
    | Ximena | 41 años | ximecamino@gmail.com
    | Fofura | 3 años | imacuttiedog@gmail.com

---

### _Code_

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper nulla at mauris sodales, faucibus lobortis ligula posuere. Nullam ut neque ipsum. Pellentesque elementum augue eu ornare aliquam. `let numero` Quisque varius pretium leo, ut accumsan enim dapibus ut. Suspendisse eget laoreet diam. Donec et ornare ante. Phasellus porta sit amet enim eget consectetur. Duis consequat velit id lectus venenatis, quis posuere purus maximus. Pellentesque gravida massa dolor, sit amet pharetra ex ultricies vel. In commodo neque augue, tincidunt dictum magna congue at. Proin accumsan neque non odio imperdiet tempor. Praesent id magna vitae nulla aliquam sodales ut id ligula.

```js
function sumar (a + b) {
    return a + b
}
```

`How we write it in Markdown`

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper nulla at mauris sodales, faucibus lobortis ligula posuere. Nullam ut neque ipsum. Pellentesque elementum augue eu ornare aliquam. `let numero` Quisque varius pretium leo, ut accumsan enim dapibus ut. Suspendisse eget laoreet diam. Donec et ornare ante. Phasellus porta sit amet enim eget consectetur. Duis consequat velit id lectus venenatis, quis posuere purus maximus. Pellentesque gravida massa dolor, sit amet pharetra ex ultricies vel. In commodo neque augue, tincidunt dictum magna congue at. Proin accumsan neque non odio imperdiet tempor. Praesent id magna vitae nulla aliquam sodales ut id ligula.

    ```js
    function sumar (a + b) {
        return a + b
    }
    ```
---

### HTML Code

<form>
    <label for="q">Search: </label>
    <input type="search" name="q" id="q">
</form>

`We can use the html code as we normally write it`

    <form>
        <label for="q">Search: </label>
        <input type="search" name="q" id="q">
    </form>