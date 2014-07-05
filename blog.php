<?php
/*
Template Name: ShortContent
*/
?>

<?php include("content_header.php"); ?>

<div class="view_content">

    <div class="header header_social_apps">
        <div class="header_social_apps_image">
            <div class="header_social_apps_image_inner">
                <div class="page_title"><?php the_title(); ?></div>
            </div>
        </div>
    </div>

    <div class="products_container no_border pad_top">
        <div class="main_container social_apps_container">
            <div class="short_content">
        <?php
            if ($wp_query->have_posts()) {
                while ($wp_query->have_posts()) {
                    $wp_query->the_post();
        ?>
        
            <?php
			    the_excerpt();
			?>
        
        <?php
                }
            }
        ?>
            </div>
        </div>
    </div>
    <div class="clearAll"></div>

    <br /><br /><br /><br /><br /><br /><br /><br /><br />

</div>

<?php  get_footer(); ?>