define(["jquery","underscore","backbone","_js/views/layout","jqmobile"],function(e,t,n,r){var i=n.Router.extend({routes:{"*actions":"pageAction"}});return{initialize:function(e){var t=new i(e),s=new r;t.on("route:pageAction",function(e){s.pageChange(e)}),n.history.start(),s.render()}}})