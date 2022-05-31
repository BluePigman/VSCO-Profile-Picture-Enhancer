# VSCO Profile Picture Enhancer

Makes a VSCO profile picture's source the full size image instead of a download link.
If you try to open a profile picture in a new tab, it will lead to a download popup. This script will remove the parameters
at the end of the profile picture link (for example, "size=120&c=1&dpr=1.25") and once they are removed, the new link
will redirect to the full size original profile picture. This won't work for new pictures, as the original links are now binary/octet-stream files.

This is an extension for Google Chrome.

Installation instructions:

1. Download and unzip into a folder.
2. Go to chrome://extensions/
3. Enable developer mode.
4. Click Load unpacked, select the folder.
