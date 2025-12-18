import './index.css'
import { Analytics } from "@vercel/analytics/react"

const tools = [
  {
    name: 'LGP Explorer',
    description: 'Browse and extract files from FF7 LGP archives. View textures, models, and other game assets directly in your browser.',
    webUrl: 'https://lgp.ff7.tools/',
    downloadUrl: 'https://github.com/maciej-trebacz/ff7-lgp-explorer/releases',
    sourceUrl: 'https://github.com/maciej-trebacz/ff7-lgp-explorer',
  },
  {
    name: 'PSX Battle Stage viewer & converter',
    description: 'View and explore PSX battle stages and convert them to PC format.',
    webUrl: 'https://maciej-trebacz.github.io/ff7-battle-stage-viewer/',
    sourceUrl: 'https://github.com/maciej-trebacz/ff7-battle-stage-viewer',
  },
  {
    name: 'Ultima',
    description: 'Real-time game editor for FF7 PC. Modify party stats, warp between locations, toggle invincibility, edit equipment, and more.',
    downloadUrl: 'https://github.com/maciej-trebacz/ff7-ultima/releases',
    sourceUrl: 'https://github.com/maciej-trebacz/ff7-ultima',
  },
  {
    name: 'Landscaper',
    description: 'World map editor for FF7 PC. Edit map geometry, dialogues, encounters, and scripts. Export maps to OBJ for use in Blender.',
    downloadUrl: 'https://github.com/maciej-trebacz/ff7-landscaper/releases',
    sourceUrl: 'https://github.com/maciej-trebacz/ff7-landscaper',
  },
  {
    name: 'Credits Editor',
    description: 'View & edit people.bin file from FF7 PC containing credits data.',
    webUrl: 'https://ff7-credits-editor.netlify.app/',
  },
  {
    name: 'FF Text Converter',
    description: 'Convert text between FF7\'s custom encoding and ASCII',
    webUrl: 'https://fftext-converter.netlify.app/',
  },

  // Template:
  // {
  //   name: 'Tool Name',
  //   description: 'Short description of what the tool does.',
  //   webUrl: 'https://tool.ff7.tools/', // optional - web version URL
  //   downloadUrl: 'https://github.com/user/repo/releases', // optional - download/releases URL
  //   sourceUrl: 'https://github.com/user/repo', // optional - source code URL
  // },
]

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
      <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z" clipRule="evenodd" />
    </svg>
  )
}

function ToolCard({ tool }) {
  return (
    <div className="tool-card">
      <h2>{tool.name}</h2>
      <p className="description">{tool.description}</p>
      <div className="links">
        {tool.webUrl && (
          <a href={tool.webUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLinkIcon />
            Open in Browser
          </a>
        )}
        {tool.downloadUrl && (
          <a href={tool.downloadUrl} target="_blank" rel="noopener noreferrer">
            <DownloadIcon />
            Download
          </a>
        )}
        {tool.sourceUrl && (
          <a href={tool.sourceUrl} target="_blank" rel="noopener noreferrer">
            <CodeIcon />
            Source Code
          </a>
        )}
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <header className="header">
        <h1>FF7 <span className="accent">Tools</span></h1>
        <p>A collection of tools for Final Fantasy VII</p>
      </header>

      <main className="tools-grid">
        {tools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} FF7 Tools by <a href="https://github.com/maciej-trebacz" target="_blank">Maciej Trebacz</a>
      </footer>
      <Analytics />
    </>
  )
}

export default App
