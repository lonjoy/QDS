// tab
$.fn.extend({
	"tab":function(){
		var tab = $(this),
			tabTags = $(".cell-tab-tags > li",tab),
			tabCont = tab.next(".cell-tab-cont"),
			tabPanels = $(".cell-tab-pane",tabCont);
		tabTags.each(function(){
				var theTabTag = $(this),
					theTabTagIndex = $(this).index();
				theTabTag.click(function(e){
					e.preventDefault();
					tabTags.removeClass("active");
					theTabTag.addClass("active");
					tabPanels.eq(theTabTagIndex).siblings(".cell-tab-pane").removeClass("active").end().addClass("active");
			});
		});
	}
});