# Deezer TV typography

## Including Code Styling

Add this extra code

```html
<script src="assets/highlight.pack.js"></script>
<script type="text/javascript">
function highlight() {
  var codeBlocks = document.querySelectorAll('pre');
  codeBlocks.forEach(function(block) {
    hljs.highlightBlock(block);
  });
}
window.onload = highlight;
</script>
```
