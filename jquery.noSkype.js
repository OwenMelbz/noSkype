(function($){
     $.fn.extend({
         noSkype: function() {
             return this.each(function() {
                var string = $(this).text();
                string = string.replace(" ", "<span style='display:none !important;'>_</span> ");
                string = string.replace("-", "<span style='display:none !important;'>_</span>-");
				$(this).html(string);
            });
        }
    });
})(jQuery);