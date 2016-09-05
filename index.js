Reveal.initialize({
    history: true,
    showNotes: false,
    dependencies: [
        // Interpret Markdown in <section> elements
        { src: 'bower_components/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'bower_components/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        //
        //// Syntax highlight for <code> elements
        { src: 'bower_components/highlightjs/highlight.pack.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },

        // Zoom in and out with Alt+click
        { src: 'bower_components/reveal.js/plugin/zoom-js/zoom.js', async: true },

        // Speaker notes
        { src: 'bower_components/reveal.js/plugin/notes/notes.js', async: true },

        { src: 'bower_components/socket.io-client/socket.io.js', async: true },
        { src: 'bower_components/reveal.js/plugin/notes-server/client.js', async: true }
    ]
});
