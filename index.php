<?php ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Test</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="<?php bloginfo('template_url'); ?>/dist/main.css" rel='stylesheet' type='text/css'>

    <style>
      body{
        background-color: #eee;
      }
    </style>
  </head>
  <body>

    <div class="mainContainer relative">
        <div class="loader" id="loader">
          <div class="icon-spinner"></div>
        </div>
        <div id="view"></div>
        <div id="pagingContainer"></div>
    </div>
    <!-- <div id="scrollToTop">^</div> -->

    <ul id="main-menu" class="slideInUp flex flexNav">
        <li><a href="#/home">Home</a></li>
        <li><a href="#/posts/gigs">Gigs</a></li>
        <li><a href="#/posts/band">Band</a></li>
        <li><a href="#/posts/media">Media</a></li>
    </ul>
    <footer class="m-t-5">
         <a href="#/page/103">Impressum</a>
         <a href="#/posts/blog">Blog</a>
        <a id="searchTrigger">Suchen</a>
    </footer>
    <script type="text/javascript" 
      src="<?php bloginfo('template_url'); ?>/src/polyfills/fetch.js" charset="utf-8"></script>
    <script type="text/javascript" 
      src="<?php bloginfo('template_url'); ?>/dist/bundle.js"></script>
    <link href='https://fonts.googleapis.com/css?family=Poiret+One|Open+Sans' rel='stylesheet' type='text/css'>
  </body>
</html>
