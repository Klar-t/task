QuickFlip Plugin for jQuery
Author  : Jon Raasch
Website : http://jonraasch.com/blog/
Email   : jr@jonraasch.com

Copyright (c)2008 Jon Raasch



##############################
       FreeBSD License     
##############################
##############################

Copyright (c)2008 Jon Raasch. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	1.	Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	2.	Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
	
THIS SOFTWARE IS PROVIDED BY JON RAASCH ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JON RAASCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

The views and conclusions contained in the software and documentation are those of the authors and should not be interpreted as representing official policies, either expressed or implied, of Jon Raasch, who is the man.


    
##############################
         Instructions   
##############################
##############################

Wrap any panels you want to flip in divs with the class “quickFlipPanel”, then wrap those in a div with the class “quickFlip”:

<div class="quickFlip">
    <div class="quickFlipPanel">
        <p> Front content here </p>
        <p class="quickFlipCta">Click to Flip</p>
    </div>

    <div class="quickFlipPanel">
        <p> Back content here </p>
        <p class="quickFlipCta">Click to Flip</p>
    </div>
</div>

Notice that we have two quickFlipPanels here. You can use any number of .quickFlipPanel’s, from one on up; they are grouped together by divs with the class “quickFlip”.

Also notice that within each panel there is an element with the class “quickFlipCta”. QuickFlip uses this call to action to trigger the flip when clicked. Alternately, you can trigger the flip without .quickFlipCta, using the quickFlip.flip() function (see below).


###################
The QuickFlip files
###################

There are a few files you need to upload to your site and include. Please make sure to adjust these paths as necessary:

<script src="jquery-1.2.6.min.js" type="text/javascript"></script>
<script src="quickflip.js" type="text/javascript"></script>

<link rel="stylesheet" type="text/css" href="quickflip.css" />

Besides the core Javascript and CSS files, there is some additional CSS you will need to write to get QuickFlip working. Since QuickFlip relies on absolute positioning, you need to define a height and width for .quickFlip and .quickFlipPanel.

In general, try not to overwrite any of the styling in quickflip.css (this shouldn’t effect much). You can attach any extra class names to .quickFlipPanel, but don’t attach an ID or inline style. Additionally, avoid attaching margin, padding or positioning to .quickFlipPanel. You can attach any of these to .quickFlip or anything inside .quickFlipPanel if you need to.


######################
Advanced QuickFlip use
######################

Although basic QuickFlip is easy to implement, there are several options that can be customized by advanced users.

First, flip speed can be customized by adjusting the quickFlip.speed array in Javascript. For example:

<script type="text/javascript">
    quickFlip.speed = Array( 100 , 90 );
</script>

The first integer in this array is the speed at which the front panel closes and the second integer is the speed at which the back panel opens. You can also set the speed of a particular .quickFlip group:

<script type="text/javascript">
    quickFlip.wrappers[0].speed = Array( 120 , 30 );
</script>

This allows you to speed up or slow down any group of panels. Just make sure not to slow it down too much—it’s called ‘QuickFlip’ for a reason, if it’s too slow the illusion turns into a trrrrrrrain wrrrrrrreck.


############################
Triggering the flip manually
############################

Additionally, if you would like to trigger the flip function without the use of .quickFlipCta elements, you can use the quickFlip.flip() function. This function expects three variables; the first two are whichever QuickFlip wrapper and panel you’d like to flip, and the third is an option controlling how many times the panel is flipped. For the third variable you should normally use 1 to flip the panel once, but try flipping it more times, or setting the value to -1 to flip continuously.

<script type="text/javascript">
    quickFlip.flip(1,0,1);
</script>

This takes the second QuickFlip wrapper, flips over the first panel and opens the second (a single flip).


#################################
Known bug and a decent workaround
#################################

QuickFlip uses Javascript to append duplicates of an element to create the illusion that it is flipping. When this occurs in Internet Explorer 6 and 7, any Javascript events that were attached within that element get removed (click, hover, etc.).

The QuickFlip plugin gets around this internally by reattaching the click event for the .quickFlipCta, so most QuickFlips are unaffected. Additionally this problem only effects Javascript events, not normal <a href=""></a> links. However, if there are extra Javascript events attached within the QuickFlip panels, these events must be put in a function with no arguments, and the name of this function must be passed to quickFlip.reattachEvents. When this is set, it will cause QuickFlip to reattach the events for Internet Explorer users.

Please report any other bugs you find to jr@jonraasch.com