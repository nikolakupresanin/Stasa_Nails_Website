   /*Parallax JS*/
   $(document).ready(function(){
    $(".sidenav").sidenav();
    $(".tooltippped").tooltip();
    $(".materialboxed").materialbox();
    $(".parallax").parallax();

  });
  /*End Parallax JS*/

  /*Custom JS*/
  /*Animated Card*/
  var card = document.querySelector(".card");
    card.addEventListener('click' , function(){
      card.classList.toggle("open")
    })
  /*End Animated Card*/

    /*Scrolling Animation*/
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show')
        }
      });
    });
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  /*End Scrolling Animation*/

  /*Navigation Smooth Menu*/
  let anchorlinks = document.querySelectorAll('a[href^="#"]')
  for (let item of anchorlinks) { // relitere 
   item.addEventListener('click', (e)=> {
       let hashval = item.getAttribute('href')
       let target = document.querySelector(hashval)
       target.scrollIntoView({
           behavior: 'smooth',
           block: 'start'
       })
       history.pushState(null, null, hashval)
       e.preventDefault()
   })
}
  /*End Navigation Smooth Menu*/

  /*End Custom JS*/