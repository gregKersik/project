import { Directive, HostListener, ElementRef, Renderer2, OnInit, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{

    // private isOpen: boolean = false;
    @HostBinding('class.open') isOpen = false;

    constructor(/*private elRef: ElementRef, private render: Renderer2*/){}

    ngOnInit(){
    }
    
    @HostListener('click') onClick(eventData: Event){
        this.isOpen = !this.isOpen
        // if (this.isOpen) {
        //     this.render.addClass(this.elRef.nativeElement, 'open')
        // } else{
        //     this.render.removeClass(this.elRef.nativeElement, 'open')
        // }
    }
}