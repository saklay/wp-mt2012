<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the content
 *
 * @package WordPress
 * @subpackage Moontoast2012
 */
?>

            </div>
        </div>

        <?php if (!isset($_GET['requestType']) || $_GET['requestType'] !== 'ajax') : ?>

        <!-- Begin the Bottom Navigation -->
        <div class="navigation loading">
            <div class="navigation_inner">
             <?php //wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>
            <ul class="bottomnav">
                <li class="moontoast_link">
                    <a href="/" style="margin-top: 0px;" rel="back"><img src="/wp-content/themes/moontoast2012/images/moontoast_logo.png" alt="Moontoast, Your Social Commerce Platform" title="Moontoast, Your Social Commerce Platform" /></a>
                </li>

                <?php
                    $clean_page_list = wp_list_pages( 'title_li=&depth=2&echo=0&exclude='.$excludepages);
                    $clean_page_list = preg_replace('/title=\"(.*?)\"/','',$clean_page_list);
                    $clean_page_list = str_replace('current', 'on', $clean_page_list);
                    $clean_page_list = str_replace('/li>', '/li><li class="spacer"><div></div></li>', $clean_page_list);
                    $clean_page_list = str_replace('</ul>', '<li class="tail"><div></div></li></ul>', $clean_page_list);
                    echo $clean_page_list;
                ?>
                
                <li class="page_item share_link">
                    <span class="icon"></span>
                    <a href="#">Share This</a>
                    <ul class="children">
                        <?php $socialIcons = array('facebook', 'twitter', 'googleplus', 'tumblr', 'linkedin', 'pinterest') ?>
                        <?php foreach ($socialIcons as $key => $icon) : ?>
                            <li class="page_item">
                                <a href="http://api.addthis.com/oexchange/0.8/forward/<?php echo $icon ?>/offer?pco=tbx32nj-1.0&amp;url=<?php echo 'http'.(empty($_SERVER['HTTPS'])?'':'s').'://'.$_SERVER['SERVER_NAME'].$_SERVER['REQUEST_URI'] ?>&amp;pubid=moontoast" target="_blank" class="adthis_button adthis_button_<?php echo $icon ?>">
                                    <span class="icon"></span>
                                    <span class="text"><?php echo str_replace('googleplus', 'google+', $icon) ?></span>
                                </a>
                            </li>
                            <li class="spacer"></li>
                        <?php endforeach; ?>
                        <li class="tail"></li>
                    </ul>
                </li>
                <li class="contact_link">
                    <div class="bubble">
                        <span class="icon"></span>
                        <a href="/contact">Contact Us</a>
                    </div>
                </li>
            </ul>
            </div>
        </div>
        <!-- End the Bottom Navigation -->

        <!--<script type="text/javascript" data-main="/wp-content/themes/moontoast2012/<?php if (isset($_GET['mode']) && $_GET['mode'] === 'd') : ?>js<?php else: ?>js-build<?php endif; ?>/main" src="/wp-content/themes/moontoast2012/<?php if (isset($_GET['mode']) && $_GET['mode'] === 'd') : ?>js<?php else: ?>js-build<?php endif; ?>/lib/require/main.js"></script>-->
        <script type="text/javascript" data-main="/wp-content/themes/moontoast2012/js/main" src="/wp-content/themes/moontoast2012/js/lib/require/main.js"></script>
        <script type="text/javascript">
        var _gaq = _gaq || [];
          _gaq.push(['_setAccount', 'UA-8973162-10']);
          _gaq.push(['_trackPageview']);
        (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
          })();
        </script>
        <script type="text/javascript" src="https://lct.salesforce.com/sfga.js"></script> 
        <script type="text/javascript">__sfga();</script>
        <!-- Start of Async HubSpot Analytics Code -->
        <script type="text/javascript">
        (function(d,s,i,r) {
        	var n=d.createElement(s),e=d.getElementsByTagName(s)[0];
        	n.id=i;n.src='//js.hubspot.com/analytics/'+(Math.ceil(new Date()/r)*r)+'/213341.js';
        	e.parentNode.insertBefore(n, e);
        })(document,"script","hs-analytics",300000);
        </script>
        <!-- End of Async HubSpot Analytics Code -->
    
<script type="text/javascript" src="http://www.hellobar.com/hellobar.js"></script>
<script type="text/javascript">
new HelloBar(61153,89101);
</script>
	</body>
</html>

<?php endif; ?>
