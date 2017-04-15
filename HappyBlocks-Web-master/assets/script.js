function changeSlide(slideshowID,slideName) {
	var slideshowContainer = document.getElementById("slideshow-" + slideshowID + "-container");
	var shownSlide = slideshowContainer.getElementsByClassName("shown")[0];
	var slide = document.getElementById(slideshowID + "-" + slideName);

	slide.className += " shown";
	shownSlide.className = shownSlide.className.replace(/(\sshown|shown\s)/, "");

	var slideshowControls = document.getElementById("slideshow-" + slideshowID + "-controls");
	var selectedButton = slideshowControls.getElementsByClassName("selected")[0];
	var button = document.getElementById(slideshowID + "-" + slideName + "-controls");

	button.className += " selected";
	if (typeof selectedButton !== null)
	selectedButton.className = selectedButton.className.replace(/(\sselected|selected\s)/, "");
}
