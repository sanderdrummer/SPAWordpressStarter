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
    <header>
      <nav id="nav" class="main m-b-3 effect2">
        <ul class="fixed toggle">
          <li class="icon-menu"></li>
        </ul>
        <ul class="nav m-t-0 band-name">
          <li><a href="">Die geilen Funkschweine</a></li>
        </ul>
        <ul id="main-menu" class="flex flexNav">
          <li><a href="#/">Home</a></li>
          <li><a href="#/posts">Gigs</a></li>
          <li><a href="#/posts/blog">Band</a></li>
          <li><a href="#/posts/gigs">Media</a></li>
        </ul>
      </nav>
    </header>

    <div id="loader">
      <div class="icon-spinner"></div>
    </div>
    <div id="view"></div>
    <!-- <div id="scrollToTop">^</div> -->
    <footer class="m-t-3">
    </footer>
    <script type="text/javascript" 
      src="<?php bloginfo('template_url'); ?>/src/polyfills/fetch.js" charset="utf-8"></script>
    <script type="text/javascript" 
      src="<?php bloginfo('template_url'); ?>/dist/bundle.js"></script>
    <link href='https://fonts.googleapis.com/css?family=Poiret+One|Open+Sans' rel='stylesheet' type='text/css'>
  </body>
</html>
