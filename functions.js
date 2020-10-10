function ShowAndHideContent(x,y) {
    if (x.style.display === 'none' || x.style.display === '' || y.style.display === 'none' || y.style.display === '') {

        y.style.display = "block";
        x.style.display = "block";
    }else {

        y.style.display = "none";
        x.style.display = "none"
    }
}