/*If you right click a VSCO profile picture, it will lead to a download popup. This script will remove the parameters 
at the end of the profile picture link (for example, "size=120&c=1&dpr=1.25") and once they are removed, the new link
will redirect to the full size original profile picture. 

So with this extension installed, you will be able to view VSCO profile pictures in full size. If it does not work, 
refresh the page. */

images = document.getElementsByTagName('img');
if (images.length > 0) {
    smallpfp = images[1].src;
    fullsize = smallpfp.split('?')[0];
    console.log(fullsize);
    images[1].src = fullsize;
    for(var i = 2, max = images.length; i < max; i++) {
        // console.log(images[i]);
        smallpfp = images[i].src;
        fullsize = smallpfp.split('?')[0];
        images[i].src = fullsize;
        // console.log(fullsize);
    } 

}
