import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  @ViewChild('searchExpanded') searchExpanded!: ElementRef;
  @ViewChild('modal')  modal!: ElementRef;
  @ViewChild('searchIcon') searchIcon!: ElementRef;
  faSearch = faSearch;

  constructor() { }
  
  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event.target']) onClick (targetElement: HTMLElement) {
    // No primeiro parametro vc passa o evento, no segundo vc passa em array as opcoes do evento, vc pode passar $event que é o proprio evento, vc pode passar o event.target que é o alvo, etc. Todos os argumentos que vc está passando vao ser usados ai na funcao onClick como se pode ver.
    // TargetElement e event sao so nomes de variáveis
    if (!targetElement) { // Para que serve isso, retirando nao muda nada
      return;
    }
    const clickedInside = this.searchExpanded.nativeElement.contains(targetElement); // Esta a verificar se no searchExpanded contem o elemento que foi atingido
    const clickedSearchButton = this.searchIcon.nativeElement.contains(targetElement);
    if (!clickedInside && !clickedSearchButton) { // Se nao foi clicado no input e nem no searchIcon, entao ja pode fechar.
        this.closeModal();
    }
  }

  showModal() {
    this.searchExpanded.nativeElement.style.display='block';
    this.modal.nativeElement.style.display='block';
  }

  closeModal() {
    this.searchExpanded.nativeElement.style.display='none';
    this.modal.nativeElement.style.display='none';
  }
}
