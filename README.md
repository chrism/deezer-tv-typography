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



## Fixing buttons and adaptable widths

An example of the buttons working and expanding to content.

```css
.searchButton {
  // width: 170px; remove these fixed widths

  right: 100px;
}

.searchButton .btnSearch {
  // font-family: "Orange Sans 45 light","HelveticaNeueLT Com 55 Roman","Helvetica 55 Roman",helvetica; remove these fonts
  // position: absolute; remove this
  // width: 170px; remove these fixed widths

  height: 41px;
  z-index: 5;
  border: 2px solid #FFF;
  border-radius: 10px;
  color: white;
  font-size: 20px;
}

.searchButton .searchIcon, .searchInput .searchIcon {
  // float: left; don't use float
  // margin-left: 10px; get rid of margins on the icon, already using positioning
  // margin-right: 10px; use it for the text content as icon size fixed

  position: absolute; // change to absolute it's the text that the container should adapt to

  left: 14px; // use absolute positioning and left to set icon position  

  top: 8px;
  font-family: "Deezer Icons";
  font-size: 25px;
}
.searchButton .btnSearch .txtBtnSearch {
  height: 41px;
  line-height: 41px;

  // padding for space, margin for icon, position relative to
  position: relative;
  margin-left: 30px;
  padding-left: 24px;
  padding-right: 20px;
}

```

Se connecter example


```css
.home .header.guest .buttonConnect {
  left: 550px;
  // width: 238px; get rid of these widths
}

.home .header .buttonConnect, .home .header .flowButton {
  position: absolute;
  top: 80px;
  left: 431px;
  // width: 310px; more fixed widths??
  height: 56px;
  color: #FFF;
  font-size: 34px;
  font-family: "Deezer Icons";
  border-radius: 10px;
  -webkit-backface-visibility: hidden;
  border: 2px solid #FFF;
  line-height: 50px;
}

.home .header.guest .buttonConnect .connectInfo {
  // font-family: "Orange Sans 45 light","HelveticaNeueLT Com 55 Roman","Helvetica 55 Roman",helvetica;
  // width: 140px;
  // left: 72px;
  // top: 14px;

  // position: absolute;
  position: relative; // use relative to fix container, not icon
  // line-height: 28px;
  line-height: 50px use height of button;

  font-size: 24px;
  // white-space: nowrap; why??

  // add this - was all that due to a span, not block element?
  display: block;
  padding-left: 24px;
  padding-right: 20px;
  margin-left: 37px;  
}
.home .header.guest .buttonConnect .connect {
  position: absolute;

  // use proper positions
  // top: 3px;
  top: 10px;
  // left: 14px;
  left: 15px;

  // get rid of this stuff
  // width: 218px;
  // overflow: visible;
  // line-height: 50px;
}


```




## S'ABONNER BUTTON IN Menu

```CSS
.menu.active .barMenu .menuItem.offer .subscribe {
  background: #000;
  border-radius: 10px;
  color: #fff;
  margin-bottom: 4px;
  margin-top: 4px;
  width: 75%; // changed from fixed width to make wider — but all the fixed widths seem a mess
}
```
