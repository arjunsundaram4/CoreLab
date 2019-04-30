/*window.onscroll=function()
{
	scrollFunction()
};
function scrollFunction()
{
	if(document.body.scrollTop > 20 ||document.Element.scrollTop > 20)
	{
		document.getElementById("Arrow").style.display="block";
	}
	else
	{
		document.getElementById("Arrow").style.display="none";
	}
}
function topFunction()
{
	document.body.scrollTop=0;
	document.documentElement.scrollTop=0;
}*/
$(document).ready(function()
{
 $(window).scroll(function()
{
 if ($(this).scrollTop() > 2) {

// ===== Scroll to Top ==== 
$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('#back-to-top').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        
        $('#back-to-top').tooltip('show');

