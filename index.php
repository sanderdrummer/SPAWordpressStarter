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


    <div id="loader">
      <div class="icon-spinner"></div>
    </div>
    <div id="view" class="fadeIn"></div>
    <!-- <div id="scrollToTop">^</div> -->

    <ul id="main-menu" class="slideInUp flex flexNav">
        <li><a href="#/">Home</a></li>
        <li><a href="#/posts">Gigs</a></li>
        <li><a href="#/posts/blog">Band</a></li>
        <li><a href="#/posts/gigs">Media</a></li>
    </ul>
    <footer class="m-t-3">
    </footer>
    <script type="text/javascript" 
      src="<?php bloginfo('template_url'); ?>/src/polyfills/fetch.js" charset="utf-8"></script>
    <script type="text/javascript" 
      src="<?php bloginfo('template_url'); ?>/dist/bundle.js"></script>
    <link href='https://fonts.googleapis.com/css?family=Poiret+One|Open+Sans' rel='stylesheet' type='text/css'>
  </body>
</html>
