import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  a: boolean;
  constructor(private route: Router) {}

  ngOnInit() {
    $(document).ready(function() {
      let menuNav = $('#navbarSupportedContent');
      let navbar = $('#navbar').width();
      let number = 0;

      function activeMenu() {
        if (navbar <= 940) {
          $('.collapse ul li a').on('click', function() {
            menuNav.animate({ top: 0 }, 300, function() {
              number = 1;
            });
          });
        }
      }

      $(window).resize(activeMenu);

      if (navbar > 940) {
        $(window).on('scroll', function() {
          let windowTop = $(this.window).scrollTop();
          console.log('size:', navbar);
          if (windowTop > 300) {
            $('#navbar').css({ height: '10vh' });
          } else if (windowTop < 300) {
            $('#navbar').css({ height: '15vh' });
          }
        });
      } else {
        $('#navbar').css({ height: 'auto' });
      }
    });
  }

  buscarPeli(termino: string) {
    if (termino.length === 0) {
      return;
    }

    this.route.navigate(['search', termino]);
  }

  hideMenu() {
    let menuNav = document.getElementById('navbarSupportedContent');
    let boton = document.getElementById('boton');
    menuNav.className = 'collapse navbar-collapse';

    boton.className = 'navbar-toggler collapsed';
    boton.style.transition = 'all 2s ease';
  }
}
