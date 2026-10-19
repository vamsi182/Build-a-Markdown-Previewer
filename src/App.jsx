import { useState } from "react";
import { marked } from "marked";
import "./App.css";

marked.setOptions({
  breaks: true,
  gfm: true,
});

const defaultMarkdown = `# Welcome to Markdown Previewer

## Write Markdown and See the Result

Learn more about [Markdown](https://www.markdownguide.org/).

You can write **bold text** and use \`inline code\`.

### JavaScript Code Example

\`\`\`javascript
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Vamsi"));
\`\`\`

### My Favorite Topics

- HTML
- CSS
- JavaScript
- React

> Keep learning and never give up!

![Markdown Logo](https://markdown-here.com/img/icon256.png)

Thank you for visiting my **Markdown Previewer**!
`;

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <main className="app">
      <header className="app-header">
        <div className="logo">M</div>

        <div>
          <h1>Markdown Studio</h1>
          <p>Write it. Preview it. Make it beautiful.</p>
        </div>

        <span className="live-status">
          <span className="status-dot"></span>
          Live Preview
        </span>
      </header>

      <section className="workspace">
        <div className="panel">
          <div className="panel-header">
            <h2>Markdown Editor</h2>
            <span>EDITOR</span>
          </div>

          <textarea
            id="editor"
            value={markdown}
            onChange={(event) => setMarkdown(event.target.value)}
            placeholder="Write your Markdown here..."
            spellCheck="false"
          />

          <div className="panel-footer">
            {markdown.length} characters
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h2>Live Preview</h2>
            <span>PREVIEW</span>
          </div>

          <div
            id="preview"
            className="preview-content"
            dangerouslySetInnerHTML={{
              __html: marked.parse(markdown),
            }}
          />

          <div className="panel-footer">
            Rendered Markdown
          </div>
        </div>
      </section>

      <footer className="app-footer">
        Built with React and Marked
      </footer>
    </main>
  );
}

export default App;