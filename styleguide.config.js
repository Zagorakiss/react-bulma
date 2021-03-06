module.exports = {
  title: 'React Bulma UI',
  require: [
    'bulma/css/bulma.css'
  ],
  template: 'src/index.html',
  components: 'src/components/**/*.js',
  highlightTheme: 'material',
  styles: {
    Markdown: {
      code: {
        padding: '0.2em 0.5em',
        border: '1px solid rgba(0,0,0,0.05)',
        margin: 0,
        fontSize: '85%',
        backgroundColor: 'rgba(27,31,35,0.05)',
        borderRadius: '3px'
      }
    },
    StyleGuide: {
      content: {
        maxWidth: '100%'
      }
    }
  }
}
