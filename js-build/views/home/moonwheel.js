define(["jquery","underscore","backbone","jqpath","jqmobile","mobiledetection","jqueryui"],function(e,t,n,r,i,s,o){return n.View.extend({el:"#panel_0",events:{"click .moonwheel_icon":"closeClick","click .item_link":"moduleToggle","click .featured_downloads .arrow_right":"downloadsRightClick","click .featured_downloads .arrow_left":"downloadsLeftClick","click .blog .arrow_right":"blogRightClick","click .blog .arrow_left":"blogLeftClick"},wheelOut:!0,timeout:700,contactFormSubmit:function(){var t={},n=!1,r=e(this);return r.find("input[type=text], select").each(function(){!e(this).val()||!e(this).val().length||e(this).val()==="Select One…"?(e(this).addClass("error"),n=!0):e(this).removeClass("error"),t[e(this).attr("name")]=e(this).val()}),n?(alert("Please finish filling out the form before you submit it."),!1):(alert("Thanks!  We will be in touch!"),!0)},downloadsLeftClick:function(t){var n=this.$el.find(".featured_downloads .slides .current"),r,i=500;t&&clearInterval(this.autoRotate),n||(n=this.$el.find(".featured_downloads .slides img:first")),n.animate({left:236},i,function(){e(this).removeClass("current")}),n.prev().length?r=n.prev():r=this.$el.find(".featured_downloads .slides img:last"),r.css({left:-236}).animate({left:0},i,function(){e(this).addClass("current")})},downloadsRightClick:function(t){var n=this.$el.find(".featured_downloads .slides .current"),r,i=500;t&&clearInterval(this.autoRotate),n.animate({left:-236},i,function(){e(this).removeClass("current")}),n.next().length?r=n.next():r=this.$el.find(".featured_downloads .slides img:first"),r.css({left:236}).animate({left:0},i,function(){e(this).addClass("current"),e("#download_link").attr("href",e(this).data("link"))})},blogLeftClick:function(t){var n=this.$el.find(".blog .slides .current"),r,i=500;t&&clearInterval(this.autoRotateBlog),n||(n=this.$el.find(".blog .slides a:first")),n.animate({left:236},i,function(){e(this).removeClass("current")}),n.prev().length?r=n.prev():r=this.$el.find(".blog .slides a:last"),e(".blog h3").html(r.data("name")),e("#blog_link").attr({href:r.attr("href"),target:r.attr("target")}),r.css({left:-236}).animate({left:0},i,function(){e(this).addClass("current")})},blogRightClick:function(t){var n=this.$el.find(".blog .slides .current"),r,i=500;t&&clearInterval(this.autoRotateBlog),n.animate({left:-236},i,function(){e(this).removeClass("current")}),n.next().length?r=n.next():r=this.$el.find(".blog .slides a:first"),e(".blog h3").html(r.data("name")),e("#blog_link").attr({href:r.attr("href"),target:r.attr("target")}),r.css({left:236}).animate({left:0},i,function(){e(this).addClass("current")})},animateIn:function(t){t.$el.css("display","block").animate({path:new e.path.bezier({start:{x:540,y:540,angle:180},end:{x:t.left,y:t.top,angle:450,length:1.25}}),opacity:1,width:t.width,height:t.height},this.timeout)},animateOut:function(t){t.$el.animate({path:new e.path.bezier({start:{x:t.left,y:t.top,angle:450},end:{x:520,y:485,angle:180,length:1}}),opacity:0,width:0,height:0},this.timeout,function(){e(this).css("display","none")})},openWheel:function(e){var t=this;this.$el.find(".moonwheel").css({transform:"rotate(-360deg)","-moz-transform":"rotate(-360deg)","-webkit-transform":"rotate(-360deg)","o-transform":"rotate(-360deg)"}),(!e||e==="dite_methodology")&&this.animateIn({$el:this.$el.find(".dite_methodology"),left:460,top:680,width:195,height:149}),(!e||e==="join_the_toast")&&this.animateIn({$el:this.$el.find(".join_the_toast"),left:215,top:390,width:195,height:149}),(!e||e==="featured_downloads")&&this.animateIn({$el:this.$el.find(".featured_downloads"),left:230,top:615,width:195,height:149}),(!e||e==="contact")&&this.animateIn({$el:this.$el.find(".contact"),left:320,top:125,width:458,height:210}),(!e||e==="social_activation")&&this.animateIn({$el:this.$el.find(".social_activation"),left:690,top:615,width:195,height:149}),(!e||e==="blog")&&this.animateIn({$el:this.$el.find(".blog"),left:715,top:380,width:195,height:149}),setTimeout(function(){e?t.$el.find(".spoke_"+e).animate({opacity:1},1e3):t.$el.find(".spoke").animate({opacity:1},1e3)},this.timeout),e||(this.wheelOut=!0),this.$el.find(".moonwheel_icon").removeClass("moonwheel_icon_off")},closeWheel:function(e){var t=this;e?this.$el.find(".spoke_"+e).animate({opacity:0},400):(this.$el.find(".spoke").animate({opacity:0},400),this.$el.find(".moonwheel").css({transform:"rotate(360deg)","-moz-transform":"rotate(360deg)","-webkit-transform":"rotate(360deg)","o-transform":"rotate(360deg)"})),(!e||e==="dite_methodology")&&this.animateOut({$el:this.$el.find(".dite_methodology"),left:550,top:754}),(!e||e==="join_the_toast")&&this.animateOut({$el:this.$el.find(".join_the_toast"),left:85,top:200}),(!e||e==="featured_downloads")&&this.animateOut({$el:this.$el.find(".featured_downloads"),left:0,top:485}),(!e||e==="moontoast_videos")&&this.animateOut({$el:this.$el.find(".moontoast_videos"),left:215,top:755}),(!e||e==="contact")&&this.animateOut({$el:this.$el.find(".contact"),left:425,top:95}),(!e||e==="social_activation")&&this.animateOut({$el:this.$el.find(".social_activation"),left:830,top:480}),(!e||e==="blog")&&this.animateOut({$el:this.$el.find(".blog"),left:765,top:195}),e||(this.wheelOut=!1),this.$el.find(".moonwheel_icon").addClass("moonwheel_icon_off")},moduleToggle:function(t){var n=e(t.target).data("widget");return e("."+n).css("display")==="none"?this.openWheel(n):this.closeWheel(n),!1},closeClick:function(e){var t=this;this.wheelOut?this.closeWheel():this.openWheel()},render:function(t){var n=this,r=!1;this.setElement(e("#panel_0:last")),e("#contact form").bind("submit",n.contactFormSubmit),e("body").bind("user_scroll",function(t,i){i.top<620?(r||(n.openWheel(),r=!0),i.top<300?e(".top_moon").css({position:"fixed",top:-(i.top*1.5)}):e(".top_moon").css({position:"absolute",top:0})):i.top>1320&&r&&(n.closeWheel(),r=!1)}),this.$el.find(".featured_downloads .moonwheel_box img").each(function(){e(this).bind("swipeleft",function(){n.downloadsLeftClick(),clearInterval(n.autoRotate)})}),this.$el.find(".featured_downloads .moonwheel_box img").each(function(){e(this).bind("swiperight",function(){n.downloadsRightClick(),clearInterval(n.autoRotate)})}),this.$el.find(".blog.moonwheel_box img").each(function(){e(this).bind("swipeleft",function(){n.blogLeftClick(),clearInterval(n.autoRotateBlog)})}),this.$el.find(".blog .moonwheel_box img").each(function(){e(this).bind("swiperight",function(){n.blogRightClick(),clearInterval(n.autoRotateBlog)})}),this.autoRotate=setInterval(function(){n.downloadsRightClick()},3900),this.autoRotateBlog=setInterval(function(){n.blogRightClick()},4e3),s.any()||n.closeWheel(),n.downloadsRightClick(),n.blogRightClick()}})})