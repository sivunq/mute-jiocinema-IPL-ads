# mute-jiocinema-IPL-ads 

### This extension automatically mutes the volume when ads appear during IPL matches. Also it puts a dark overlay over the video player when the ads are playing, you can disable the overlay from the extension popup.  Please refresh the JioCinema page, after adding/enabling the extension.

# Instructions to Install
Ideally i should have just provided the link to the chrome web store to install the extension, but i'm facing a few issues while publishing in chrome web store, It should be fixed soon . Till then, please follow these steps to install the extension. It only takes 2 mins to install.
1. You need to download the zip file from this link: https://github.com/sivunq/mute-jiocinema-IPL-ads/archive/refs/heads/main.zip
2. Unzip the downloaded file.
3. Now there are two ways to install the extension. First one is very simple where you just drag and drop the unzipped folder in the extensions page of the chrome browser (go to this link to access extensions page-> chrome://extensions/). You just need to ensure your developer mode is on (a toggle button on top right side). Second way is explained in this article, takes only 2 mins https://webkul.com/blog/how-to-install-the-unpacked-extension-in-chrome/


# Edge Cases
The logic that I have implemented will take care of most of the scenarios, but because not all ads are same length ads so there are some edge cases where the ads might get unmuted for 1-2 seconds, no need to worry it gets muted again immediately.

Also there might be cases where the ads get unmuted 2-3 seconds before the match starts or there is a delay of 2-3 seconds in unmuting once the match starts, i believe this shouldn't be much of an issue since 95% of the ad is muted.

I'll keep working on improving my logic, so bear with me please.


# Feedback
This is my first time building and publishing a browser extension, please do provide feedback. 


PS: In case you are wondering why code in the background.js and content.js seems like gibberish, that's done to protect the logic from Jiocinema's team. Although I'm sure they are quite smart and it wouldn't be much difficut for them to figure it out.
