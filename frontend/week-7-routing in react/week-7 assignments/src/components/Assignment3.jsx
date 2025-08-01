import React, { useEffect, useState } from 'react';

function Assignment3() {
    const [a, seta] = useState('');
    const reactElement = {
        type: 'a',
        props: {
            href: 'https://github.com/kkshivani18',
            target: '_blank',
            children: ['Click me'],
        }
    }

    function generateHTML(element) {
        const { type, props } = element
        const children = props.children || []
        const attributes = Object.keys(props)
            .filter((key) => key != 'children')
            .map((key) => `${key}="${props[key]}"`)
            .join(' ')

        const childHTML = children
        .map((child) => {
            return typeof child === 'object' ? generateHTML(child) : child
        })
        .join('')

        seta(`<${type} ${attributes}>${childHTML}</${type}>`)
    }

    function customRender(element, container) {
        const html = generateHTML(element)
        container.innerHTML = html
      }
      useEffect(() => {
        customRender(reactElement, document.getElementsByClassName('elemRender'))
      }, [])
    
    return (
        <div
          className='flex items-center justify-center w-screen py-20 elemRender'
          dangerouslySetInnerHTML={{ __html: a }}
        ></div>
    )
}

export default Assignment3;