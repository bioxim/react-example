# **How to do dynamic blog posts in React without database Frameworks**

**_Markdown_** is a lightweight markup language for creating formatted text using a plain-text editor.  Created in 2004 by John Gruber and Aaron Swartz, it is really easy to be implemented into your React, blog platform or Framework projects.  It is also supported for over a dozen programming languages.  In this, my first blog post we are going to learn how to dynamically load in markdown files into a React project.

If you want to know [How to write Markdown Files]() you can visit this link.

We are going to use a customizable React markdown component called: _markdown-to-jsx_.

## **Installation**

Write this down in your console:

`
npm i markdown-to-jsx
`

## **Folder Structure**

In _React_ project structure create a new folder where to allocate the _Markdown_ files:

&nbsp;&nbsp; src >

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; posts >

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _post_file_01.md_

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; _post_file_02.md_

## **Creating the component**

In your app.js component add the imports and call the .md archive to finally read it:

```js
// Imports
import React, { useState, useEffect } from 'react'
import Markdown from 'markdown-to-jsx'

function App() {
    // Calling the archive
    const [post, setPost] = useState('');

    useEffect(() => {
        // Dynamic file importation
      import(`posts/${post_file}`)
        .then(res => 
            // console.log(res)
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
            )
        .catch(err => console.log(err))
    }, [post])

  return (
    <div>
      <Markdown>
          {post}
      </Markdown>
    </div>
  );
}

export default App;

```



The results are shown as you are watching this, it turned out to be the most suitable and economic way of  deploying in a free server a React project with an emulation of a "sort of" dynamic content (at least for me).