expandProjects = () => {
    document.querySelector('.hide-project').style.opacity = '0';
    document.querySelector('.hide-project').style.display = 'none';

    document.querySelector('.more-projects').addEventListener('click', () => {
        if (document.querySelector('.hide-project').style.opacity === '0') {
            setTimeout(() => {
                $('html, body').animate({ scrollTop: $('.first-hidden').offset().top }, 500);
                document.querySelector('.hide-project').style.opacity = '1';
            }, 700);
            document.querySelector('.hide-project').style.display = 'block';
            document.querySelector('.more-projects').innerHTML = `<button class="btn btn-large btn-red">
                                                                    <i class="fas fa-times"></i> less projects
                                                                  </button> `
        } else {
            setTimeout(() => {
                document.querySelector('.hide-project').style.display = 'none';
                document.querySelector('.more-projects').innerHTML = `<button class="btn btn-large btn-red">
                                                                        <i class="fas fa-bars"></i> more projects
                                                                      </button> `
            }, 400);
            document.querySelector('.hide-project').style.opacity = '0';
            $('html, body').animate({ scrollTop: $('.last-unhidden').offset().top }, 500);
        }
    })
}

expandProjects();
