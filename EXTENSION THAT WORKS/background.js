(function($) {
	
    var self = $.nCage = new function(){};
	
    $.extend(self, {
        nCageImgs : [
            'https://iscale.iheart.com/v3/url/aHR0cDovL2ltYWdlLmloZWFydC5jb20vaW1hZ2VzL3JvdmkvMTA4MC8wMDAzLzcyMy9NSTAwMDM3MjM4NDguanBn',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEsagGp1Ba3wPjWE9rPzlRvlE6cCE0YSUu4iE0ng2YplAy3gY',
            'http://www.rap-up.com/app/uploads/2017/06/dj-khaled-drake-to-the-max.jpg',
            'http://globalspin365.com/wp-content/uploads/2017/04/Screen-Shot-2017-04-10-at-9.00.15-PM.png'
            'http://static.spin.com/files/2017/04/4a57715a1b4a43437178b781f9d9457d.1000x1000x1-1493355567.jpg'
            
        ],
        handleImages : function (lstImgs, time)
        {
            $.each($('img'), function(i,item) { 
                //Skip if image is already replaced
                if($.inArray($(item).attr('src'), lstImgs) == -1)
                {
					var h = $(item).height();
					var w = $(item).width();
					
					//If image loaded
					if(h > 0 && w > 0)
					{
						//Replace
						$(item).css('width', w + 'px').css('height', h + 'px');
						$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
					}
					else
					{
						//Replace when loaded
						$(item).load(function(){
							//Prevent 'infinite' loop
							if($.inArray($(item).attr('src'), lstImgs) == -1)
							{
								var h = $(item).height();
								var w = $(item).width();
								$(item).css('width', w + 'px').css('height', h + 'px');
								$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
							}
						});
					}
				}
            });
			
            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        }
    });

    //Run on jQuery ready
    $(function(){
        self.handleImages(self.nCageImgs, 3000);
    });
})(jQuery);