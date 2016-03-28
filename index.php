<?php ?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Test</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" 
      href="<?php bloginfo('template_url'); ?>/dist/main.css" media="screen" charset="utf-8">
    <style>

      .hidden{
        display: none;
      }
      .loader{
        display: none;
      }
      .loader:after{
        width: 100%;
        height: 100%;
        background-color: blue;
        content: 'loading';
      }
    </style>
  </head>
  <body>
    <header>
      <nav class="main">
        <ul class="nav">
          <li><a href="#/">Home</a></li>
          <li><a href="#/posts">post</a></li>
          <li><a href="#/posts/blog">blog</a></li>
          <li><a href="#/posts/gigs">gigs</a></li>
          <li><a href="#/page/36">Page</a></li>
          <li><a href="#/page/82">Vogel</a></li>
          <li><a href="#/page/80">Leweds</a></li>
          <li><a href="#/Category">Category</a></li>
        </ul>
      </nav>
    </header>
    <div id="view"></div>
    <footer>
    </footer>
    <script type="text/javascript" 
      src="<?php bloginfo('template_url'); ?>/src/polyfills/fetch.js" charset="utf-8"></script>
    <script type="text/javascript" 
      src="<?php bloginfo('template_url'); ?>/dist/bundle.js"></script>
  </body>
</html>
