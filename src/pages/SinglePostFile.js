import React, { useState, useEffect } from 'react'
import Markdown from 'markdown-to-jsx'

const SinglePostFile = ({ el }) => {

    let { post_archive } = el

    // console.log(post_archive)

    const [archive, setArchive] = useState('');

    useEffect(() => {
      import(`../posts/${post_archive}`)
        .then(res => 
            // console.log(res)
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setArchive(res))
            )
        .catch(err => console.log(err))
    }, [post_archive])
    

    

  return (
    <div>
      <Markdown>
          {archive}
      </Markdown>
    </div>
  )
}

export default SinglePostFile