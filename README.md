# Deezer TV typography

## Access to test site

Access the test site for typography hosted on S3 with this link.
http://deezer-typography.s3-website.eu-west-3.amazonaws.com/

## Hosting locally

If access online isn't possible there is a version which works locally [available here](html/index.html)

Note: there is no javascript required for this local version besides for the code highlighting.

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

## Design harmonization

To continue work and test feasibility of design updates there are some code examples with included CSS modifications to help with each area.

### Modals

* [Current modal](__Resources/modal/modal.html)
* [Refresh modal simple](__Resources/modal-refresh-simple/modal.html)
* [Refresh modal logo](__Resources/modal-refresh-logo/modal.html)

### Buttons

* [Search button](__Resources/buttons/search_button.css)
* [Se connecter button](__Resources/buttons/se_connecter_button.css)

### Main navigation

* [S'abonner navigation link](__Resources/navigation_menu/s_abonner.css)

### Search transition animation

Video uploaded to S3 here:
http://deezer-tv.s3.amazonaws.com/search_animation.mp4

### Search autocomplete

* [Autocomplete headers and focus state](__Resources/search-autocomplete-refresh/search-autocomplete.html)

### Empty states

* [Empty state](__Resources/empty-states-refresh/empty_states.html)
