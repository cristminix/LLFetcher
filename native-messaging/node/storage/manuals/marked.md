I use marked (GitHub).

I first import it like this:

import marked from "marked";
I then fetch my `*.md` file within React's `componentDidMount` event and store it in my component's state using `marked(text)` (where text is the response):

```
componentDidMount() {
  const readmePath = require("./Readme.md");

  fetch(readmePath)
    .then(response => {
      return response.text()
    })
    .then(text => {
      this.setState({
        markdown: marked(text)
      })
    })
}
```

...and finally I render it on the page using the `dangerouslySetInnerHTML` attribute:

```
render() {
  const { markdown } = this.state;

  return (
    <section>
      <article dangerouslySetInnerHTML={{__html: markdown}}></article>
    </section>
  )
}
```
